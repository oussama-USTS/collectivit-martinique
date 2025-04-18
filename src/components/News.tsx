import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  FaCalendarAlt, 
  FaArrowRight, 
  FaUsers, 
  FaIndustry, 
  FaSun, 
  FaGlobeAmericas,
  FaGraduationCap,
  FaTools,
  FaGuitar
} from 'react-icons/fa';

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: string;
  categoryIcon: IconType;
  delay: number;
}

interface StatisticProps {
  icon: IconType;
  value: string;
  label: string;
  delay: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  title, 
  date, 
  description, 
  imageUrl, 
  category, 
  categoryIcon: CategoryIcon,
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            {CategoryIcon({ size: 20, className: "text-[#003366]" })}
          </div>
          <span className="px-4 py-2 bg-[#003366] text-white text-sm font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          {FaCalendarAlt({ size: 16, className: "mr-2" })}
          {date}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#003366] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        <button className="flex items-center text-[#003366] font-semibold group-hover:text-[#FF9933] transition-colors duration-300">
          Lire la suite
          {FaArrowRight({ size: 16, className: "ml-2 transform group-hover:translate-x-2 transition-transform duration-300" })}
        </button>
      </div>
    </motion.div>
  );
};

const Statistic: React.FC<StatisticProps> = ({ icon: Icon, value, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
        {Icon({ size: 24, className: "text-[#003366]" })}
      </div>
      <div className="font-bold text-3xl text-white mb-2">{value}</div>
      <div className="text-white/80 text-sm">{label}</div>
    </motion.div>
  );
};

const News: React.FC = () => {
  const news = [
    {
      title: "Nouveau programme de formation professionnelle",
      date: "15 Mai 2024",
      description: "La CTM lance un nouveau programme de formation professionnelle pour les jeunes de 18 à 25 ans dans les secteurs du numérique et de l'environnement.",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60",
      category: "Formation",
      categoryIcon: FaGraduationCap
    },
    {
      title: "Rénovation du port de Fort-de-France",
      date: "12 Mai 2024",
      description: "Début des travaux de modernisation du port de Fort-de-France pour améliorer l'accueil des navires de croisière.",
      imageUrl: "https://images.unsplash.com/photo-1520095972714-909e91b038e5?w=800&auto=format&fit=crop&q=60",
      category: "Infrastructure",
      categoryIcon: FaTools
    },
    {
      title: "Festival culturel de la Martinique",
      date: "10 Mai 2024",
      description: "Le grand festival culturel de la Martinique revient pour sa 15ème édition avec des artistes locaux et internationaux.",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60",
      category: "Culture",
      categoryIcon: FaGuitar
    }
  ];

  const statistics = [
    {
      icon: FaUsers,
      value: "364 508",
      label: "Habitants"
    },
    {
      icon: FaIndustry,
      value: "32 890",
      label: "Entreprises"
    },
    {
      icon: FaSun,
      value: "28°C",
      label: "Température moyenne"
    },
    {
      icon: FaGlobeAmericas,
      value: "1 128",
      label: "km² de superficie"
    }
  ] as const;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles et événements de la Collectivité Territoriale de Martinique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="relative py-16 px-4 rounded-3xl overflow-hidden bg-gradient-to-r from-[#003366] to-[#FF9933]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              La Martinique en chiffres
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <Statistic
                  key={index}
                  {...stat}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 