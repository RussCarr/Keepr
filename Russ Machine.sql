-- CREATE TABLE burgers (
--   id int NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   description VARCHAR(255),
--   price DOUBLE(40, 2) NOT NULL,
--   kcal int,
--   PRIMARY KEY (id)
-- );-- 

-- CREATE TABLE users (
--     id int NOT NULL AUTO_INCREMENT,
--     username VARCHAR(20) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id),
--     UNIQUE KEY email (email)
-- );

-- DROP TABLE users;

CREATE TABLE users (
  id VARCHAR(255) NOT NULL,
  username VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
)