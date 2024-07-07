import React from "react";
import FloatingNav from "~/components/ui/nav";
import { getProjects } from "~/server/actions/projects";
import { ProjectCard } from "../../components/projectCard";

export default async function ProjectsPage() {
    const projects = await getProjects();

    const featured = projects.find((project) => project.type === "first");
    const second = projects.find((project) => project.type === "second");
    const third = projects.find((project) => project.type === "third");

    const others = projects.filter((project) => project.type !== "first" && project.type !== "second" && project.type !== "third");

    return (
      <>
      <FloatingNav />
      <div className="relative bg-black min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
        <div className="relative pb-16">
          <div className="px-4 pt-5 mx-auto space-y-8 max-w-7xl lg:px-8 md:pt-5 lg:pt-7">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-white font-light md:text-5xl text-2xl lg:text-7xl text-center z-20 mix-blend-difference">
                Projects
              </p>
              <p className="text-white font-light md:text-xl text-lg lg:text-2xl text-center z-20 mix-blend-difference">
                A mix of passion projects, club projects, and various startups.
              </p>
            </div>
            <div className="w-full h-px bg-zinc-800" />

            <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
              <div className="grid grid-cols-1 gap-6">
                {featured && 
                <ProjectCard 
                project={featured} 
                />}
              </div>
              <div className="grid grid-cols-1 gap-6">
                {second && <ProjectCard project={second} />}
                {third && <ProjectCard project={third} />}
              </div>
            </div>

            <div className="hidden w-full h-px md:block bg-zinc-800" />

            <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    );
}