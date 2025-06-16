import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, Phone, Mail, MapPin, Calendar, Camera, Bell, Smartphone } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full h-full md:w-[90vw] md:h-[90vh] lg:w-[80vw] lg:h-[85vh] md:rounded-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b bg-gray-50 md:rounded-t-2xl flex-shrink-0">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="mr-3 md:mr-4 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
              aria-label="Stäng integritetspolicy"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="flex items-center">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mr-3" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Integritetspolicy</h1>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <section className="bg-blue-50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Översikt</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                KLIPPCENTER | JKPG respekterar din integritet och är engagerade i att skydda dina personuppgifter. 
                Denna integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar din information 
                när du använder vår webbplats, mobilapp eller besöker vår salong.
              </p>
              <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-sm text-gray-600">
                  <strong>Kort sammanfattning:</strong> Vi samlar endast in nödvändig information för att tillhandahålla 
                  våra tjänster, delar aldrig dina uppgifter med tredje part för marknadsföring, och du har full kontroll 
                  över dina data.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold">Kontakta Oss</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">Dataskyddsombud</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-300 mr-3" />
                      <span>info@klippcenter-jkpg.se</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-300 mr-3" />
                      <span>036-712 300</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-300 mr-3" />
                      <span>Barnarpsgatan 3, 553 16 Jönköping</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">Tillsynsmyndighet</h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-medium">Integritetsskyddsmyndigheten (IMY)</p>
                    <p className="text-sm">Box 8114, 104 20 Stockholm</p>
                    <p className="text-sm">Telefon: 08-657 61 00</p>
                    <p className="text-sm">E-post: imy@imy.se</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <p className="text-sm text-gray-300">
                  Denna integritetspolicy uppdaterades senast: {new Date().toLocaleDateString('sv-SE')}. 
                  Vi förbehåller oss rätten att uppdatera denna policy vid behov. 
                  Väsentliga ändringar kommer att meddelas via e-post eller på vår webbplats.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;