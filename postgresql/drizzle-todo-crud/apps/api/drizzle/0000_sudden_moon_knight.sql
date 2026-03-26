CREATE TABLE "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" text NOT NULL,
	"description" text NOT NULL,
	"isComplete" boolean DEFAULT false
);
