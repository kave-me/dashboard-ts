import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import MarketOverview from "@/components/MarketOverview";
import ClientInsights from "@/components/ClientInsights";
import FreelancerAnalysis from "@/components/FreelancerAnalysis";
import ClientCollaborationInsights from "@/components/ClientCollaborationInsights";
import {
  marketGrowthData,
  marketTrendsData,
  industryDemandData,
  clientDemographicsData,
  clientProjectTypesData,
  clientPreferencesData,
  skillsDistributionData,
  COLORS
} from "./data";

const FreelanceCourseDashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-grow">
          <AppSidebar />
          <div className="flex-grow p-6">
            <section id="market">
              <MarketOverview 
                marketGrowthData={marketGrowthData.map(d => ({
                  year: d.year.toString(),
                  value: d.value,
                  platforms: d.platforms
                }))}
                marketTrendsData={marketTrendsData.map(d => ({
                  year: d.year.toString(),
                  remote: d.remote,
                  hybrid: d.hybrid,
                  onsite: d.onsite
                }))}
                industryDemandData={industryDemandData}
              />
            </section>

            <section id="clients">
              <ClientInsights 
                clientDemographicsData={clientDemographicsData.map(d => ({
                  name: d.type,
                  value: d.value,
                  avgBudget: d.avgBudget
                }))}
                clientProjectTypesData={clientProjectTypesData.map(d => ({
                  name: d.month,
                  value: d.oneTime + d.ongoing,
                  oneTime: d.oneTime,
                  ongoing: d.ongoing,
                  satisfaction: d.satisfaction
                }))}
                clientPreferencesData={clientPreferencesData.map(d => ({
                  aspect: d.aspect,
                  score: d.score
                }))}
                COLORS={COLORS}
              />
            </section>

            <section id="freelancers">
              <FreelancerAnalysis 
                skillsDistributionData={skillsDistributionData} 
                COLORS={COLORS} 
              />
            </section>

            <section id="collaboration-insights">
              <ClientCollaborationInsights />
            </section>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default FreelanceCourseDashboard;
  