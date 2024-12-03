import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const FreelancerAnalysis = ({ skillsDistributionData, COLORS }: { skillsDistributionData: { name: string; value: number; growth: string; }[]; COLORS: string[]; }) => (
  <div className="grid gap-6">
    <Alert>
      <AlertDescription>
        The freelance workforce is becoming increasingly specialized, with clear correlations between expertise, earnings, and job satisfaction.
      </AlertDescription>
    </Alert>

    <Card>
      <CardHeader>
        <CardTitle>Skills Distribution & Market Demand</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Technical skills dominate the market, with Development & IT leading both in terms of freelancer population and demand. 
          Creative fields show strong growth potential.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillsDistributionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value, growth }) => `${name}: ${value}% (${growth})`}
                >
                  {skillsDistributionData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default FreelancerAnalysis; 