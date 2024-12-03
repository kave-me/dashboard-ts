import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ClientData } from '@/types/client';

interface ClientInsightsProps {
  clientDemographicsData: ClientData[];
  clientProjectTypesData: ClientData[];
  clientPreferencesData: ClientData[];
  COLORS: string[];
}

const clientTypesData = [
  { name: 'Price-conscious', value: 20 },
  { name: 'Quality-focused', value: 15 },
  { name: 'Loyal long-term', value: 25 },
  { name: 'Novice', value: 10 },
  { name: 'Hands-off', value: 10 },
  { name: 'Detail-oriented', value: 10 },
  { name: 'Visionary', value: 10 },
];

const ClientInsights = ({ clientDemographicsData, clientProjectTypesData, clientPreferencesData, COLORS }: ClientInsightsProps) => (
  <div className="grid gap-6">
    <Alert>
      <AlertDescription>
        Understanding client demographics and preferences is crucial for freelancers to position their services effectively and build sustainable relationships.
      </AlertDescription>
    </Alert>

    <Card>
      <CardHeader>
        <CardTitle>Client Demographics & Budget Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          SMEs and startups form the backbone of the freelance market, collectively representing 75% of clients. 
          Enterprise clients, while fewer in number, offer higher-value projects.
        </p>
        <div className="grid gap-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={clientDemographicsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {clientDemographicsData.map((_entry: { name: string, value: number }, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                {/* <Legend /> */}
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clientDemographicsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avgBudget" fill="#8884d8" name="Average Budget (USD)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Common Types of Clients</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          As a freelancer, understanding the different types of clients and how to work with them is crucial for building strong relationships and ensuring project success.
        </p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={clientTypesData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#82ca9d"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {clientTypesData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-muted-foreground mt-4">
          Each client type has unique characteristics and requires different strategies for successful collaboration. Hover over the chart for more details.
        </p>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Types & Satisfaction Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            There's a clear trend towards ongoing relationships over one-time projects, 
            with client satisfaction scores improving as relationships mature.
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={clientProjectTypesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="ongoing" stroke="#8884d8" name="Ongoing Projects %" />
                <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#82ca9d" name="Satisfaction Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Client Priority Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Quality and communication consistently rank as top priorities for clients, 
            while cost sensitivity varies by client segment.
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={clientPreferencesData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="aspect" />
                <PolarRadiusAxis />
                <Radar name="Priority Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default ClientInsights; 