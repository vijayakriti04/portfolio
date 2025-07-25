import { Trophy, Award, Star, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Achieved 94% in Intermediate (12th Grade)",
      icon: <Trophy className="h-8 w-8" />,
      category: "Academic",
      year: "2023"
    },
    {
      title: "Perfect Score",
      description: "Secured 10 CGPA in 10th Grade (SSC)",
      icon: <Award className="h-8 w-8" />,
      category: "Academic",
      year: "2021"
    },
    {
      title: "Full Stack Project",
      description: "Successfully developed Smart Housing Platform with modern tech stack",
      icon: <Star className="h-8 w-8" />,
      category: "Technical",
      year: "2024"
    },
    {
      title: "NSS Leadership",
      description: "Led multiple community service initiatives through NSS",
      icon: <Target className="h-8 w-8" />,
      category: "Leadership",
      year: "2023-2024"
    }
  ];

  const stats = [
    {
      number: "10",
      label: "CGPA in SSC",
      description: "Perfect academic score"
    },
    {
      number: "94%",
      label: "Intermediate Score",
      description: "Outstanding performance"
    },
    {
      number: "2+",
      label: "Major Projects",
      description: "Successfully completed"
    },
    {
      number: "3+",
      label: "NSS Activities",
      description: "Community service"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
      case "Technical":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "Leadership":
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
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6">Achievements</h1>
            <p className="text-xl text-muted-foreground">
              Milestones and accomplishments in my academic and professional journey
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${getCategoryColor(achievement.category)}`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{achievement.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{achievement.category} • {achievement.year}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recognition Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-serif text-center mb-8">Recognition & Impact</h2>
            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Academic Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      Consistent high performance throughout academic career
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Technical Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      Building modern solutions with cutting-edge technologies
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Community Service</h3>
                    <p className="text-sm text-muted-foreground">
                      Active participation in social responsibility initiatives
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Goals */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Continuing to push boundaries and achieve new milestones in technology and innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-4 py-2 bg-primary/10 rounded-lg">
                    <span className="text-primary font-medium">Full Stack Certification</span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-lg">
                    <span className="text-primary font-medium">Open Source Contributions</span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-lg">
                    <span className="text-primary font-medium">Tech Leadership</span>
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

export default Achievements;