import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("todos").del();

    // Inserts seed entries
    await knex("todos").insert([
        {
            id: 1,
            title: "Learn TypeScript",
            description: "Learn TypeScript with Node.js and Express",
            completed: false,
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            id: 2,
            title: "Learn Knex",
            description: "Learn Knex with Node.js and Express",
            completed: false,
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            id: 3,
            title: "Learn Objection.js",
            description: "Learn Objection.js with Node.js and Express",
            completed: true,
            created_at: new Date(),
            updated_at: new Date(),
        },
    ]);
}
