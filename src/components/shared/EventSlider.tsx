import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { Trophy, Users, Timer, ChevronRight, Share2, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const EVENTS = [
  {
    id: 1,
    title: "REFERRAL FRIENDSHIP TOURNAMENT",
    originalTitle: "中推友谊赛",
    prize: "$10,000 + BUG BOUNTY",
    image: "https://storera.masterpoker.com/file/activity/5085d060-b1eb-4316-adf1-b95ee55a9985.webp",
    type: "FEATURED",
    countdown: "11:44:38",
    bullets: ["Free Participation", "Refer 3 Friends for Ticket", "Bug Bounty Available"],
    path: "/tasks"
  },
  {
    id: 2,
    title: "WEEKEND MEGA SERIES",
    originalTitle: "周末大赏赛",
    prize: "$2,500,000 GUARANTEED",
    image: "https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&q=80&w=1200",
    type: "GTD",
    countdown: "02:14:05",
    bullets: ["High Roller Tier", "Exclusive VIP Access", "Live Broadcast"],
    path: "/tasks"
  }
];

export function EventSlider({ className }: { className?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    
    // Auto play equivalent
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden rounded-[40px] glass border-white/5" ref={emblaRef}>
        <div className="flex">
          {EVENTS.map((event) => (
            <div key={event.id} className="flex-[0_0_100%] min-w-0 relative h-64 md:h-80">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent" />
              <img 
                src={event.image} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={event.title}
              />
              
              <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-center max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase">
                    <Timer size={14} /> {event.countdown}
                  </div>
                </div>

                <h2 className="text-2xl md:text-4xl font-display font-black uppercase italic tracking-tighter mb-2 leading-none">
                  {event.title}
                </h2>
                <div className="text-xl md:text-2xl font-bold primary-gradient uppercase mb-4">{event.prize}</div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  {event.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-wider">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {bullet}
                    </div>
                  ))}
                </div>

                <Link 
                  to={event.path} 
                  className="px-8 py-3 bg-white text-black rounded-full text-xs font-black uppercase italic tracking-tighter w-fit hover:scale-105 transition-all flex items-center gap-2"
                >
                  Win Tickets <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {EVENTS.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1 transition-all rounded-full",
              selectedIndex === i ? "w-8 bg-primary" : "w-2 bg-white/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
