import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import AnimatedButton from '../../components/Animations/AnimatedButton'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can integrate a backend or service like Formspree or EmailJS
    emailjs
    .send(
      "service_mrcj28l",
      "template_22sdtmh",
      formData,
      "aFKyFARjzS7atT-Q7"
    )
    .then(
      (result) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Failed to send. Try again.");
        console.error(error);
      }
    );
  };

  return (
    <motion.div
      className="w-full max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-canard-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-canard-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2  border border-canard-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
    
         <AnimatedButton text="Send Message" type="orange" size="big" asSubmit/>
        
      </form>
    </motion.div>
  );
};

export default ContactForm;
