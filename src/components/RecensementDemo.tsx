
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { StepProps, FormField } from "@/types";
import { Camera, Check, CheckCircle, User } from "lucide-react";

const Step = ({ number, title, description, isActive, isCompleted, onClick }: StepProps) => (
  <div 
    onClick={onClick}
    className={`flex items-start gap-4 p-4 rounded-md cursor-pointer transition-all ${
      isActive ? "bg-ivoire-light border border-ivoire-orange" : "hover:bg-gray-50"
    }`}
  >
    <div 
      className={`flex items-center justify-center rounded-full w-8 h-8 flex-shrink-0 ${
        isCompleted 
          ? "bg-ivoire-green text-white" 
          : isActive 
            ? "bg-ivoire-orange text-white" 
            : "bg-gray-200 text-gray-500"
      }`}
    >
      {isCompleted ? <Check className="h-5 w-5" /> : number}
    </div>
    <div>
      <h3 className={`font-medium mb-1 ${isActive ? "text-ivoire-orange" : ""}`}>{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const RecensementDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    dateNaissance: "",
    lieuNaissance: "",
    genre: "",
    region: "",
    adresse: "",
    telephone: "",
    photo: null
  });
  const [stepCompleted, setStepCompleted] = useState({
    1: false,
    2: false,
    3: false,
    4: false
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const markStepAsComplete = (step: number) => {
    setStepCompleted({
      ...stepCompleted,
      [step]: true
    });
  };

  const handleNextStep = () => {
    markStepAsComplete(currentStep);
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    setSubmitting(true);
    // Simulation of form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      markStepAsComplete(4);
    }, 1500);
  };

  const steps = [
    { 
      number: 1, 
      title: "Identité", 
      description: "Informations personnelles de base"
    },
    { 
      number: 2, 
      title: "Localisation", 
      description: "Adresse et région de résidence"
    },
    { 
      number: 3, 
      title: "Biométrie", 
      description: "Photo et empreintes"
    },
    { 
      number: 4, 
      title: "Vérification", 
      description: "Validation des informations"
    }
  ];

  // Step 1 form fields
  const identityFields: FormField[] = [
    { id: "nom", label: "Nom", type: "text", placeholder: "Entrez votre nom de famille", required: true },
    { id: "prenoms", label: "Prénoms", type: "text", placeholder: "Entrez vos prénoms", required: true },
    { id: "dateNaissance", label: "Date de naissance", type: "date", required: true },
    { id: "lieuNaissance", label: "Lieu de naissance", type: "text", placeholder: "Ex: Abidjan", required: true },
    { 
      id: "genre", 
      label: "Genre", 
      type: "select", 
      options: [
        { value: "homme", label: "Homme" },
        { value: "femme", label: "Femme" }
      ],
      required: true
    }
  ];

  // Step 2 form fields
  const locationFields: FormField[] = [
    { 
      id: "region", 
      label: "Région", 
      type: "select",
      options: [
        { value: "abidjan", label: "Abidjan" },
        { value: "yamoussoukro", label: "Yamoussoukro" },
        { value: "bouake", label: "Bouaké" },
        { value: "korhogo", label: "Korhogo" },
        { value: "daloa", label: "Daloa" }
      ],
      required: true
    },
    { id: "adresse", label: "Adresse", type: "text", placeholder: "Entrez votre adresse", required: true },
    { id: "telephone", label: "Téléphone", type: "text", placeholder: "Ex: +225 XX XX XX XX XX" }
  ];

  const renderCurrentStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            {identityFields.map((field) => (
              <div key={field.id}>
                <Label htmlFor={field.id}>{field.label} {field.required && <span className="text-red-500">*</span>}</Label>
                {field.type === 'select' ? (
                  <Select 
                    value={formData[field.id as keyof typeof formData] as string || ""}
                    onValueChange={(value) => handleChange(field.id, value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner..." />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input 
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData] as string || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            {locationFields.map((field) => (
              <div key={field.id}>
                <Label htmlFor={field.id}>{field.label} {field.required && <span className="text-red-500">*</span>}</Label>
                {field.type === 'select' ? (
                  <Select 
                    value={formData[field.id as keyof typeof formData] as string || ""}
                    onValueChange={(value) => handleChange(field.id, value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner..." />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input 
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData] as string || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mb-4">
                <Label>Photo d'identité</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400 mb-4" />
                  <Button className="btn-primary">
                    <Camera className="h-4 w-4 mr-2" /> Prendre une photo
                  </Button>
                  <p className="mt-2 text-xs text-gray-500">Format JPEG ou PNG. Max 5MB.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-2">
                  Dans la version complète, cette étape inclurait:
                </p>
                <ul className="text-sm text-gray-500 list-disc list-inside text-left">
                  <li>Capture d'empreintes digitales</li>
                  <li>Scan d'iris (optionnel)</li>
                  <li>Vérification contre le RNPP</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            {!submitted ? (
              <>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Données du recensement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><span className="font-medium">Nom:</span> {formData.nom || "Non renseigné"}</p>
                      <p><span className="font-medium">Prénoms:</span> {formData.prenoms || "Non renseigné"}</p>
                      <p><span className="font-medium">Date de naissance:</span> {formData.dateNaissance || "Non renseigné"}</p>
                      <p><span className="font-medium">Lieu de naissance:</span> {formData.lieuNaissance || "Non renseigné"}</p>
                      <p><span className="font-medium">Genre:</span> {formData.genre || "Non renseigné"}</p>
                    </div>
                    <div>
                      <p><span className="font-medium">Région:</span> {formData.region || "Non renseigné"}</p>
                      <p><span className="font-medium">Adresse:</span> {formData.adresse || "Non renseigné"}</p>
                      <p><span className="font-medium">Téléphone:</span> {formData.telephone || "Non renseigné"}</p>
                      <p><span className="font-medium">Biométrie:</span> <span className="text-yellow-500">En attente</span></p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                  <p className="text-yellow-800 text-sm">
                    Dans la version complète, cette étape vérifierait les données contre le RNPP et générerait un identifiant unique.
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-green-100 rounded-full p-3">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="font-bold text-xl mt-4 mb-2">Recensement Complété</h3>
                <p className="text-gray-600 text-center mb-6">
                  Les informations ont été enregistrées avec succès. Un identifiant unique a été généré.
                </p>
                <div className="bg-white border border-gray-200 rounded-md p-4 w-full max-w-xs flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <User className="h-8 w-8 text-ivoire-orange" />
                    </div>
                    <p className="text-sm text-gray-500">ID Citoyen</p>
                    <p className="font-mono font-medium">IVCIT-{Math.floor(100000000 + Math.random() * 900000000)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="demo" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Démo de Recensement</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre processus simple et efficace pour le recensement des citoyens
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          <div className="lg:w-1/3 space-y-4">
            {steps.map((step) => (
              <Step 
                key={step.number}
                {...step} 
                isActive={currentStep === step.number}
                isCompleted={stepCompleted[step.number as keyof typeof stepCompleted]}
                onClick={() => {
                  // Only allow going to completed steps or the current step + 1
                  const nextAllowedStep = Object.values(stepCompleted).filter(Boolean).length + 1;
                  if (step.number <= nextAllowedStep) {
                    goToStep(step.number);
                  }
                }}
              />
            ))}
            
            <div className="mt-6 bg-ivoire-light rounded-md p-4">
              <h3 className="font-medium text-ivoire-orange mb-2">✨ Mode démo</h3>
              <p className="text-sm text-gray-600">
                Cette démo simule le processus de recensement. Dans l'application complète, les données seraient chiffrées et synchronisées avec le RNPP.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="font-semibold text-xl mb-6">{steps.find(s => s.number === currentStep)?.title}</h3>
            
            {renderCurrentStepContent()}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button 
                  variant="outline" 
                  onClick={handlePrevStep}
                >
                  Précédent
                </Button>
              )}
              {currentStep < 4 && (
                <Button 
                  className="btn-primary ml-auto"
                  onClick={handleNextStep}
                >
                  Suivant
                </Button>
              )}
              {currentStep === 4 && !submitted && (
                <Button 
                  className="btn-secondary ml-auto"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? "Traitement..." : "Soumettre les données"}
                </Button>
              )}
              {currentStep === 4 && submitted && (
                <Button 
                  className="btn-primary ml-auto"
                  onClick={() => {
                    setCurrentStep(1);
                    setStepCompleted({1: false, 2: false, 3: false, 4: false});
                    setSubmitted(false);
                    setFormData({
                      nom: "",
                      prenoms: "",
                      dateNaissance: "",
                      lieuNaissance: "",
                      genre: "",
                      region: "",
                      adresse: "",
                      telephone: "",
                      photo: null
                    });
                  }}
                >
                  Démarrer un nouveau recensement
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecensementDemo;
