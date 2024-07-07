import { headers } from 'next/headers'
import FloatingNav from "~/components/ui/nav";
import TimelineWrapper from "./TimelineWrapper";

export default function AboutPage() {
    const userAgent = headers().get('user-agent') ?? ''
    const isMobile = /mobile/i.test(userAgent)

    return (
        <div className="flex flex-col p-4 md:p-20 gap-4 items-center min-h-screen w-full bg-gradient-to-b from-darkBg to-lightBg overflow-auto no-scrollbar">
            <FloatingNav />
            <div className="flex flex-col items-center justify-start h-[calc(100vh-5rem)] w-full overflow-auto no-scrollbar">
                <p className="text-white font-light md:text-5xl text-2xl lg:text-7xl text-center z-20 mix-blend-difference">
                    About Me
                </p>
                <p className="text-white font-light md:text-xl text-lg lg:text-2xl text-center z-20 mix-blend-difference">
                    How I Fell In Love With CS, And What I've Built Along The Way
                </p>
                <TimelineWrapper isMobile={isMobile} />
            </div>
        </div>
    )
}