-- CREATE DATABASE "Care_From_The_Hart"

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR(100) NOT NULL,
	"isAdmin" BOOLEAN NOT NULL DEFAULT 'false'
);

CREATE TABLE "articles" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(500) NOT NULL,
	"content" VARCHAR(5000) NOT NULL,
	"date" DATE NOT NULL
);

CREATE TABLE "comments" (
	"id" SERIAL PRIMARY KEY,
	"articles_id" INT REFERENCES "articles" NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL,
	"comment" VARCHAR(5000) NOT NULL
);

CREATE TABLE "booking" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"date" DATE NOT NULL,
	"request" VARCHAR(5000) NOT NULL,
	"isApproved" BOOLEAN NOT NULL DEFAULT 'false'	
);





--ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("articles_id") REFERENCES "articles"("id");
--ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("users_id") REFERENCES "users"("id");
--ALTER TABLE "booking" ADD CONSTRAINT "booking_fk0" FOREIGN KEY ("users_id") REFERENCES "users"("id");

--starter users
INSERT INTO "users" ("username","password","isAdmin")
VALUES ('sean','greece','yes');


-- starter comments 
INSERT INTO "comments" ("articles_id", "users_id", "comment")
VALUES (2,1, 'I loved this artile it was very insightful');


-- starter articles 
INSERT INTO "articles" ("title","content","date")
VALUES ('Beginners', 'You know, beginners in SQL are not the only ones making mistakes in the code. It is good practice to avoid typical mistakes at the start of learning SQL. The author of this article presents 8 basic rules to help you write better code, which saves a lot of frustration, especially for a novice SQL programmer. You find out how to write code, why is it worth it to make backups, and where to find solutions to hard problems.', '04,17,2019');

-- starter booking
INSERT INTO "booking" ("users_id","date","request","isApproved")
VALUES (1, '04/17/2023', 'I would love to have you come do a presentation in Las Vegas', 'yes');