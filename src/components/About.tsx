import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  const education = [{
    degree: "B.Tech in Information Technology",
    institution: "Indian Institute of Information Technology, Allahabad",
    year: "2024 - 2028",
    status: "Current",
    description: "CGPA: 8.83 (Top 5% of batch). Pursuing Bachelor's degree with focus on software development, data structures, algorithms, and emerging technologies."
  }, {
    degree: "Class XII (CBSE)",
    institution: "Police DAV Public School, Ambala City",
    year: "2022 - 2024",
    status: "Completed",
    description: "Score: 93.8%. Completed higher secondary education with strong foundation in mathematics and computer science."
  }, {
    degree: "Class X (CBSE)",
    institution: "DAV Public School, Ambala Cantt",
    year: "2012 - 2022",
    status: "Completed",
    description: "Score: 92%. Completed secondary education with excellent academic performance."
  }];
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-accent">My Story</h3>
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p className="mb-6">
                I'm Krish Verma, a B.Tech IT student at IIIT Allahabad, passionate about solving 
                real-world problems through technology. With a strong foundation in data structures, 
                algorithms, and software development, I'm building expertise in web technologies, 
                system design, and open-source contributions.
              </p>
              <p className="mb-6">
                I actively explore Blockchain, WebRTC, AI, and Machine Learning, staying engaged 
                with emerging innovations. My approach combines theoretical knowledge with practical 
                implementation, always seeking to understand not just the "how" but the "why" behind 
                each technology.
              </p>
              <p>Motivated to tackle impactful engineering challenges, I'm eager to collaborate on open-source, full-stack, and scalable system projects, while seeking opportunities for internships, research, and professional growth. I thrive in dynamic environments that encourage continuous learning and innovation, and I aim to contribute solutions that create real-world value.</p>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-accent">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold group-hover:text-accent transition-colors duration-200">
                        {edu.degree}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${edu.status === 'Current' ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'}`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{edu.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;