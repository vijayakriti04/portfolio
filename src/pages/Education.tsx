import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      year: "2023–2027",
      //grade: "CGPA: 6.09",
      type: "current"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Tirumala Mahila Junior Kalasala",
      year: "2021–2023",
      grade: "Percentage: 94%",
      type: "completed"
    },
    {
      degree: "10th Grade (SSC)",
      institution: "Tirumala English Medium High School",
      year: "2020–2021",
      grade: "CGPA: 10",
      type: "completed"
    }
  ];

  const languages = [
    {
      language: "English",
      proficiency: "Fluent (Professional Proficiency)",
      description: "Full professional working proficiency"
    },
    {
      language: "Telugu",
      proficiency: "Native",
      description: "Mother tongue"
    },
    {
      language: "Hindi",
      proficiency: "Professional Working Proficiency",
      description: "Professional working proficiency"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6">Education & Languages</h1>
            <p className="text-xl text-muted-foreground">
              My academic journey and language skills
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold font-serif mb-12 text-center">Education</h2>
            <div className="space-y-8">
              {educationData.map((education, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            education.type === 'current' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <GraduationCap className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                            <p className="text-primary font-medium mb-2">{education.institution}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{education.year}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Award className="h-4 w-4" />
                                <span>{education.grade}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {education.type === 'current' && (
                        <div className="mt-4 md:mt-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            Currently Pursuing
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <h2 className="text-3xl font-bold font-serif mb-12 text-center">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {languages.map((lang, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-3 text-primary">{lang.language}</h3>
                    <p className="text-lg font-medium mb-2">{lang.proficiency}</p>
                    <p className="text-muted-foreground">{lang.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;