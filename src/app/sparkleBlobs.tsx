"use client";

import { BackgroundGradientAnimation } from "~/components/ui/background-gradient-animation";
import { SparklesCore } from "~/components/ui/sparkles";

export default function SparkleBlobs() {
    return (
        <div className="fixed inset-0 z-0 bg-black">
        <BackgroundGradientAnimation
          interactive={false}
          gradientBackgroundStart="rgb(0, 0, 0)"
          gradientBackgroundEnd="rgb(0, 0, 0)"
          firstColor="255, 255, 255"
          size="100%"
          blendingValue="hard-light"
          containerClassName="absolute inset-0"
        >
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={400}
            className="w-full h-full absolute inset-0"
            particleColor="#FFFFFF"
          />
        </BackgroundGradientAnimation>
      </div>
    );
};