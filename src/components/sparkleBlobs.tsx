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
          firstColor="18, 113, 255"
          secondColor="100, 220, 255"
          thirdColor="221, 74, 255"
          fourthColor="200, 50, 50"
          fifthColor="180, 0, 0"
          pointerColor="140, 100, 255"
          size="60%"
          blendingValue="hard-light"
          containerClassName="absolute inset-0"
        >
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={200}
            className="w-full h-full absolute inset-0"
            particleColor="#FFFFFF"
          />
        </BackgroundGradientAnimation>
      </div>
    );
};