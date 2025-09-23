import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Calendar, Code2, Sparkles } from 'lucide-react';
import krishProfile from '@/assets/krish-profile-new.jpg';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 text-accent/20 animate-float" style={{
        animationDelay: '0.5s'
      }}>
          <Code2 size={24} />
        </div>
        <div className="absolute bottom-32 left-16 text-accent/20 animate-float" style={{
        animationDelay: '1.5s'
      }}>
          <Sparkles size={20} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="animate-fade-in space-y-8">
            {/* Status Badge */}
            <Badge variant="outline" className="border-accent text-accent bg-accent/10 backdrop-blur-sm w-fit">
              <Calendar className="w-3 h-3 mr-1" />
              Available for Opportunities
            </Badge>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                Krish Verma,
                <span className="block text-gradient mt-2">
                  Tech Enthusiast
                </span>
              </h1>
              
              {/* Location Badge */}
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin size={16} />
                <span>IIIT Allahabad • B.Tech IT Student</span>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Passionate about solving real-world problems through technology. 
              Building the future with <span className="text-accent font-medium">code</span>, 
              <span className="text-accent font-medium"> innovation</span>, and 
              <span className="text-accent font-medium"> creativity</span>.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent animate-glow-pulse group" onClick={() => scrollToSection('projects')}>
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group" onClick={() => scrollToSection('contact')}>
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
            
            {/* Quick Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent hover:bg-accent/10 p-2" asChild>
                  <a href="mailto:krishverma060306@gmail.com">
                    <Mail size={18} />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent hover:bg-accent/10 p-2" asChild>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <Github size={18} />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent hover:bg-accent/10 p-2" asChild>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <Linkedin size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Enhanced Right Content */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Profile Card with Glassmorphism */}
              <div className="relative bg-card/50 backdrop-blur-md rounded-3xl p-3 card-shadow border border-white/10">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-xl opacity-20 animate-glow-pulse"></div>
                
                <div className="relative">
                  <img src={krishProfile} alt="Krish Verma - Professional Profile" className="w-80 h-auto rounded-2xl object-cover mx-auto" />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              {/* Enhanced Floating Cards */}
              <Card className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-md border-accent/20 animate-float">
                
              </Card>
              
              <Card className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md border-accent/20 animate-float" style={{
              animationDelay: '0.5s'
            }}>
                
              </Card>
              
              {/* New Stats Card */}
              <Card className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-card/80 backdrop-blur-md border-accent/20 animate-float" style={{
              animationDelay: '1s'
            }}>
                
              </Card>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent flex flex-col items-center gap-1" onClick={() => scrollToSection('about')}>
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown size={16} />
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;