// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `jmnuf-page_${name}`);

type Branded<T, U extends string> = T & { __branding__: U }

type PostID = Branded<number, "post_id">;

export const posts = createTable(
  "post",
  {
    id: int("id", { mode: "number" }).$type<PostID>().primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

type ViewsID = Branded<number, "views_id">;

export const views = createTable(
    "page_views",
    {
	id: int("id", { mode: "number" }).$type<ViewsID>().primaryKey({ autoIncrement: true }),
	page: text("page").notNull(),
	count: int("count").default(0),
    }
);
