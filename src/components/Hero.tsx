
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivoire-light to-white py-16 md:py-24">
      <div className="absolute inset-0 bg-ivoire-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-ivoire-orange">Identifier</span> pour mieux{" "}
              <span className="text-ivoire-green">inclure</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700 max-w-xl">
              La solution numérique sécurisée pour moderniser le recensement et
              l'identification des citoyens ivoiriens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Découvrir la solution <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-outline">
                Demander une démo
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-ivoire-orange" />
                <span className="font-medium">
                  +5M citoyens identifiés
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-ivoire-green" />
                <span className="font-medium">
                  Conforme RGPD Afrique
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-2xl z-20 relative">
                <img
                  src="/placeholder.svg"
                  alt="Application de recensement IvoireCensus"
                  className="rounded-md w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-ivoire-orange text-white px-4 py-2 rounded-md">
                  Démo interactive
                </div>
              </div>
              <div className="absolute -z-10 top-1/3 -right-12 w-40 h-40 bg-ivoire-green rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -z-10 top-1/2 -left-12 w-40 h-40 bg-ivoire-orange rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
