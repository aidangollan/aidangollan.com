import { db } from "../db";

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