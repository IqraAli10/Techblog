import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Target, Users, Lightbulb, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About TechBlog</h1>
            <p className="text-xl text-muted-foreground">
              Empowering developers and tech enthusiasts with cutting-edge knowledge and insights.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To democratize technology knowledge and make it accessible to everyone.'
              },
              {
                icon: Users,
                title: 'Our Community',
                description: 'A thriving ecosystem of developers, learners, and tech enthusiasts.'
              },
              {
                icon: Lightbulb,
                title: 'Our Vision',
                description: 'Shaping the future of technology through education and innovation.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-all">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Lead Editor',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
                bio: 'Expert in web technologies with 10+ years of experience.'
              },
              {
                name: 'Alex Rivera',
                role: 'Senior Developer',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
                bio: 'Full-stack developer specializing in modern web frameworks.'
              },
              {
                name: 'Maria Rodriguez',
                role: 'Tech Writer',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
                bio: 'Technical writer with a passion for making complex topics accessible.'
              }
            ].map((member) => (
              <div key={member.name} className="bg-card p-6 rounded-lg text-center group hover:shadow-lg transition-all">
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary/60 mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Award className="w-12 h-12 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">Our Achievements</h2>
                <p className="text-muted-foreground">Recognition for our commitment to excellence</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { year: '2023', award: 'Best Tech Blog of the Year' },
                { year: '2022', award: 'Excellence in Technical Content' },
                { year: '2022', award: 'Community Choice Award' },
                { year: '2021', award: 'Innovation in Tech Education' }
              ].map((item) => (
                <div key={item.award} className="flex items-center gap-4 p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">{item.year}</div>
                  <div className="text-muted-foreground">{item.award}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Want to be part of our mission to spread technology knowledge? We're always looking for contributors and collaborators.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}