"use client";

import Image from "next/image";
import {
  GanttChart,
  Goal,
  LucideIcon,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

import FeatureCard from "@/components/feature-card";

interface Feature {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  iconClassName: string;
}

const features: Feature[] = [
  {
    title: "Set goals and track progress",
    description:
      "Set achievable daily, weekly, monthly, or yearly goals and keep track of your progress.",
    image: "/features/goals.png",
    imageAlt: "Skopio goals dashboard showing progress toward a coding goal",
    icon: Goal,
    iconClassName: "text-amber-300",
  },
  {
    title: "View your activity trend",
    description:
      "See exactly where your time goes day after day, and even view your AFK stats.",
    image: "/features/dashboard.png",
    imageAlt: "Skopio activity dashboard showing daily trends and languages",
    icon: TrendingUp,
    iconClassName: "text-emerald-400",
  },
  {
    title: "View your timeline of events",
    description:
      "View captured events via a scrubbable timeline and drill down to see exactly how your time is spent.",
    image: "/features/timeline.png",
    imageAlt: "Skopio timeline showing categorized activity events",
    icon: GanttChart,
    iconClassName: "text-sky-300",
  },
  {
    title: "View your yearly insights",
    description:
      "See your total logged time, top projects, top programming languages, and your most active day.",
    image: "/features/insights.png",
    imageAlt: "Skopio yearly insights showing activity and productivity data",
    icon: Sparkles,
    iconClassName: "text-yellow-300",
  },
] as const;

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const selectedFeature = features[activeFeature];

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="mx-auto w-full max-w-360 px-5 py-24 sm:px-8 lg:pl-17.5 lg:pr-27.5"
    >
      <h2
        id="features-title"
        className="text-center text-2xl leading-normal font-bold text-black sm:text-[32px]"
      >
        Here are some of the features you can expect
      </h2>

      <div className="mt-14.25 grid items-center gap-10 min-[1180px]:grid-cols-[minmax(0,520px)_minmax(0,623px)] min-[1180px]:justify-between min-[1180px]:gap-0">
        <div className="order-2 flex w-full flex-col gap-6.25 min-[1180px]:order-1">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              active={activeFeature === index}
              description={feature.description}
              icon={feature.icon}
              iconClassName={feature.iconClassName}
              index={index}
              onSelect={() => setActiveFeature(index)}
              title={feature.title}
            />
          ))}
        </div>

        <div
          id="feature-preview"
          aria-live="polite"
          className="order-1 relative aspect-623/460 w-full overflow-hidden rounded-[10px] bg-[#d9d9d9] shadow-[0_22px_70px_rgba(0,0,0,0.12)] min-[1180px]:order-2"
        >
          <Image
            key={selectedFeature.image}
            src={selectedFeature.image}
            alt={selectedFeature.imageAlt}
            fill
            className="object-contain"
            loading="eager"
            sizes="(min-width: 1024px) 623px, calc(100vw - 40px)"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
