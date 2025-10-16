export default function Sky3DBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#020617] via-[#0F172A] to-[#1E293B]">
      <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-[#3B82F6]/20 blur-3xl animate-float" />
      <div className="absolute top-40 right-[15%] w-40 h-40 rounded-full bg-[#06B6D4]/20 blur-3xl animate-float-slow" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-[20%] w-36 h-36 rounded-full bg-[#3B82F6]/15 blur-3xl animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-[25%] w-28 h-28 rounded-full bg-[#06B6D4]/25 blur-3xl animate-float-slow" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 right-[30%] w-32 h-32 rounded-full bg-[#3B82F6]/20 blur-3xl animate-float" 
           style={{ animationDelay: '1.5s' }} />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />
      
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
