import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter l'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Téléphone',
      content: '+596 596 59 63 00',
      description: 'Du lundi au vendredi',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'contact@collectivitedemartinique.mq',
      description: 'Nous vous répondrons dans les plus brefs délais',
    },
    {
      icon: MapPinIcon,
      title: 'Adresse',
      content: 'Rue Gaston Defferre, CS 30137, 97201 Fort-de-France',
      description: 'Martinique, France',
    },
    {
      icon: ClockIcon,
      title: 'Horaires d\'ouverture',
      content: '7h30 - 14h30',
      description: 'Du lundi au vendredi',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-primary py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour répondre à vos questions
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <info.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-primary font-medium mb-1">{info.content}</p>
              <p className="text-gray-500 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="rdv">Prise de rendez-vous</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition duration-300"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <iframe
              title="CTM Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.5791285895837!2d-61.07274668565667!3d14.603499589809388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6aa14f朗读e8b0a3%3A0x7f9b7a1a0b1b1b1b!2sCollectivit%C3%A9%20Territoriale%20de%20Martinique!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 