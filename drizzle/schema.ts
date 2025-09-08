import { pgTable, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const news = pgTable("news", {
	id: integer(),
});
