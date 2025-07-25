import { ExternalLink, Github, Home, Hotel } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Smart Housing Platform",
      description: "A responsive full-stack web application built using React.js, Node.js, Express.js, and MongoDB.",
      icon: <Home className="h-8 w-8" />,
      features: [
        "Property listings with advanced search and filtering",
        "User authentication and session handling",
        "Admin dashboard for property management",
        "Real-time booking system",
        "RESTful APIs for seamless data exchange",
        "Modular design architecture"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS3"],
      highlights: ["RESTful APIs", "Modular Design", "Modern UI/UX"],
      type: "Full Stack"
    },
    {
      title: "Hotel Management System",
      description: "Developed an interactive front-end system using HTML, CSS, and JavaScript with focus on user experience.",
      icon: <Hotel className="h-8 w-8" />,
      features: [
        "Interactive room booking interface",
        "Comprehensive service listings",
        "Form validations for user inputs",
        "Responsive design for all devices",
        "User-friendly layouts",
        "Dynamic content updates"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      highlights: ["User-Friendly Design", "Form Validation", "Responsive Elements"],
      type: "Frontend"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6">Projects</h1>
            <p className="text-xl text-muted-foreground">
              Showcasing my development journey through real-world applications
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Project Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} className="bg-primary/10 text-primary hover:bg-primary/20">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm constantly working on new projects and exploring different technologies.
                </p>
                <Button className="shadow-glow hover:shadow-glow">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;