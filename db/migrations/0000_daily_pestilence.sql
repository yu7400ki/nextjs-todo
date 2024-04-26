CREATE TABLE `todo` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`deadline` text NOT NULL,
	`completed` integer NOT NULL
);
