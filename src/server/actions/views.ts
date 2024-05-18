import { db } from "~/server/db";
import { views } from "../db/schema";

export async function getViews() {
    const views = await db.query.views.findFirst();

    return views?.views ?? 0;
}

export async function incrementViews() {
    const existingViews = await db.query.views.findFirst();

    if (!existingViews) {
        return;
    }

    const newViews = (Number(existingViews.views ?? 0) + 1).toString();

    await db.update(views).set({ views: newViews });
}