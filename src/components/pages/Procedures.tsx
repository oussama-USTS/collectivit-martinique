import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IconType } from 'react-icons';
import {
  FaFileAlt,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaSearch,
  FaFilter
} from 'react-icons/fa';

interface ProcedureCardProps {
  icon: IconType;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  date: string;
  reference: string;
  description: string;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({ icon: Icon, title, status, date, reference, description }) => {
  const navigate = useNavigate();
  const statusConfig = {
    'completed': { color: 'bg-green-100 text-green-800', icon: FaCheckCircle },
    'in-progress': { color: 'bg-blue-100 text-blue-800', icon: FaClock },
    'pending': { color: 'bg-yellow-100 text-yellow-800', icon: FaExclamationCircle }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={() => navigate(`/procedures/${reference}`)}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-100 rounded-xl">
          {Icon({ size: 24, className: "text-gray-600" })}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500 mb-2">Réf: {reference}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm ${statusConfig[status].color} flex items-center gap-2`}>
              {StatusIcon({ size: 14 })}
              <span>{status === 'completed' ? 'Terminé' : status === 'in-progress' ? 'En cours' : 'En attente'}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{date}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/procedures/${reference}`);
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Voir détails
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Procedures: React.FC = () => {
  const navigate = useNavigate();

  const procedures = [
    {
      icon: FaFileAlt,
      title: "Demande d'acte de naissance",
      status: 'completed' as const,
      date: "12 mars 2024",
      reference: "ACT-2024-001",
      description: "Demande d'une copie intégrale d'acte de naissance pour renouvellement de passeport."
    },
    {
      icon: FaClipboardList,
      title: "Inscription formation professionnelle",
      status: 'in-progress' as const,
      date: "15 mars 2024",
      reference: "FORM-2024-023",
      description: "Inscription à la formation de développement web et mobile - Session printemps 2024."
    },
    {
      icon: FaFileAlt,
      title: "Aide au logement",
      status: 'pending' as const,
      date: "18 mars 2024",
      reference: "LOG-2024-045",
      description: "Demande d'aide financière pour la rénovation énergétique de l'habitat."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mes démarches</h1>
            <p className="mt-2 text-gray-600">Suivez l'avancement de toutes vos démarches</p>
          </div>
          <button
            onClick={() => navigate('/procedures/new')}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-300"
          >
            Nouvelle démarche
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Rechercher une démarche..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                {FaSearch({ size: 20 })}
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2">
                <div>
                  {FaFilter({ size: 16 })}
                </div>
                <span>Filtrer</span>
              </button>
              <select className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value="">Tous les statuts</option>
                <option value="completed">Terminé</option>
                <option value="in-progress">En cours</option>
                <option value="pending">En attente</option>
              </select>
            </div>
          </div>
        </div>

        {/* Procedures List */}
        <div className="space-y-6">
          {procedures.map((procedure, index) => (
            <ProcedureCard key={index} {...procedure} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Procedures; 