import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'cr'>('fr');

  const services = {
    fr: [
      {
        title: 'Espace Personnel',
        description: 'Accédez à votre espace personnel sécurisé pour suivre vos démarches et dossiers en cours.',
        icon: UserIcon,
        link: '/espace-personnel',
      },
      {
        title: 'Démarches en ligne',
        description: 'Effectuez vos démarches administratives en ligne sans vous déplacer.',
        icon: DocumentTextIcon,
        link: '/demarches',
      },
      {
        title: 'Suivi des demandes',
        description: 'Consultez létat d avancement de vos demandes en temps réel.',
        icon: ClipboardDocumentCheckIcon,
        link: '/suivi',
      },
      {
        title: 'Services numériques',
        description: 'Découvrez l ensemble de nos services numériques disponibles 24h/24.',
        icon: DocumentDuplicateIcon,
        link: '/services-numeriques',
      },
      {
        title: 'Authentification',
        description: 'Connectez-vous de manière sécurisée à votre compte CTM.',
        icon: KeyIcon,
        link: '/auth',
      },
      {
        title: 'État des services',
        description: 'Consultez la disponibilité de nos services en ligne.',
        icon: ArrowPathIcon,
        link: '/status',
      },
    ],
    cr: [
      {
        title: 'Espas Pésonel',
        description: 'Aksédé a espas pésonel ou pou swiv démann ou.',
        icon: UserIcon,
        link: '/espace-personnel',
      },
      {
        title: 'Démann an lign',
        description: 'Fè démann administratif ou anlign san ou pa déplasé.',
        icon: DocumentTextIcon,
        link: '/demarches',
      },
      {
        title: 'Swivi démann',
        description: 'Véyé koté démann ou rivé an tan reyel.',
        icon: ClipboardDocumentCheckIcon,
        link: '/suivi',
      },
      {
        title: 'Sèvis nimérik',
        description: 'Dékouvè tout sèvis nimérik nou disponib 24h/24.',
        icon: DocumentDuplicateIcon,
        link: '/services-numeriques',
      },
      {
        title: 'Koneksyon',
        description: 'Konekté ou an tout sékirité asi kont CTM ou.',
        icon: KeyIcon,
        link: '/auth',
      },
      {
        title: 'Eta sèvis yo',
        description: 'Véyé si sèvis anlign nou yo ka maché.',
        icon: ArrowPathIcon,
        link: '/status',
      },
    ],
  };

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
              {language === 'fr' ? 'Nos Services en Ligne' : 'Sèvis Anlign Nou'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Effectuez vos démarches administratives en ligne 24h/24'
                : 'Fè démann administratif ou anlign 24h/24'}
            </p>
            <div className="mt-6">
              <button
                onClick={() => setLanguage('fr')}
                className={`mx-2 px-4 py-2 rounded-md ${
                  language === 'fr' ? 'bg-white text-primary' : 'bg-transparent text-white border border-white'
                }`}
              >
                Français
              </button>
              <button
                onClick={() => setLanguage('cr')}
                className={`mx-2 px-4 py-2 rounded-md ${
                  language === 'cr' ? 'bg-white text-primary' : 'bg-transparent text-white border border-white'
                }`}
              >
                Kréyol
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[language].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-primary font-medium hover:text-primary-dark transition-colors duration-300"
              >
                {language === 'fr' ? 'En savoir plus →' : 'Plis enfòmasyon →'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aide et Support */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {language === 'fr' ? 'Besoin d\'aide ?' : 'Ou bizwen èd ?'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {language === 'fr'
                ? 'Notre équipe est à votre disposition pour vous accompagner dans vos démarches en ligne.'
                : 'Ekip nou la pou édé\'w fè démann ou anlign.'}
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              {language === 'fr' ? 'Contactez-nous' : 'Kontakté nou'}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services; 