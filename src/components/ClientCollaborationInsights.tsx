import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ClientCollaborationInsights = () => {
  return (
    <div className="grid gap-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Insights on Client Collaboration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            A few weeks ago, I caught up with a colleague, Richie, to suss each other out as potential collaborators. 
            It’s good to do continuous networking of that kind, even if those relationships can take months or years to bear fruit. 
            He’s a long-time self-employed business owner like myself. We chat over lunch to get to know each other’s businesses and what makes us tick. 
            Discussion ranged from clients, tools, processes, and technology, but what we kept circling back to was this:
          </p>
          <h2 className="text-lg font-semibold mb-2">Aligning Values for Success</h2>
          <p className="mb-4">
            Working with clients and collaborators whose values align with yours is the most important aspect of building a successful service business. 
            If you run your own independent service business, your life-blood is your clients. It should be no surprise that the clients you choose to engage with have a huge impact on the success of your work and trajectory of your business. 
            Yet so many self-employed creatives accept any work that comes their way, without giving enough thought to the impact those decisions have.
          </p>
          <h2 className="text-lg font-semibold mb-2">Choosing the Right Projects</h2>
          <p className="mb-4">
            You probably have more choice than you realize. Use it! Here’s why:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>You do your best work when you’re passionate about the cause.</li>
            <li>Work with good people, and it almost doesn’t matter what the project is.</li>
            <li>Are you working for cost-clients or value-clients?</li>
            <li>Work of one kind leads to more of the same.</li>
            <li>You’ll never regret saying “no” to the wrong work.</li>
            <li>Well-aligned clients become long-term partners.</li>
            <li>Being selective is a privilege.</li>
          </ul>
          <p>
            Maintaining a laser-focused vision towards earning the privilege of being selective in your clients is crucial. 
            It might mean sacrificing short-term income to play the long game, but it’s an investment in your business that will pay off ten-fold later.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientCollaborationInsights; 