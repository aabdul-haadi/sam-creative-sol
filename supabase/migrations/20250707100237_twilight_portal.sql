/*
  # Fix RLS Policies for Form Submissions

  1. Security
    - Enable RLS on both tables
    - Allow anonymous users to insert form submissions
    - Allow authenticated users to read submissions for admin purposes
    
  2. Tables
    - contact_submissions: Contact form data
    - consultation_submissions: Consultation request data
*/

-- Ensure tables exist with correct structure
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  service text NOT NULL,
  budget text,
  timeline text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS consultation_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  state text NOT NULL,
  country text NOT NULL,
  phone text,
  project_description text NOT NULL,
  preferred_day text NOT NULL,
  preferred_time text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can read contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON consultation_submissions;
DROP POLICY IF EXISTS "Authenticated users can read consultation submissions" ON consultation_submissions;

-- Contact form policies
CREATE POLICY "Enable insert for anonymous users" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

-- Consultation form policies  
CREATE POLICY "Enable insert for anonymous users" ON consultation_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users" ON consultation_submissions
  FOR SELECT TO authenticated USING (true);