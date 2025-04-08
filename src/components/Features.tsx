
import { FeatureProps } from "@/types";
import {
  Smartphone,
  Database,
  Globe,
  Shield,
  Wifi,
  Users,
  Languages,
  Map
} from "lucide-react";

const FeatureCard = ({ title, description, icon }: FeatureProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
    <div className="bg-ivoire-light p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features: FeatureProps[] = [
    {
      title: "Collecte Mobile Hors Ligne",
      description:
        "Application fonctionnant sans internet avec synchronisation automatique dès la connexion disponible",
      icon: <Smartphone className="h-8 w-8 text-ivoire-orange" />,
    },
    {
      title: "Intégration RNPP",
      description:
        "Connectez-vous avec le Répertoire National des Personnes Physiques pour une vérification en temps réel",
      icon: <Database className="h-8 w-8 text-ivoire-orange" />,
    },
    {
      title: "Interface Multilingue",
      description:
        "Support des langues locales (français, dioula, baoulé) pour une meilleure inclusion",
      icon: <Languages className="h-8 w-8 text-ivoire-orange" />,
    },
    {
      title: "Sécurité Avancée",
      description:
        "Chiffrement AES-256 et certification ANSSI pour la protection des données sensibles",
      icon: <Shield className="h-8 w-8 text-ivoire-orange" />,
    },
    {
      title: "Optimisé Basse Connectivité",
      description:
        "Fonctionne dans les zones avec réseau limité grâce à la technologie SMS/USSD",
      icon: <Wifi className="h-8 w-8 text-ivoire-orange" />,
    },
    {
      title: "Biométrie Adaptée",
      description:
        "Capture biométrique optimisée pour tous les types de peaux et conditions lumineuses",
      icon: <Users className="h-8 w-8 text-ivoire-orange" />,
    },
    {
      title: "Couverture Nationale",
      description:
        "Solution scalable pour couvrir l'ensemble du territoire ivoirien",
      icon: <Map className="h-8 w-8 text-ivoire-orange" />,
    },
    {
      title: "Conformité Internationale",
      description:
        "Respect des standards ODD des Nations Unies et de la RGPD Afrique",
      icon: <Globe className="h-8 w-8 text-ivoire-orange" />,
    },
  ];

  return (
    <section id="fonctionnalites" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Fonctionnalités Clés</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre solution apporte des outils performants et adaptés aux défis spécifiques du recensement en Côte d'Ivoire
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
