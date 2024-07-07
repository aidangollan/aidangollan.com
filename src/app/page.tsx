import FloatingNav from "~/components/ui/nav";
import SparkleBlobs from "../components/sparkleBlobs";
import Link from "next/link";
import { ArrowRight, Eye, Github, Linkedin } from "lucide-react";
import { getViews, incrementViews } from "~/server/actions/views";
import { getProfile } from "~/server/actions/profile";
import { Profile } from "~/types";
import { AO_URL, NOTELLO_URL } from "~/constants";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  await incrementViews();
  const views: string = await getViews();
  const profile: Profile | undefined = await getProfile();

  return (
    <>
      <SparkleBlobs />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        <div className="flex flex-row items-center justify-end top-0 right-0 absolute gap-2 p-4 text-white">
          <Link href={profile?.githubLink ?? ""} target="_noblank">
            <Github
              className={`w-6 h-6 duration-200 hover:font-medium`}
            />
          </Link>
          <Link href={profile?.linkedinLink ?? ""} target="_noblank">
            <Linkedin 
              className={`w-6 h-6 duration-200 hover:font-medium`}
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end top-0 left-0 absolute gap-2 p-4 text-white">
          <Eye className={`w-6 h-6 duration-200 hover:font-medium`} />
          <p>{views}</p>
        </div>
        <div className="w-full flex-grow flex flex-col items-center justify-center">
          <p className="text-white font-light md:text-7xl text-3xl lg:text-9xl text-center absolute bottom-80 z-20 mix-blend-difference">
            Aidan Gollan
          </p>
          <div className="w-full h-80 absolute bottom-0">
            <FloatingNav />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_125px_at_top,transparent_20%,white)]">
              <div className="absolute font-thin top-[140px] w-full flex flex-col items-center p-4 gap-2">
                <p className="text-gray-300 text-center text-2xl">
                  Software Engineering Intern @&nbsp;
                  <Link target="_noblank" href={AO_URL} className="text-white">
                    Auto-Owners Insurance
                  </Link>
                </p>
                <p className="text-gray-300 text-center text-2xl">
                  Founder of&nbsp;
                  <Link target="_noblank" href={NOTELLO_URL} className="text-white">
                    Notello Inc.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 p-4 text-white z-50">
          <Link href={profile?.resumeLink ?? ""} target="_blank" className="flex flex-row items-center gap-1">  
            <p className="text-white">View Resume</p>
            <ArrowRight className={`w-6 h-6 duration-200 hover:font-medium`} />
          </Link>
        </div>
      </div>
    </>
  );
}
