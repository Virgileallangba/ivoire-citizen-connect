
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ivoire-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-ivoire-orange rounded-md flex items-center justify-center">
                <span className="font-bold text-white">IC</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-white">
                Ivoire<span className="text-ivoire-orange">Census</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              La solution numérique pour moderniser le recensement et l'identification des citoyens ivoiriens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Accueil</a></li>
              <li><a href="#fonctionnalites" className="text-gray-300 hover:text-white">Fonctionnalités</a></li>
              <li><a href="#demo" className="text-gray-300 hover:text-white">Démo</a></li>
              <li><a href="#avantages" className="text-gray-300 hover:text-white">Avantages</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-white">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-ivoire-orange flex-shrink-0" />
                <span className="text-gray-300">Cocody, Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-ivoire-orange" />
                <span className="text-gray-300">+225 XX XX XX XX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-ivoire-orange" />
                <span className="text-gray-300">contact@ivoirecensus.ci</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Partenaires</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Ministère de l'Intérieur</span></li>
              <li><span className="text-gray-300">Institut National de la Statistique</span></li>
              <li><span className="text-gray-300">Banque Africaine de Développement</span></li>
              <li><span className="text-gray-300">Orange CI & MTN</span></li>
              <li><span className="text-gray-300">ESATIC</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IvoireCensus. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Conditions d'utilisation</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
