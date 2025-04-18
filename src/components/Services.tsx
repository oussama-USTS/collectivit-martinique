import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaGraduationCap, FaHome, FaTree, FaBriefcase, FaHeart } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-1 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/10 to-[#FF9933]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6 h-full">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#003366] to-[#FF9933] rounded-2xl rotate-45 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <div className="-rotate-45">
              {Icon({ size: 36, color: 'white' })}
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4 group-hover:text-[#003366] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: FaHandshake,
      title: "Coopération",
      description: "Développement de partenariats stratégiques et soutien aux projets locaux et internationaux"
    },
    {
      icon: FaGraduationCap,
      title: "Éducation",
      description: "Programmes éducatifs innovants et formation professionnelle pour tous les âges"
    },
    {
      icon: FaHome,
      title: "Logement",
      description: "Solutions de logement adaptées et programmes d'amélioration de l'habitat"
    },
    {
      icon: FaTree,
      title: "Environnement",
      description: "Protection de la biodiversité et initiatives pour un développement durable"
    },
    {
      icon: FaBriefcase,
      title: "Emploi",
      description: "Accompagnement vers l'emploi et soutien à la création d'entreprises"
    },
    {
      icon: FaHeart,
      title: "Social",
      description: "Actions sociales et solidaires pour le bien-être de tous les citoyens"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'ensemble des services que nous proposons pour améliorer votre quotidien et développer notre territoire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 