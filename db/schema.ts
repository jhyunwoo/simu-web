import { pgTable, integer } from "drizzle-orm/pg-core"

export const newsTable = pgTable('news', {
    id: integer()
});