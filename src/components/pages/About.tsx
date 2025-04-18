import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserGroupIcon, BuildingOfficeIcon, ScaleIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sections = [
    {
      title: "Notre Mission",
      content: "La Collectivité Territoriale de Martinique (CTM) est une collectivité unique qui exerce les compétences d'un département et d'une région. Créée le 1er janvier 2016, elle œuvre au développement économique, social et culturel du territoire.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "Notre Organisation",
      content: "L'Assemblée de Martinique, composée de 51 conseillers territoriaux élus pour 6 ans, délibère sur les affaires de la CTM. Le Conseil Exécutif, composé d'un président et de 8 conseillers exécutifs, dirige l'action de la CTM.",
      icon: UserGroupIcon,
    },
    {
      title: "Nos Compétences",
      content: "La CTM exerce des compétences dans de nombreux domaines : développement économique, formation professionnelle, transport, éducation, culture, environnement, action sociale, logement, et coopération régionale.",
      icon: ScaleIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-primary py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              À Propos de la CTM
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Découvrez l'institution au service des Martiniquais
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <section.icon className="h-12 w-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Histoire */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              La création de la Collectivité Territoriale de Martinique s'inscrit dans une volonté de modernisation 
              de l'action publique locale et d'adaptation aux spécificités du territoire martiniquais.
            </p>
            <p className="text-gray-600 mb-4">
              Issue de la fusion du Conseil général et du Conseil régional, la CTM permet une gestion plus efficace 
              et plus cohérente des politiques publiques, au plus près des besoins des Martiniquais.
            </p>
            <p className="text-gray-600">
              Cette collectivité unique, dotée de compétences élargies, constitue une innovation institutionnelle 
              majeure qui renforce l'autonomie locale et la capacité d'action publique en Martinique.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 