import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaFileAlt, FaClipboardList, FaChartLine } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <Link to={link} className="block p-6 h-full">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#FF9933] rounded-full flex items-center justify-center">
            {Icon({ size: 32, color: 'white' })}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </Link>
    </motion.div>
  );
};

const EspacePerso: React.FC = () => {
  const services = [
    {
      icon: FaUserCircle,
      title: "Espace Personnel",
      description: "Accédez à votre espace personnel pour gérer vos informations et suivre vos demandes",
      link: "/espace-personnel"
    },
    {
      icon: FaFileAlt,
      title: "Démarches en Ligne",
      description: "Effectuez vos démarches administratives en ligne rapidement et simplement",
      link: "/demarches"
    },
    {
      icon: FaClipboardList,
      title: "Suivi des Demandes",
      description: "Consultez l'état d'avancement de vos demandes en temps réel",
      link: "/suivi-demandes"
    },
    {
      icon: FaChartLine,
      title: "Tableau de Bord",
      description: "Visualisez l'ensemble de vos interactions avec la CTM",
      link: "/tableau-de-bord"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vos Services en Ligne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplifiez vos démarches administratives grâce à nos services en ligne disponibles 24h/24 et 7j/7
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/demarches"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#003366] to-[#FF9933] rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Découvrir toutes nos démarches
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EspacePerso; 