import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            La Martinique en chiffres
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les statistiques clés de notre territoire
          </p>
        </div>
        
        {inView && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem
              number="364 508"
              label="Habitants"
              delay={0}
            />
            <StatItem
              number="1 128 km²"
              label="Superficie"
              delay={0.2}
            />
            <StatItem
              number="34"
              label="Communes"
              delay={0.4}
            />
            <StatItem
              number="3 219 M€"
              label="Budget 2024"
              delay={0.6}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats; 