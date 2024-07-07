import fs from 'fs/promises';
import path from 'path';
import { db } from "../db";
import { projects } from '../db/schema';
import { eq } from 'drizzle-orm';

export async function getProjects() {
    const projects = await db.query.projects.findMany();

    return projects;
}

export async function getProject(id: number) {
    const project = await db.query.projects.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    return project;
}

export async function getMarkdown(id: number) {
    let markdown = '';

    try {
        const markdownPath = path.join(process.cwd(), 'public', 'markdown', `${id}.md`);
        markdown = await fs.readFile(markdownPath, 'utf-8');
    } catch (error) {
        console.error(`Error reading markdown for project ${id}:`, error);
    }

    return markdown;
}

export async function getViews(id: number) {
    const project = await db.query.projects.findFirst({
        where: (model, { eq }) => eq(model.id, id)
    });

    return project?.views ?? 0;
}

export async function incrementViews(id: number) {
    const project = await db.query.projects.findFirst({
        where: (model, { eq }) => eq(model.id, id)
    });

    if (!project) {
        return;
    }

    const newViews = (Number(project.views ?? 0) + 1).toString();

    await db.update(projects)
        .set({ views: newViews })
        .where(eq(projects.id, id));
}