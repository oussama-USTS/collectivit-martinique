import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const renderSocialIcons = () => {
    const icons = [
      { Icon: FaFacebook, href: "#" },
      { Icon: FaTwitter, href: "#" },
      { Icon: FaInstagram, href: "#" },
      { Icon: FaYoutube, href: "#" }
    ];

    return icons.map(({ Icon, href }, index) => (
      <a
        key={index}
        href={href}
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF9933] transition-all duration-300 transform hover:scale-110"
      >
        <div className="text-white text-xl">
          {Icon({ size: 20 })}
        </div>
      </a>
    ));
  };

  return (
    <footer className="bg-gradient-to-br from-[#003366] to-[#002347] text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full opacity-5"
        >
          <div className="w-full h-full bg-[#FF9933] rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <motion.div {...fadeInUp} className="space-y-4">
            <img
              src="/logo-ctm.svg"
              alt="Logo CTM"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 mt-4">
              La Collectivité Territoriale de Martinique œuvre pour le développement durable et harmonieux de notre territoire.
            </p>
          </motion.div>

          {/* Liens Rapides */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#FF9933]">Liens Rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#FF9933]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="text-[#FF9933]">
                  {FaMapMarkerAlt({ size: 20 })}
                </div>
                <span className="text-gray-300">Rue Gaston Defferre, Fort-de-France</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-[#FF9933]">
                  {FaPhone({ size: 20 })}
                </div>
                <span className="text-gray-300">0596 59 63 00</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-[#FF9933]">
                  {FaEnvelope({ size: 20 })}
                </div>
                <span className="text-gray-300">contact@collectivitedemartinique.mq</span>
              </li>
            </ul>
          </motion.div>

          {/* Réseaux Sociaux */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#FF9933]">Suivez-nous</h3>
            <div className="flex space-x-4">
              {renderSocialIcons()}
            </div>
          </motion.div>
        </div>

        {/* Barre de séparation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8"
        />

        {/* Copyright */}
        <motion.div
          {...fadeInUp}
          className="text-center text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Collectivité Territoriale de Martinique. Tous droits réservés.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 