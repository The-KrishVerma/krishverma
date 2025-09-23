import { Button } from '@/components/ui/button';
import krishProfile from '@/assets/krish-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Krish Verma,
              <span className="block text-gradient mt-2">
                Tech Enthusiast
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              B.Tech IT student at IIIT Allahabad, passionate about solving real-world problems 
              through technology. Building the future, one line of code at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent animate-glow-pulse"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-30 animate-glow-pulse"></div>
              
              <div className="relative bg-card rounded-2xl p-2 card-shadow">
                <img 
                  src={krishProfile} 
                  alt="Krish Verma - Professional Profile" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 card-shadow animate-float">
                <div className="text-2xl font-bold text-accent">2024</div>
                <div className="text-sm text-muted-foreground">Current Year</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 card-shadow animate-float" style={{animationDelay: '0.5s'}}>
                <div className="text-2xl font-bold text-accent">IIIT</div>
                <div className="text-sm text-muted-foreground">Allahabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;