DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Events;
CREATE TABLE Users(
	ID INTEGER PRIMARY KEY AUTOINCREMENT,
	username TEXT NOT NULL,
	password TEXT NOT NULL,
	blockedBy TEXT DEFAULT "[]",
	blocked TEXT DEFAULT "[]",
    	invited TEXT DEFAULT "[]",
    	accepted TEXT DEFAULT "[]"
);
INSERT INTO Users('username', 'password') VALUES
  ('tommy', 'data2'),
  ('hello', 'data2'),
  ('testBlocker', 'data2');

INSERT INTO Users('username', 'password', 'blockedBy', 'blocked') VALUES
 ('testBlocker', 'data2', '["filler"]', '["filler"]');
  
CREATE Table Events(
	ID INTEGER PRIMARY KEY AUTOINCREMENT,
	eventname TEXT NOT NULL,
	hostname TEXT NOT NULL,
	date TEXT NOT NULL,
	invitees TEXT NOT NULL,
	accepted TEXT NOT NULL,
	stage TEXT NOT NULL
);

