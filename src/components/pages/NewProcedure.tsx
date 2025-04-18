import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFileAlt, 
  FaIdCard, 
  FaGraduationCap, 
  FaHome, 
  FaCar, 
  FaHandHoldingHeart,
  FaArrowLeft,
  FaUpload
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface CategoryProps {
  icon: IconType;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const Category: React.FC<CategoryProps> = ({ icon: Icon, title, isSelected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
      isSelected 
        ? 'bg-blue-50 border-2 border-blue-500' 
        : 'bg-white border-2 border-transparent hover:border-gray-200'
    }`}
    onClick={onClick}
  >
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-lg ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
        {Icon({ size: 24 })}
      </div>
      <span className={`font-medium ${isSelected ? 'text-blue-700' : 'text-gray-900'}`}>{title}</span>
    </div>
  </motion.div>
);

const NewProcedure: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    files: [] as File[]
  });

  const categories = [
    { icon: FaIdCard, title: 'État Civil', id: 'civil' },
    { icon: FaGraduationCap, title: 'Formation & Éducation', id: 'education' },
    { icon: FaHome, title: 'Logement', id: 'housing' },
    { icon: FaCar, title: 'Transport', id: 'transport' },
    { icon: FaHandHoldingHeart, title: 'Aides Sociales', id: 'social' },
    { icon: FaFileAlt, title: 'Autres', id: 'other' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler la création d'une nouvelle procédure
    const reference = `${selectedCategory.toUpperCase()}-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`;
    navigate(`/procedures/${reference}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/procedures')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <div className="mr-2">
              {FaArrowLeft({ size: 16 })}
            </div>
            Retour aux démarches
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Nouvelle démarche</h1>
          <p className="mt-2 text-gray-600">Sélectionnez une catégorie et remplissez les informations nécessaires</p>
        </div>

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <form onSubmit={handleSubmit}>
            {/* Categories */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Catégorie de la démarche</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <Category
                    key={category.id}
                    icon={category.icon}
                    title={category.title}
                    isSelected={selectedCategory === category.id}
                    onClick={() => setSelectedCategory(category.id)}
                  />
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Titre de la démarche
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Ex: Demande d'acte de naissance"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Décrivez votre demande en détail..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Documents justificatifs
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors duration-300">
                  <div className="space-y-1 text-center">
                    <div className="text-gray-400 mb-3">
                      {FaUpload({ size: 24 })}
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                      >
                        <span>Téléverser un fichier</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files || []);
                            setFormData({ ...formData, files });
                          }}
                        />
                      </label>
                      <p className="pl-1">ou glisser-déposer</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF jusqu'à 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!selectedCategory || !formData.title || !formData.description}
                className="w-full py-4 px-6 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300"
              >
                Soumettre la demande
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default NewProcedure; 