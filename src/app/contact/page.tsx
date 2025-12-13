/**
 * CONTACT PAGE
 * 
 * Purpose: Contact form and contact information display
 * 
 * Layout: 2-column grid (responsive)
 * Left Column: Contact information (email, WhatsApp, location, availability)
 * Right Column: Contact form (name, email, subject, message)
 * 
 * Features:
 * - Controlled form inputs (React state)
 * - Form validation (required fields)
 * - Submit status feedback (idle, success, error)
 * - Quick connect buttons (Email, WhatsApp, LinkedIn)
 * - Response time badge
 * - Availability status indicator
 * 
 * State Management:
 * - formData: Object storing all form field values
 * - isSubmitting: Boolean for submit button loading state
 * - submitStatus: String ('idle' | 'success' | 'error') for feedback messages
 * 
 * Note: Form submission is currently simulated. Replace with actual API call.
 */

"use client"; // Enable client-side features for React hooks

import { useState } from "react"; // React state hook
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser, FaPaperPlane } from "react-icons/fa"; // UI icons
import Layout from "@/components/Layout"; // Page wrapper

export default function Contact() {
  // ===== STATE MANAGEMENT =====
  
  // Form data state: Stores all form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Submission state: Track if form is currently being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Submit status: Track form submission result ('idle' | 'success' | 'error')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ===== EVENT HANDLERS =====
  
  // Handle input changes: Update formData state when user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; // Extract field name and value from event
    setFormData(prev => ({
      ...prev, // Keep existing form data
      [name]: value // Update only the changed field
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submit
    setIsSubmitting(true); // Show loading state on submit button
    setSubmitStatus('idle'); // Reset status

    try {
      // ===== TODO: Replace with actual API call =====
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate 1-second API call
      
      // Reset form fields on successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success'); // Show success message
    } catch {
      setSubmitStatus('error'); // Show error message
    } finally {
      setIsSubmitting(false); // Remove loading state
    }
  };

  return (
    <Layout>
      {/* ===== CONTACT PAGE ===== */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* ===== PAGE HEADER ===== */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Let&apos;s build something amazing together.
            </p>
          </div>

          {/* ===== 2-COLUMN LAYOUT ===== */}
          {/* Responsive: 1 column on mobile, 2 columns on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* ===== LEFT COLUMN: CONTACT INFORMATION ===== */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-light text-gray-800 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  
                  {/* Email Section: Two email addresses with clickable mailto links */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaEnvelope className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-gray-800">Email</h3>
                      <div className="space-y-1">
                        <a href="mailto:fidel@delitweb.co.za" className="text-blue-600 hover:text-blue-800 block">
                          fidel@delitweb.co.za
                        </a>
                        <a href="mailto:finiyid@gmail.com" className="text-blue-600 hover:text-blue-800 block">
                          finiyid@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Section: Direct link to WhatsApp chat */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <FaWhatsapp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-gray-800">WhatsApp</h3>
                      <a href="https://wa.me/27677188232" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                        +27 67 718 8232
                      </a>
                    </div>
                  </div>

                  {/* Location Section: General location info */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <FaMapMarkerAlt className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-gray-800">Location</h3>
                      <p className="text-gray-600">South Africa</p>
                    </div>
                  </div>
                </div>

                {/* Availability Status Badge: Green pulsing indicator */}
                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-normal">Available for Projects</span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    Currently accepting new projects and collaborations
                  </p>
                </div>
              </div>
            </div>

            {/* ===== RIGHT COLUMN: CONTACT FORM ===== */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-light text-gray-800 mb-8">Send a Message</h2>
                
                {/* Form with controlled inputs (value bound to state) */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input Field - Controlled input bound to formData.name state */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {/* Input with user icon on the left */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  {/* Email Input Field - HTML5 email validation */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email address"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  {/* Subject Input Field - Simple text input without icon */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What is this about?"
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Message Textarea Field - Multi-line text input (6 rows) */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your project or inquiry..."
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Submit Button - Dynamic state based on isSubmitting */}
                  <div>
                    {/* Disable during submission */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-colors ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    >
                      {/* Conditional button content based on submission state */}
                      {isSubmitting ? (
                        // LOADING STATE: Spinner + "Sending..." text
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        // NORMAL STATE: Paper plane icon + "Send Message" text
                        <div className="flex items-center space-x-2">
                          <FaPaperPlane className="h-5 w-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </button>
                  </div>

                  {/* ===== STATUS MESSAGES ===== */}
                  {/* Conditional success message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 font-normal">Message sent successfully!</p>
                      <p className="text-green-600 text-sm">I&apos;ll get back to you as soon as possible.</p>
                    </div>
                  )}

                  {/* Conditional error message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 font-normal">Failed to send message.</p>
                      <p className="text-red-600 text-sm">Please try again or contact me directly via email.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* ===== FINAL CALL-TO-ACTION SECTION ===== */}
          {/* Alternative contact methods if form doesn't work */}
          <div className="text-center bg-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-light text-gray-800 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your ideas and create something amazing together. I&apos;m here to help bring your vision to life.
            </p>
            
            {/* Quick contact buttons: Email and WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Direct email link */}
              <a 
                href="mailto:fidel@delitweb.co.za" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-normal hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>Send Email</span>
              </a>
              
              <a 
                href="https://wa.me/27677188232" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-normal hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}