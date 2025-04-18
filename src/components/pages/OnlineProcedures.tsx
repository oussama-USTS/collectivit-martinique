import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  FaFileAlt, 
  FaIdCard, 
  FaGraduationCap, 
  FaHome, 
  FaCar, 
  FaHandHoldingHeart,
  FaSearch,
  FaArrowRight,
  FaRegClock,
  FaRegCheckCircle,
  FaRegFileAlt,
  FaChevronRight
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface ProcedureCardProps {
  icon: IconType;
  title: string;
  description: string;
  buttonText: string;
  delay: number;
  gradient: string;
  reference: string;
}

interface StepCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
  number: string;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  delay,
  gradient,
  reference
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/procedures/${reference}`)}
    >
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${gradient}`}
        style={{ filter: 'blur(20px)', transform: 'scale(0.95)' }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-center w-20 h-20 mx-auto">
          <div className={`w-full h-full rounded-2xl ${gradient} flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
            <div className="text-white transform transition-transform duration-500">
              {Icon({ size: 36 })}
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mt-6 mb-4 text-gray-900 group-hover:text-[#003366] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-center mb-8">
          {description}
        </p>
        <div className="relative overflow-hidden rounded-xl">
          <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          <button className="w-full py-4 px-6 bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all duration-300 relative z-10 group-hover:text-white flex items-center justify-center">
            <span>{buttonText}</span>
            {FaChevronRight({ className: "ml-2 transform transition-transform duration-300 group-hover:translate-x-1", size: 16 })}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, delay, number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="absolute -left-4 top-0 text-8xl font-bold text-white/10">
        {number}
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
          <div className="text-white">
            {Icon({ size: 32 })}
          </div>
        </div>
        <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
        <p className="text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};

const OnlineProcedures: React.FC = () => {
  const procedures = [
    {
      icon: FaIdCard,
      title: "État Civil",
      description: "Demandez vos documents d'état civil en ligne : actes de naissance, mariage, décès",
      buttonText: "Accéder aux documents",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-400",
      reference: "etat-civil"
    },
    {
      icon: FaGraduationCap,
      title: "Formation & Éducation",
      description: "Inscriptions scolaires, demandes de bourses et formations professionnelles",
      buttonText: "Voir les formations",
      gradient: "bg-gradient-to-br from-purple-600 to-purple-400",
      reference: "formation"
    },
    {
      icon: FaHome,
      title: "Logement",
      description: "Demandes de logement social et aides à la rénovation énergétique",
      buttonText: "Faire une demande",
      gradient: "bg-gradient-to-br from-green-600 to-green-400",
      reference: "logement"
    },
    {
      icon: FaCar,
      title: "Transport",
      description: "Cartes de transport, inscriptions aux services de mobilité",
      buttonText: "Réserver maintenant",
      gradient: "bg-gradient-to-br from-red-600 to-red-400",
      reference: "transport"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Aides Sociales",
      description: "Demandes d'aides sociales, RSA, allocations spécifiques",
      buttonText: "Découvrir les aides",
      gradient: "bg-gradient-to-br from-pink-600 to-pink-400",
      reference: "social"
    },
    {
      icon: FaFileAlt,
      title: "Autres Démarches",
      description: "Toutes les autres démarches administratives en ligne",
      buttonText: "Voir plus",
      gradient: "bg-gradient-to-br from-yellow-600 to-yellow-400",
      reference: "autres"
    }
  ];

  const steps = [
    {
      icon: FaRegFileAlt,
      title: "Créez votre compte",
      description: "Inscrivez-vous en quelques clics avec votre email",
      number: "01"
    },
    {
      icon: FaSearch,
      title: "Trouvez votre démarche",
      description: "Utilisez notre moteur de recherche intelligent",
      number: "02"
    },
    {
      icon: FaRegClock,
      title: "Suivez votre demande",
      description: "Consultez l'avancement en temps réel",
      number: "03"
    },
    {
      icon: FaRegCheckCircle,
      title: "Recevez votre document",
      description: "Téléchargez vos documents officiels",
      number: "04"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/20 to-[#FF9933]/20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-[#FF9933]">
            Vos démarches en ligne
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Simplifiez vos démarches administratives grâce à nos services en ligne disponibles 24h/24 et 7j/7
          </p>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#FF9933] rounded-2xl blur-lg transform scale-105 opacity-50" />
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une démarche..."
                className="w-full py-6 px-8 pr-16 bg-white/10 backdrop-blur-xl text-white placeholder-gray-400 rounded-2xl border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-[#003366] focus:outline-none transition-all duration-300"
              />
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                {FaSearch({ size: 24 })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <ProcedureCard
                key={index}
                {...procedure}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#FF9933]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              Comment ça marche ?
            </h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              Réalisez vos démarches en ligne en toute simplicité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                {...step}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#FF9933] rounded-3xl blur-2xl transform scale-105 opacity-30" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Besoin d'aide ?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Notre équipe est à votre disposition pour vous accompagner dans vos démarches en ligne.
                  </p>
                  <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-[#FF9933] hover:text-white transition-all duration-300 transform hover:scale-105">
                    Contactez-nous
                    {FaArrowRight({ className: "ml-3", size: 20 })}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <h4 className="text-xl font-semibold text-white mb-4">Par téléphone</h4>
                    <p className="text-gray-300">Du lundi au vendredi de 8h à 17h</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <h4 className="text-xl font-semibold text-white mb-4">Par email</h4>
                    <p className="text-gray-300">Réponse sous 24h ouvrées</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlineProcedures; 