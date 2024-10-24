"use client";

import { cn } from "@/src/lib/utils";
import { AnimatedList } from "@/src/components/magicui/AnimatedList";

interface Item {
  // name: string;
  description: string;
  // icon?: string;
  color: string;
  // time?: string;
}

let notifications = [
  {
    // name: "Leasing na ryczałcie",
    description: "Leasing na ryczałcie, czy warto zmienić na podatek liniowy?",
    color: "#00C9A7"
  },
  {
    // name: "Najkorzystniejsze formy",
    description: "Jak najkorzystniej kupić auto powyzej 150 tys. zł brutto?",
    // time: "10m ago",
    // icon: "💬",
    color: "#FFB800",
  },
  {
    // name: "Optymalizacja",
    description: "Jak optymalziować wpłatę początkową i długość leasingu?",
    // time: "5m ago",
    // icon: "💬",
    color: "#FF3D71",
  },
  {
    // name: "Darownizna",
    description: "Kiedy i jak mogę przekazać auto w formie darowizny?",
    // time: "2m ago",
    // icon: "💬",
    color: "#1E86FF",
  },
  {
    // name: "Auto Elektryczne ⚡️, a spaliowe ⛽️",
    description: "Auto Elektryczne ⚡️, a spaliowe ⛽️ - które korzystniejsze?",
    color: "#FF3D71"
  },  
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ description, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">💬</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <p className="text-sm font-normal text-black/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function Questions({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[210px] w-full px-2 py-0 flex-col  overflow-hidden rounded-lg",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
