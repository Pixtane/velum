import { date, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
    id: serial('id').primaryKey(),
    username: text('username').notNull().unique(),
    name: text('name'),
    birthday: date('birthday'),
    email: text('email').notNull().unique(),
    avatar_url: text('avatar_url'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export const postsTable = pgTable('posts_table', {
    id: serial('id').primaryKey(),
    title: text('title'),
    image_url: text('image_url').notNull(),
    userId: integer('user_id')
        .references(() => usersTable.id, { onDelete: 'set null' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
