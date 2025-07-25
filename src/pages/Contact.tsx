import { Mail, Linkedin, Github, Twitter, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "k.v.kriti.44@gmail.com",
      href: "mailto:k.v.kriti.44@gmail.com",
      description: "Feel free to reach out for collaborations"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/vijaya-kriti-kamuju",
      href: "https://www.linkedin.com/in/vijaya-kriti-kamuju",
      description: "Let's connect professionally"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/vijayakriti04",
      href: "https://github.com/vijayakriti04",
      description: "Check out my code and projects"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: "Twitter/X",
      value: "twitter.com/vijayakriti",
      href: "https://twitter.com/vijayakriti",
      description: "Follow for tech updates and insights"
    }
  ];

  const quickInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Coimbatore, Tamil Nadu, India"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Availability",
      value: "Open to opportunities"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Response Time",
      value: "Usually within 24 hours"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Let's connect and explore opportunities together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            {contact.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{contact.label}</h3>
                            <a 
                              href={contact.href}
                              className="text-primary hover:underline font-medium block mb-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact.value}
                            </a>
                            <p className="text-muted-foreground text-sm">{contact.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <span className="font-medium">{info.label}: </span>
                        <span className="text-muted-foreground">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Have a project in mind or want to collaborate? I'd love to hear from you!
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Project Collaboration" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project or how we can work together..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full shadow-glow hover:shadow-glow">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-hero-gradient text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'm always open to new opportunities and interesting conversations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;