
import { RoadmapItemProps } from "@/types";

const RoadmapItem = ({ year, title, description }: RoadmapItemProps) => (
  <div className="relative pl-10 pb-10 last:pb-0">
    <div className="absolute left-0 top-1 h-full w-0.5 bg-ivoire-orange"></div>
    <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-ivoire-orange -translate-x-1/2"></div>
    <div>
      <span className="inline-block bg-ivoire-light text-ivoire-orange text-sm font-medium px-3 py-1 rounded-full mb-2">
        {year}
      </span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const RoadmapSection = () => {
  const roadmapItems: RoadmapItemProps[] = [
    {
      year: "2024",
      title: "Pilote à Abidjan",
      description: "Lancement du prototype avec 50 000 citoyens dans la région des Lagunes. Signature d'un partenariat avec le Répertoire National des Personnes Physiques (RNPP)."
    },
    {
      year: "2025",
      title: "Déploiement national",
      description: "Extension aux régions du Nord (Korhogo, Odienné) et formation des agents recenseurs locaux. Intégration avec le système de santé pour la couverture maladie universelle."
    },
    {
      year: "2026",
      title: "Intégration régionale",
      description: "Extension du système aux pays voisins (Burkina Faso, Mali) via l'UEMOA. Développement d'un standard d'échange de données pour faciliter la mobilité transfrontalière."
    },
    {
      year: "2027",
      title: "Innovation continue",
      description: "Intégration avec la carte d'identité électronique et les services financiers. Module de gestion de crise pour les épidémies et déplacements de population."
    }
  ];

  return (
    <section id="roadmap" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Feuille de Route</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre vision pour transformer l'identification citoyenne en Côte d'Ivoire
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {roadmapItems.map((item, index) => (
            <RoadmapItem key={index} {...item} />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-white border border-gray-200 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Participez au projet</h3>
          <p className="text-gray-600 mb-4">
            IvoireCensus recherche des partenaires institutionnels, techniques et financiers pour accélérer son déploiement et maximiser son impact social.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-ivoire-light p-4 rounded-md">
              <h4 className="font-medium mb-2">Financement mixte</h4>
              <p className="text-sm text-gray-600">
                200M XOF via la BAD et 100M XOF d'investisseurs locaux
              </p>
            </div>
            <div className="bg-ivoire-light p-4 rounded-md">
              <h4 className="font-medium mb-2">Collaboration publique</h4>
              <p className="text-sm text-gray-600">
                Partenariat avec le Ministère du Numérique pour un déploiement prioritaire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
