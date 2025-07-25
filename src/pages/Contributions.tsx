import { Heart, School, Droplet, Shield, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Contributions = () => {
  const contributions = [
    {
      title: "NSS Volunteer",
      organization: "National Service Scheme",
      description: "Actively participated in various community development and service activities through NSS, demonstrating social responsibility and leadership.",
      icon: <Users className="h-8 w-8" />,
      duration: "2023 - Present",
      type: "Volunteer",
      impact: "Community Development"
    },
    {
      title: "NSS Special Camp at Government School",
      organization: "Government School Partnership",
      description: "Engaged in teaching support, campus cleanliness, and awareness programs to benefit underprivileged students and enhance school infrastructure.",
      icon: <School className="h-8 w-8" />,
      duration: "2024",
      type: "Education",
      impact: "Student Support"
    },
    {
      title: "Blood Donation Camp Volunteer",
      organization: "Healthcare Initiative",
      description: "Assisted in organizing and managing logistics, helping ensure smooth operation and safety for donors and staff.",
      icon: <Droplet className="h-8 w-8" />,
      duration: "2023 - 2024",
      type: "Healthcare",
      impact: "Life Saving"
    },
    {
      title: "First Aid Awareness Drives",
      organization: "Community Health Program",
      description: "Helped conduct awareness campaigns educating students and local communities on basic first aid techniques and emergency response.",
      icon: <Shield className="h-8 w-8" />,
      duration: "2023 - 2024",
      type: "Health Education",
      impact: "Emergency Preparedness"
    }
  ];

  const impactStats = [
    {
      number: "50+",
      label: "Students Helped",
      description: "Through teaching support"
    },
    {
      number: "200+",
      label: "Blood Donors",
      description: "Assisted in camps"
    },
    {
      number: "100+",
      label: "People Trained",
      description: "In first aid awareness camp"
    },
    {
      number: "1+",
      label: "Years Active",
      description: "NSS participation"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Volunteer":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
      case "Education":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "Healthcare":
        return "bg-red-500/10 text-red-600 dark:text-red-400";
      case "Health Education":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6">Contributions</h1>
            <p className="text-xl text-muted-foreground">
              Giving back to the community through service and social responsibility
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contributions Grid */}
          <div className="space-y-8">
            {contributions.map((contribution, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${getTypeColor(contribution.type)} flex-shrink-0`}>
                        {contribution.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{contribution.title}</CardTitle>
                        <p className="text-primary font-medium mb-2">{contribution.organization}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {contribution.duration}
                          </Badge>
                          <Badge className={getTypeColor(contribution.type)}>
                            {contribution.type}
                          </Badge>
                          <Badge variant="secondary">
                            {contribution.impact}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{contribution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-16">
            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Social Responsibility</h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                    I believe in using my skills and time to make a positive impact on society. 
                    Through NSS and various community initiatives, I strive to contribute to 
                    meaningful change and help those in need.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <School className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Education Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Helping underprivileged students access quality education
                      </p>
                    </div>
                    <div className="text-center">
                      <Droplet className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Healthcare Initiatives</h4>
                      <p className="text-sm text-muted-foreground">
                        Supporting life-saving blood donation campaigns
                      </p>
                    </div>
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Emergency Preparedness</h4>
                      <p className="text-sm text-muted-foreground">
                        Training communities in essential first aid skills
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Plans */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-serif text-center mb-8">Future Initiatives</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Technology for Good</h4>
                    <p className="text-muted-foreground">
                      Planning to develop technology solutions that can help NGOs and 
                      community organizations streamline their operations and reach more people in need.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Coding Education</h4>
                    <p className="text-muted-foreground">
                      Aspiring to teach programming skills to underserved communities, 
                      helping bridge the digital divide and create opportunities for others.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributions;
