import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MapPin, Check } from 'lucide-react';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.date && formData.time && formData.service) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          message: ''
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF2]">
      {/* Header */}
      <div className="bg-black bg-opacity-40 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-white tracking-tight">NOVELTY SUITES</h1>
          <p className="text-slate-300 mt-2">Taste the Look of Lucknow</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-300 mb-4">Book Your Appointment</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Experience personalized service and expert craftsmanship. Schedule your visit to discover the perfect suit tailored just for you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Appointment Form */}
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-amber-500" size={28} />
              <h3 className="text-2xl font-bold text-white">Schedule Details</h3>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="bg-green-500 rounded-full p-4 mb-4">
                  <Check size={48} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Appointment Confirmed!</h4>
                <p className="text-slate-300 text-center">We'll contact you shortly to confirm your booking.</p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                    <User size={18} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                      <Mail size={18} />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                      <Phone size={18} />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                      <Calendar size={18} />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                      <Clock size={18} />
                      Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    >
                      <option value="">Select time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="flex items-center gap-2  bg-slate-900 text-slate-300 mb-2 font-medium">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3  bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  >
                    <option value="">Select a service</option>
                    <option value="bespoke">Bespoke Suit Consultation</option>
                    <option value="fitting">Fitting & Alterations</option>
                    <option value="collection">View New Collection</option>
                    <option value="styling">Personal Styling Session</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                    placeholder="Any specific requirements or preferences..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold py-4 rounded-lg hover:from-amber-500 hover:to-amber-400 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                </button>
              </div>
            )}
          </div>

          {/* Info Card */}
          <div className="space-y-6">
            {/* Store Hours */}
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Store Hours</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between py-2 border-b border-slate-700">
                  <span className="font-medium">Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-700">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-amber-50">123 Fashion Avenue, Suite 100</p>
                    <p className="text-amber-50">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-amber-50">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-amber-50">info@elegancesuites.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-[#FFFBF2] bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700 p-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-amber-500" size={28} />
            <h3 className="text-2xl font-bold text-white">Find Our Store</h3>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6173145299034!2d-73.98823492346709!3d40.74844097138682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699564789123!5m2!1sen!2sus"
              src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120289.29384487351!2d80.84535182575569!3d26.84845942370906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x399bfdb095555555%3A0x1ad00e208f1a0968!2sNazirabad%2C%20Vishal%20Mall%20Ke%20Line%20Mein%2C%20133%2F032a%2C%20Old%20Nazirabad%20Rd%2C%20Old%20Nazirabad%2C%20Khayali%20Ganj%2C%20Aminabad%2C%20Lucknow%2C%20Uttar%20Pradesh%20226018!3m2!1d26.848483299999998!2d80.92775329999999!5e1!3m2!1sen!2sin!4v1762598763294!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/dir//Empire+State+Building"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black bg-opacity-40 backdrop-blur-sm border-t border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-slate-400">
          <p>&copy; 2025 Elegance Suites. Crafting excellence since 1985.</p>
        </div>
      </div>
    </div>
  );
}
