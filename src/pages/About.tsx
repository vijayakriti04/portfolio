import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know more about my journey and passion for development
            </p>
          </div>

          <Card className="shadow-medium">
            <CardContent className="p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Hi! I'm <strong>Vijaya Kriti Kamuju</strong>, a passionate and detail-oriented developer with a strong interest in full-stack web development. I love building modern, user-friendly, and performance-optimized applications that solve real-world problems.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Currently, I'm exploring technologies like <strong>ReactJS</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong> to build dynamic web applications. I enjoy turning complex challenges into elegant solutions and continuously strive to learn and improve my skills.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Whether it's designing responsive front-end interfaces or optimizing memory in embedded environments, I bring creativity, efficiency, and dedication to every project. My approach combines technical expertise with a keen eye for user experience.
                </p>
                
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring tech trends, sketching ideas, or collaborating on exciting team projects. I believe that the best solutions come from combining technical knowledge with creative thinking and collaborative teamwork.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Personal Qualities */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary">Problem Solver</h3>
                <p className="text-muted-foreground">
                  I love breaking down complex challenges into manageable solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary">Continuous Learner</h3>
                <p className="text-muted-foreground">
                  Always exploring new technologies and improving my skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary">Team Player</h3>
                <p className="text-muted-foreground">
                  I thrive in collaborative environments and enjoy mentoring others.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;