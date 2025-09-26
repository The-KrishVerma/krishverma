import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code2, Trophy, Zap, ExternalLink, Star, Target, Award } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      icon: Code2,
      achievement: 'Solved 250+ problems',
      link: 'https://leetcode.com/u/_KrishVerma_/',
      color: 'from-orange-500 to-yellow-500',
      stats: '250+ Problems Solved'
    },
    {
      name: 'Codeforces',
      icon: Zap,
      achievement: '1200+ Rated (Pupil)',
      link: 'https://codeforces.com/profile/_KrishVerma_',
      color: 'from-blue-500 to-purple-500',
      stats: 'Pupil Rank'
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      achievement: '1600+ Rated (3 Star)',
      additionalInfo: 'Global Rank: 236 (Starters 191) • 339 (Starters 196)',
      link: 'https://www.codechef.com/users/krish_verma636',
      color: 'from-green-500 to-emerald-500',
      stats: '3 Star Rating'
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 bg-purple-900/30 rounded-3xl backdrop-blur-md">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Competitive Programming</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Coding Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about problem-solving and algorithmic challenges across multiple platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <Card 
              key={profile.name} 
              className="group relative bg-card/50 backdrop-blur-md border border-white/10 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icon with gradient background */}
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${profile.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <profile.icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                  </div>

                  {/* Platform name */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {profile.name}
                  </h3>

                  {/* Main achievement badge */}
                  <Badge 
                    variant="outline" 
                    className="border-accent text-accent bg-accent/10 px-4 py-2 text-sm font-medium"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {profile.stats}
                  </Badge>

                  {/* Achievement details */}
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">
                      {profile.achievement}
                    </p>
                    {profile.additionalInfo && (
                      <p className="text-sm text-muted-foreground">
                        {profile.additionalInfo}
                      </p>
                    )}
                  </div>

                  {/* Visit profile button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a 
                      href={profile.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Profile
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* Additional stats section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Total Contests:</span>
              <span className="font-bold text-foreground">50+</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Problems Solved:</span>
              <span className="font-bold text-foreground">400+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;