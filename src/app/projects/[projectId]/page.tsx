import { getMarkdown, getProject, incrementViews } from "~/server/actions/projects";
import { Header } from "./header";
import Article from "./article";

export default async function PostPage({ 
    params: { projectId },
} : {
    params: { projectId: string };
}) {
    const project = await getProject(Number(projectId));

    const markdown = await getMarkdown(Number(projectId));

    void incrementViews(Number(projectId));
  
    return (
      <div className="bg-zinc-50 min-h-screen">
        <Header project={project} />
        <Article markdown={markdown} />
      </div>
    );
}