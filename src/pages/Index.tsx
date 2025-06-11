
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import CursorTrail from "@/components/CursorTrail";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background layers */}
      <AnimatedBackground />
      <FloatingOrbs />
      <CursorTrail />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Interactive
          </h1>
          <h2 className="text-4xl md:text-6xl font-light text-foreground/80">
            Animation Experience
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Move your cursor around to see the magic unfold. Experience dynamic particles, 
            floating orbs, and mesmerizing trails that respond to your every movement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="px-8 py-4 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              Explore More
            </button>
            <button className="px-8 py-4 bg-transparent border border-muted-foreground/30 rounded-lg text-foreground hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105">
              Learn About Tech
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default Index;
