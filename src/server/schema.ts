import {
  mysqlTable,
  int,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/mysql-core";

/** USERS */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  role: varchar("role", { length: 20 }).notNull().default("tenant"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/** ROOMS */
export const rooms = mysqlTable("rooms", {
  id: int("id").autoincrement().primaryKey(),
  ownerId: int("owner_id").notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  description: text("description"),
  pricePerHour: int("price_per_hour").notNull(),
  capacity: int("capacity").notNull().default(1),
  address: varchar("address", { length: 255 }),
  city: varchar("city", { length: 100 }),
  lat: varchar("lat", { length: 50 }),
  lng: varchar("lng", { length: 50 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/** BOOKINGS */
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  roomId: int("room_id").notNull(),
  userId: int("user_id").notNull(),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/** PAYMENTS */
export const payments = mysqlTable("payments", {
  id: int("id").autoincrement().primaryKey(),
  bookingId: int("booking_id").notNull(),
  amount: int("amount").notNull(),
  currency: varchar("currency", { length: 10 }).notNull().default("NOK"),
  provider: varchar("provider", { length: 50 }).notNull().default("stub"),
  paid: boolean("paid").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
