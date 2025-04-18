import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  FaFileAlt,
  FaFilePdf,
  FaFileImage,
  FaDownload,
  FaTrash,
  FaSearch,
  FaFilter
} from 'react-icons/fa';

interface DocumentCardProps {
  icon: IconType;
  title: string;
  type: string;
  size: string;
  date: string;
  reference: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ icon: Icon, title, type, size, date, reference }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
        {Icon({ size: 24 })}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>{type}</span>
          <span>•</span>
          <span>{size}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">Réf: {reference}</p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300">
            <div>
              {FaDownload({ size: 16 })}
            </div>
            <span>Télécharger</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-300">
            <div>
              {FaTrash({ size: 16 })}
            </div>
            <span>Supprimer</span>
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Documents: React.FC = () => {
  const documents = [
    {
      icon: FaFilePdf,
      title: "Acte de naissance",
      type: "PDF",
      size: "1.2 MB",
      date: "12 mars 2024",
      reference: "ACT-2024-001"
    },
    {
      icon: FaFileImage,
      title: "Justificatif de domicile",
      type: "JPG",
      size: "800 KB",
      date: "15 mars 2024",
      reference: "DOM-2024-023"
    },
    {
      icon: FaFileAlt,
      title: "Attestation de formation",
      type: "PDF",
      size: "500 KB",
      date: "18 mars 2024",
      reference: "FORM-2024-045"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mes documents</h1>
          <p className="mt-2 text-gray-600">Gérez tous vos documents administratifs</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Rechercher un document..."
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
                <option value="">Tous les types</option>
                <option value="pdf">PDF</option>
                <option value="image">Images</option>
                <option value="other">Autres</option>
              </select>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} />
          ))}
        </div>

        {/* Empty State */}
        {documents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              {FaFileAlt({ size: 48 })}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun document</h3>
            <p className="text-gray-600">
              Vous n'avez pas encore de documents. Ils apparaîtront ici une fois que vos démarches seront traitées.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents; 