import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
  created_at?: string;
}

export interface ConsultationSubmission {
  id?: string;
  name: string;
  email: string;
  state: string;
  country: string;
  phone?: string;
  project_description: string;
  preferred_day: string;
  preferred_time: string;
  created_at?: string;
}

// Helper function to sanitize input
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Contact form submission
export const submitContactForm = async (data: Omit<ContactSubmission, 'id' | 'created_at'>) => {
  try {
    // Sanitize and validate data
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email.toLowerCase()),
      company: data.company ? sanitizeInput(data.company) : null,
      phone: data.phone ? sanitizeInput(data.phone) : null,
      service: sanitizeInput(data.service),
      budget: data.budget ? sanitizeInput(data.budget) : null,
      timeline: data.timeline ? sanitizeInput(data.timeline) : null,
      message: sanitizeInput(data.message)
    };

    // Validate required fields
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.service || !sanitizedData.message) {
      return { success: false, error: 'Please fill in all required fields' };
    }

    // Validate email format
    if (!isValidEmail(sanitizedData.email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }

    // Validate name length
    if (sanitizedData.name.length < 2) {
      return { success: false, error: 'Name must be at least 2 characters long' };
    }

    // Validate message length
    if (sanitizedData.message.length < 10) {
      return { success: false, error: 'Message must be at least 10 characters long' };
    }

    console.log('Submitting contact form data:', sanitizedData);

    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([sanitizedData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: 'Failed to submit contact form. Please try again.' };
    }

    console.log('Contact form submitted successfully:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
};

// Consultation form submission
export const submitConsultationForm = async (data: Omit<ConsultationSubmission, 'id' | 'created_at'>) => {
  try {
    // Sanitize and validate data
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email.toLowerCase()),
      state: sanitizeInput(data.state),
      country: sanitizeInput(data.country),
      phone: data.phone ? sanitizeInput(data.phone) : null,
      project_description: sanitizeInput(data.project_description),
      preferred_day: sanitizeInput(data.preferred_day),
      preferred_time: sanitizeInput(data.preferred_time)
    };

    // Validate required fields
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.state || 
        !sanitizedData.country || !sanitizedData.project_description || 
        !sanitizedData.preferred_day || !sanitizedData.preferred_time) {
      return { success: false, error: 'Please fill in all required fields' };
    }

    // Validate email format
    if (!isValidEmail(sanitizedData.email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }

    // Validate name length
    if (sanitizedData.name.length < 2) {
      return { success: false, error: 'Name must be at least 2 characters long' };
    }

    // Validate project description length
    if (sanitizedData.project_description.length < 10) {
      return { success: false, error: 'Project description must be at least 10 characters long' };
    }

    console.log('Submitting consultation form data:', sanitizedData);

    const { data: result, error } = await supabase
      .from('consultation_submissions')
      .insert([sanitizedData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: 'Failed to submit consultation request. Please try again.' };
    }

    console.log('Consultation form submitted successfully:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('Consultation submission error:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
};