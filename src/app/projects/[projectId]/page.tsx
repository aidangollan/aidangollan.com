import { getProject } from "~/server/actions/projects";
import { Header } from "./header";

export default async function PostPage({ 
    params: { projectId },
} : {
    params: { projectId: string };
}) {
    const project = await getProject(Number(projectId));
  
    return (
      <div className="bg-zinc-50 min-h-screen">
        <Header project={project} />
  
        <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
          wow
        </article>
      </div>
    );
  }