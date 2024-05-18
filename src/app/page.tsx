import { FloatingNav } from "~/components/ui/nav";
import SparkleBlobs from "./sparkleBlobs";
import { navItems } from "./navItems";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <SparkleBlobs />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        <div className="w-full flex-grow flex flex-col items-center justify-center">
          <p className="text-white font-light md:text-7xl text-3xl lg:text-9xl text-center absolute bottom-80 z-20 mix-blend-difference">
            Aidan Gollan
          </p>
          <div className="w-full h-80 absolute bottom-0">
            <FloatingNav navItems={navItems} />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_125px_at_top,transparent_20%,white)]">
              <div className="absolute font-thin top-[125px] w-full flex flex-col items-center p-4 gap-2">
                <p className="text-gray-300 text-center text-2xl">
                  Software Engineering Intern @&nbsp;
                  <Link target="_noblank" href="https://www.auto-owners.com/" className="text-white">
                    Auto-Owners Insurance
                  </Link>
                </p>
                <p className="text-gray-300 text-center text-2xl">
                  Founder of&nbsp;
                  <Link target="_noblank" href="https://notello.ai" className="text-white">
                    Notello Inc.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
