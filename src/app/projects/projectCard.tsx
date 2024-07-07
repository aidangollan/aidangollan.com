import { Eye } from "lucide-react";
import Link from "next/link";
import { Project } from "~/types";
import { Card } from "~/components/ui/card";

export const ProjectCard = ({ 
    project,
  } : {
    project: Project;
  }) => (
    <Card>
      <Link href={`/projects/${project?.id}`}>
        <article className="flex flex-col justify-between w-full h-full p-4 md:p-6">
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-zinc-100">
                {project?.date ? (
                  <time dateTime={new Date(project.date).toISOString()}>
                    {Intl.DateTimeFormat(undefined, {
                      dateStyle: "medium",
                    }).format(new Date(project.date))}
                  </time>
                ) : (
                  <span>SOON</span>
                )}
              </div>
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <Eye className="w-4 h-4" />{" "}
                {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  Number(project?.views ?? 0),
                )}
              </span>
            </div>

            <h2
              className={`mt-4 font-bold text-zinc-100 group-hover:text-white font-display}`}
            >
              {project?.title}
            </h2>
            <p className={`mt-4 leading-6 duration-150 text-zinc-400 group-hover:text-zinc-300 break-words`}>
              {project?.description}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-200 hover:text-zinc-50">
              Read more <span aria-hidden="true">&rarr;</span>
            </p>
          </div>
        </article>
      </Link>
    </Card>
  );