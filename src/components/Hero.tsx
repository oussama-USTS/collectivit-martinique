import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'cr'>('fr');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#003366] via-[#1a4d80] to-[#FF9933]">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full opacity-10"
        >
          <div className="w-full h-full bg-[#FF9933] rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: -360, scale: 1.2 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-10"
        >
          <div className="w-full h-full bg-[#003366] rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center py-12">
        <motion.div 
          className="flex flex-col justify-center items-center lg:items-start text-white space-y-10 h-full"
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl text-center lg:text-left"
            {...fadeInUp}
          >
            {language === 'fr' 
              ? 'Bienvenue à la Collectivité Territoriale de Martinique'
              : 'Byenvini a Kolektivité Tèritorial Matinik'}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-gray-200 text-center lg:text-left"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {language === 'fr'
              ? 'Découvrez nos services numériques innovants pour une Martinique connectée et moderne'
              : 'Dékouvè sèvis nimerik nou pou an Matinik konekté ek modèn'}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 items-center lg:items-start"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/services"
              className="px-10 py-5 bg-[#FF9933] text-white rounded-full text-lg font-bold hover:bg-[#ff8c1a] transform hover:scale-110 transition-all duration-300 shadow-2xl drop-shadow-xl"
            >
              {language === 'fr' ? 'Découvrir nos services' : 'Dékouvè sèvis nou'}
            </Link>
            <div className="flex space-x-4">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-8 py-4 rounded-full border-2 text-lg font-semibold transition-all duration-300 ${
                  language === 'fr'
                    ? 'bg-white text-[#003366] border-white shadow-lg'
                    : 'bg-transparent text-white border-white/30 hover:border-white'
                }`}
              >
                Français
              </button>
              <button
                onClick={() => setLanguage('cr')}
                className={`px-8 py-4 rounded-full border-2 text-lg font-semibold transition-all duration-300 ${
                  language === 'cr'
                    ? 'bg-white text-[#003366] border-white shadow-lg'
                    : 'bg-transparent text-white border-white/30 hover:border-white'
                }`}
              >
                Kréyol
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center h-full w-full"
        >
          <motion.img
            src="/hero-illustration.svg"
            alt="Illustration"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              y: [0, -20, 0, -20, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 