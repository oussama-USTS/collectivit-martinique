import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  UserIcon,
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  TruckIcon,
  BuildingOfficeIcon,
  ClockIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const Demarches: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'cr'>('fr');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    fr: [
      { id: 'all', name: 'Toutes les démarches', icon: DocumentTextIcon },
      { id: 'personal', name: 'État civil', icon: UserIcon },
      { id: 'housing', name: 'Logement', icon: HomeIcon },
      { id: 'education', name: 'Éducation', icon: AcademicCapIcon },
      { id: 'employment', name: 'Emploi', icon: BriefcaseIcon },
      { id: 'health', name: 'Santé', icon: HeartIcon },
      { id: 'transport', name: 'Transport', icon: TruckIcon },
      { id: 'business', name: 'Entreprises', icon: BuildingOfficeIcon },
    ],
    cr: [
      { id: 'all', name: 'Tout démann', icon: DocumentTextIcon },
      { id: 'personal', name: 'Eta sivil', icon: UserIcon },
      { id: 'housing', name: 'Lojman', icon: HomeIcon },
      { id: 'education', name: 'Edikasyon', icon: AcademicCapIcon },
      { id: 'employment', name: 'Travay', icon: BriefcaseIcon },
      { id: 'health', name: 'Santé', icon: HeartIcon },
      { id: 'transport', name: 'Transpò', icon: TruckIcon },
      { id: 'business', name: 'Antrepriz', icon: BuildingOfficeIcon },
    ],
  };

  const procedures = {
    fr: [
      {
        id: 1,
        category: 'personal',
        title: 'Demande d\'acte de naissance',
        description: 'Obtenez une copie de votre acte de naissance',
        duration: '5 jours ouvrés',
        requirements: [
          'Pièce d\'identité valide',
          'Justificatif de domicile',
        ],
        online: true,
      },
      {
        id: 2,
        category: 'housing',
        title: 'Aide à la rénovation',
        description: 'Subventions pour la rénovation de votre logement',
        duration: '30 jours',
        requirements: [
          'Titre de propriété',
          'Devis des travaux',
          'Avis d\'imposition',
        ],
        online: true,
      },
      {
        id: 3,
        category: 'education',
        title: 'Bourse scolaire',
        description: 'Demande de bourse pour les études',
        duration: '60 jours',
        requirements: [
          'Certificat de scolarité',
          'Avis d\'imposition',
          'Relevé d\'identité bancaire',
        ],
        online: true,
      },
      {
        id: 4,
        category: 'employment',
        title: 'Aide à la création d\'entreprise',
        description: 'Accompagnement pour les entrepreneurs',
        duration: '45 jours',
        requirements: [
          'Business plan',
          'Justificatifs de formation',
          'Situation fiscale',
        ],
        online: true,
      },
    ],
    cr: [
      {
        id: 1,
        category: 'personal',
        title: 'Démann akt nesans',
        description: 'Pran on kopi akt nesans ou',
        duration: '5 jou',
        requirements: [
          'Pièce identité valid',
          'Justifikatif kay',
        ],
        online: true,
      },
      {
        id: 2,
        category: 'housing',
        title: 'Ed pou rénové kay',
        description: 'Sibvansyon pou rénové kay ou',
        duration: '30 jou',
        requirements: [
          'Tit propriété',
          'Devi travay',
          'Avi impozisyon',
        ],
        online: true,
      },
      {
        id: 3,
        category: 'education',
        title: 'Bous lékòl',
        description: 'Démann bous pou étid',
        duration: '60 jou',
        requirements: [
          'Sètifika lékòl',
          'Avi impozisyon',
          'RIB',
        ],
        online: true,
      },
      {
        id: 4,
        category: 'employment',
        title: 'Ed pou kréyé antrepriz',
        description: 'Akonpagniman pou antreprenè',
        duration: '45 jou',
        requirements: [
          'Business plan',
          'Justifikatif fòmasyon',
          'Sityasyon fiskal',
        ],
        online: true,
      },
    ],
  };

  const filteredProcedures = procedures[language].filter(
    proc => selectedCategory === 'all' || proc.category === selectedCategory
  );

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
              {language === 'fr' ? 'Démarches en ligne' : 'Démann anlign'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Effectuez vos démarches administratives en ligne, 24h/24 et 7j/7'
                : 'Fè démann administratif ou anlign, 24h/24 ek 7j/7'}
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

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories[language].map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl flex flex-col items-center text-center ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium">{category.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Procedures List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {procedure.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {procedure.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>{procedure.duration}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {language === 'fr' ? 'Documents requis' : 'Dokiman nésésè'}:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                    {procedure.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <a
                      href={`/services/demarches/${procedure.id}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300"
                    >
                      {language === 'fr' ? 'Commencer la démarche' : 'Komansé démann la'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Besoin d\'aide ?' : 'Ou bizwen èd ?'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'fr'
                  ? 'Notre équipe est à votre disposition pour vous accompagner dans vos démarches.'
                  : 'Ekip nou la pou édé\'w fè démann ou yo.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <PhoneIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fr' ? 'Par téléphone' : 'Pa téléfòn'}
                  </h3>
                  <p className="text-gray-600">0596 XX XX XX</p>
                </div>
                <div className="text-center">
                  <ChatBubbleLeftIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fr' ? 'Chat en ligne' : 'Chat anlign'}
                  </h3>
                  <button className="text-primary hover:text-primary-dark">
                    {language === 'fr' ? 'Démarrer le chat' : 'Komansé chat la'}
                  </button>
                </div>
                <div className="text-center">
                  <MapPinIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fr' ? 'En personne' : 'An pèsòn'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'Trouvez le point d\'accueil le plus proche'
                      : 'Touvé pwen akèy ki pli pré\'w la'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Demarches; 