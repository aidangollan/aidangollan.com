import { db } from "~/server/db";
import { Profile } from "~/types";

export async function getProfile() {
    const profile: Profile | undefined = await db.query.profiles.findFirst();

    return profile;
}