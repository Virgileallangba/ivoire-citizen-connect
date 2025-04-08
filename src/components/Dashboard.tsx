
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Users, 
  Map, 
  LineChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  CheckCircle2,
  AlertCircle 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardStat, RegionData } from "@/types";

// Helper component for stats
const StatCard = ({ title, value, change, changeType, icon }: DashboardStat) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className={`${
        changeType === 'positive' ? 'text-green-500' : 
        changeType === 'negative' ? 'text-red-500' : 'text-gray-500'
      } text-sm flex items-center`}>
        {change && (
          <>
            {changeType === 'positive' ? (
              <ArrowUpRight className="h-4 w-4 mr-1" />
            ) : changeType === 'negative' ? (
              <ArrowDownRight className="h-4 w-4 mr-1" />
            ) : null}
            {change}
          </>
        )}
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-center space-x-3">
        <div className="bg-muted p-2 rounded-md">
          {icon}
        </div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const stats: DashboardStat[] = [
    { 
      title: "Total Recensés", 
      value: "5.2M", 
      change: "+12%", 
      changeType: "positive", 
      icon: <Users className="h-4 w-4 text-muted-foreground" /> 
    },
    { 
      title: "Recensés aujourd'hui", 
      value: "1,245", 
      change: "+8%", 
      changeType: "positive", 
      icon: <User className="h-4 w-4 text-muted-foreground" /> 
    },
    { 
      title: "Régions actives", 
      value: "14/31", 
      change: "+2", 
      changeType: "positive", 
      icon: <Map className="h-4 w-4 text-muted-foreground" /> 
    },
    { 
      title: "Taux d'erreurs", 
      value: "0.5%", 
      change: "-0.2%", 
      changeType: "positive", 
      icon: <AlertCircle className="h-4 w-4 text-muted-foreground" /> 
    },
  ];

  const regionData: RegionData[] = [
    { name: "Lagunes (Abidjan)", count: 1250000, percentage: 24 },
    { name: "Yamoussoukro", count: 890000, percentage: 17 },
    { name: "Bouaké", count: 760000, percentage: 15 },
    { name: "San-Pédro", count: 580000, percentage: 11 },
    { name: "Korhogo", count: 420000, percentage: 8 },
    { name: "Autres régions", count: 1300000, percentage: 25 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Tableaux de Bord</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visualisez et analysez les données du recensement en temps réel
          </p>
        </div>
        
        <div className="mx-auto max-w-6xl bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-6">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                <TabsTrigger value="regions">Régions</TabsTrigger>
                <TabsTrigger value="demographics">Démographie</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                  ))}
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Progression du Recensement</CardTitle>
                    <CardDescription>Objectif national: 25M citoyens</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <div className="h-[200px] w-full bg-muted flex items-center justify-center">
                      <LineChart className="h-16 w-16 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Graphique de progression</span>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Statut des Régions</CardTitle>
                      <CardDescription>31 régions administratives</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>En cours</span>
                          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
                            14 régions
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Complétées</span>
                          <div className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
                            5 régions
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Non démarrées</span>
                          <div className="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
                            12 régions
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Qualité des Données</CardTitle>
                      <CardDescription>Mesure de précision et d'intégrité</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                            Données complètes
                          </span>
                          <span className="font-medium">92%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center">
                            <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                            Doublons détectés
                          </span>
                          <span className="font-medium">0.8%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                            Erreurs critiques
                          </span>
                          <span className="font-medium">0.2%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="regions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Répartition par Régions</CardTitle>
                    <CardDescription>Distribution géographique des citoyens recensés</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {regionData.map((region, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-full">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">{region.name}</span>
                              <span className="text-sm text-gray-500">{region.count.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-ivoire-orange rounded-full h-2" 
                                style={{ width: `${region.percentage}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-sm font-medium w-12 text-right">{region.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Carte des Opérations</CardTitle>
                    <CardDescription>Couverture nationale du recensement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted h-[300px] w-full flex items-center justify-center">
                      <Map className="h-16 w-16 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Carte de la Côte d'Ivoire</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="demographics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Répartition par Âge</CardTitle>
                      <CardDescription>Structure démographique de la population</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>0-14 ans</span>
                          <div className="flex items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                              <div className="bg-ivoire-orange h-2.5 rounded-full" style={{ width: '42%' }} />
                            </div>
                            <span className="text-sm font-medium">42%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>15-24 ans</span>
                          <div className="flex items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                              <div className="bg-ivoire-orange h-2.5 rounded-full" style={{ width: '20%' }} />
                            </div>
                            <span className="text-sm font-medium">20%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>25-54 ans</span>
                          <div className="flex items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                              <div className="bg-ivoire-orange h-2.5 rounded-full" style={{ width: '30%' }} />
                            </div>
                            <span className="text-sm font-medium">30%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>55+ ans</span>
                          <div className="flex items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                              <div className="bg-ivoire-orange h-2.5 rounded-full" style={{ width: '8%' }} />
                            </div>
                            <span className="text-sm font-medium">8%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Genre</CardTitle>
                      <CardDescription>Distribution hommes/femmes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center space-x-6">
                        <div className="text-center">
                          <div className="rounded-full bg-ivoire-orange bg-opacity-20 w-20 h-20 flex items-center justify-center mx-auto mb-2">
                            <span className="font-bold text-xl">49%</span>
                          </div>
                          <span className="text-sm">Hommes</span>
                        </div>
                        <div className="text-center">
                          <div className="rounded-full bg-ivoire-green bg-opacity-20 w-20 h-20 flex items-center justify-center mx-auto mb-2">
                            <span className="font-bold text-xl">51%</span>
                          </div>
                          <span className="text-sm">Femmes</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Langues parlées</CardTitle>
                    <CardDescription>Diversité linguistique nationale</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Français (officielle)</span>
                            <span className="text-sm text-gray-500">60%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-ivoire-orange rounded-full h-2" style={{ width: '60%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Dioula</span>
                            <span className="text-sm text-gray-500">30%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-ivoire-orange rounded-full h-2" style={{ width: '30%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Baoulé</span>
                            <span className="text-sm text-gray-500">25%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-ivoire-orange rounded-full h-2" style={{ width: '25%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Bété</span>
                            <span className="text-sm text-gray-500">18%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-ivoire-orange rounded-full h-2" style={{ width: '18%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Autres (60+ langues)</span>
                            <span className="text-sm text-gray-500">40%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-ivoire-orange rounded-full h-2" style={{ width: '40%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Note: Le total dépasse 100% car de nombreux citoyens parlent plusieurs langues.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
