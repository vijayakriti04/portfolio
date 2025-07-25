import { ArrowRight, Download, Code, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Development",
      description: "React.js, Node.js, MongoDB"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Systems",
      description: "RESTful APIs, Express.js"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Modern Web Apps",
      description: "Responsive, Performance-Optimized"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-hero-gradient opacity-5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif mb-6">
              Hi, I'm{' '}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Vijaya Kriti
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A passionate Full Stack Developer building modern, user-friendly applications 
              that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects">
                <Button size="lg" className="shadow-glow hover:shadow-glow">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always excited to work on new projects and collaborate with fellow developers.
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-glow hover:shadow-glow">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;