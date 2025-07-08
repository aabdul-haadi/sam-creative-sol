import React, { useState } from 'react';
import { X, Calendar, User, MapPin, MessageSquare, Clock } from 'lucide-react';
import { submitConsultationForm } from '../lib/supabase';

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    country: '',
    phone: '',
    email: '',
    projectDescription: '',
    day: '',
    timeSlot: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['9 AM - 12 PM', '12 PM - 3 PM', '3 PM - 5 PM'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'day' ? { timeSlot: '' } : {})
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitConsultationForm({
        name: formData.name,
        email: formData.email,
        state: formData.state,
        country: formData.country,
        phone: formData.phone,
        project_description: formData.projectDescription,
        preferred_day: formData.day,
        preferred_time: formData.timeSlot
      });

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
          setFormData({
            name: '',
            state: '',
            country: '',
            phone: '',
            email: '',
            projectDescription: '',
            day: '',
            timeSlot: ''
          });
        }, 8000);
      } else {
        setError(result.error || 'Failed to submit consultation request');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl transform transition-all duration-300">
        {/* Header */}
        <div className="p-5 border-b border-gray-200 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="w-5 h-5 text-yellow-600" />
            <h2 className="text-xl font-semibold text-gray-800">Schedule a Free Consultation</h2>
          </div>
          <p className="text-gray-600 text-sm">
            Share your project details, and we'll craft a personalized plan to bring your ideas to life.
          </p>
        </div>

        {/* Form Content */}
        <div className="p-5">
          {isSubmitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 text-sm mb-4">
                Your request has been submitted. A Zoom meeting link will be sent to your email within 24 hours.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-yellow-800">
                <p><strong>Next Steps:</strong> Check your email for the consultation link and details.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              {/* Personal Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-yellow-600" />
                  <h3 className="text-sm font-medium text-gray-800">Your Details</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-all duration-200"
                      placeholder="Your email"
                    />
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                  <h3 className="text-sm font-medium text-gray-800">Location</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="country" className="block text-xs font-medium text-gray-700 mb-1">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-all duration-200"
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-xs font-medium text-gray-700 mb-1">State/Province *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-all duration-200"
                      placeholder="Your state"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-yellow-600" />
                  <h3 className="text-sm font-medium text-gray-800">Project Details</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="projectDescription" className="block text-xs font-medium text-gray-700 mb-1">Project Description *</label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-all duration-200 resize-none"
                      placeholder="Briefly describe your project..."
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="day" className="block text-xs font-medium text-gray-700 mb-1">Preferred Day *</label>
                      <select
                        id="day"
                        name="day"
                        value={formData.day}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-all duration-200"
                      >
                        <option value="">Select day</option>
                        {days.map((day) => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeSlot" className="block text-xs font-medium text-gray-700 mb-1">Preferred Time *</label>
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        required
                        disabled={!formData.day}
                        className={`w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-all duration-200 ${!formData.day ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <option value="">Select time slot</option>
                        {formData.day && timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gray-50 rounded-md p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-yellow-600" />
                  <h4 className="text-sm font-medium text-gray-800">What You’ll Get</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-2 text-xs text-gray-600">
                  <ul className="space-y-1">
                    <li className="flex items-start"><span className="text-yellow-600 mr-1">•</span> Project analysis</li>
                    <li className="flex items-start"><span className="text-yellow-600 mr-1">•</span> Tech recommendations</li>
                    <li className="flex items-start"><span className="text-yellow-600 mr-1">•</span> Timeline planning</li>
                  </ul>
                  <ul className="space-y-1">
                    <li className="flex items-start"><span className="text-yellow-600 mr-1">•</span> Budget estimation</li>
                    <li className="flex items-start"><span className="text-yellow-600 mr-1">•</span> Team introduction</li>
                    <li className="flex items-start"><span className="text-yellow-600 mr-1">•</span> Project roadmap</li>
                  </ul>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-3">
                <p className="text-xs text-gray-500">* Required fields. Your data is secure.</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-600 text-gray-900 px-5 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Scheduling...' : 'Book Consultation'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;