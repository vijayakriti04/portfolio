import { Code, Database, Wrench, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "C", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "Java", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" }
      ],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Web Technologies",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "React.js", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" }
      ],
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Git", level: "Intermediate" },
        { name: "npm/yarn", level: "Intermediate" }
      ],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Design & Creative",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Canva", level: "Advanced" },
        { name: "UI/UX Design", level: "Intermediate" },
        { name: "Responsive Design", level: "Advanced" },
        { name: "Figma", level: "Beginner" }
      ],
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary text-primary-foreground";
      case "Intermediate":
        return "bg-secondary text-secondary-foreground";
      case "Beginner":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6">Skills & Tools</h1>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <Badge className={getLevelColor(skill.level)}>
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Overview */}
          <div className="mt-16">
            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Technical Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">8+</div>
                    <p className="text-muted-foreground">Technologies</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2+</div>
                    <p className="text-muted-foreground">Years Learning</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <p className="text-muted-foreground">Projects Built</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Journey */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-serif text-center mb-8">Continuous Learning</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-center text-muted-foreground mb-6">
                  I believe in the importance of continuous learning in the ever-evolving tech landscape.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["TypeScript", "Next.js", "Docker", "AWS", "GraphQL", "PostgreSQL"].map((tech) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1">
                      Currently Learning: {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;