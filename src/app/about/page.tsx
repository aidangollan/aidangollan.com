"use client";

import dynamic from "next/dynamic";
import { leftSideContent, rightSideContent, shownData } from "./data";
import FloatingNav from "~/components/ui/nav";
import { options } from "./options";

const Chrono = dynamic(() => import('react-chrono').then(mod => mod.Chrono), {
    ssr: false 
});

export default function AboutPage() {
    const leftSideData = shownData.map(item => item.left);
    const rightSideData = shownData.map(item => item.right);

    return (
        <div className="flex flex-col p-20 gap-4 items-center min-h-screen w-full bg-black">
        <FloatingNav />
        <p className="text-white font-light md:text-5xl text-2xl lg:text-7xl text-center z-20 mix-blend-difference">
            About Me
        </p>
        <p className="text-white font-light md:text-xl text-lg lg:text-2xl text-center z-20 mix-blend-difference">
            How I Fell In Love With CS, And What I Built Along The Way
        </p>
        <div className="bg-black flex flex-col absolute top-52 items-start justify-start h-[calc(100vh-5rem)] w-full overflow-auto no-scrollbar">
            <div className="flex flex-row w-full items-center justify-center p-4">
                <Chrono
                    items={leftSideData}
                    mode="VERTICAL"
                    theme={options}
                    disableClickOnCircle
                    disableToolbar={true}
                    flipLayout 
                    cardWidth={500}
                >
                {leftSideContent}
                </Chrono>
                <Chrono
                    items={rightSideData}
                    mode="VERTICAL"
                    theme={options}
                    disableClickOnCircle
                    disableToolbar={true}
                    cardWidth={500}
                >
                {rightSideContent}
                </Chrono>
            </div>
        </div>
        </div>
    )
}
