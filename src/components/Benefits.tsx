
import { BenefitProps } from "@/types";
import {
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Users,
  Landmark,
  UserCheck,
  BarChart4,
  Heart
} from "lucide-react";

const BenefitCard = ({ icon, title, description, value }: BenefitProps) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="bg-ivoire-light p-3 rounded-lg flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        {value && <p className="font-semibold text-ivoire-green">{value}</p>}
      </div>
    </div>
  </div>
);

const Benefits = () => {
  const benefits: BenefitProps[] = [
    {
      icon: <Users className="h-6 w-6 text-ivoire-orange" />,
      title: "Inclusion sociale",
      description: "Garantit que tous les citoyens sont comptés, y compris dans les zones rurales éloignées.",
      value: "+5M citoyens ruraux recensés d'ici 2026"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-ivoire-orange" />,
      title: "Réduction des fraudes",
      description: "Élimine les doublons et empêche les usurpations d'identité grâce à la biométrie.",
      value: "-50% de fraudes aux aides sociales"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-ivoire-orange" />,
      title: "Planification précise",
      description: "Permet aux autorités de planifier efficacement les infrastructures et services publics.",
      value: "Précision des données >95%"
    },
    {
      icon: <Landmark className="h-6 w-6 text-ivoire-orange" />,
      title: "Modernisation administrative",
      description: "Accélère la numérisation des services publics et améliore leur accessibilité.",
      value: "20+ services publics connectés"
    },
    {
      icon: <UserCheck className="h-6 w-6 text-ivoire-orange" />,
      title: "Création d'emplois",
      description: "Forme une nouvelle génération d'agents recenseurs et de techniciens qualifiés.",
      value: "500 agents formés (40% de femmes)"
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-ivoire-orange" />,
      title: "Données décisionnelles",
      description: "Fournit des analyses avancées pour orienter les politiques publiques.",
      value: "Tableaux de bord en temps réel"
    },
    {
      icon: <Heart className="h-6 w-6 text-ivoire-orange" />,
      title: "Amélioration sanitaire",
      description: "Optimise la distribution des ressources médicales et la couverture sanitaire.",
      value: "+30% d'accès aux soins de santé"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-ivoire-orange" />,
      title: "Conformité ODD",
      description: "S'aligne avec les Objectifs de Développement Durable des Nations Unies.",
      value: "ODD 10 et 16.9 en priorité"
    }
  ];

  return (
    <section id="avantages" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Impact Social et Économique</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            IvoireCensus apporte des bénéfices tangibles pour toute la société ivoirienne
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
