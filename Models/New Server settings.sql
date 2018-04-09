-- CREATE TABLE users (
--     id VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     username VARCHAR(20) NOT NULL,
--     PRIMARY KEY (id),
--     UNIQUE KEY email (email)
-- );

-- CREATE TABLE vaults (
--     id int NOT NULL AUTO_INCREMENT,
--     description VARCHAR(255) NOT NULL,
--     name VARCHAR(200) NOT NULL,
--     userId VARCHAR(255) NOT NULL,
--     INDEX userId (userId),
--     FOREIGN KEY (userId)
--         REFERENCES users(id)
--         ON DELETE CASCADE,  
--     PRIMARY KEY (id)
-- );

CREATE TABLE keeps (
    id int NOT NULL AUTO_INCREMENT,
    img BLOB NOT NULL,
    link VARCHAR(4000) NOT NULL,
    tags VARCHAR(255) NOT NULL,
    title VARCHAR(200) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    INDEX userId (userId),
    FOREIGN KEY (userId)
        REFERENCES users(id)
        ON DELETE CASCADE,  
    PRIMARY KEY (id)
);

CREATE TABLE vaultkeeps (
    id int NOT NULL AUTO_INCREMENT,
    keepId int NOT NULL,
    userId VARCHAR(255) NOT NULL,
    vaultId int NOT NULL,

    PRIMARY KEY (id),
    INDEX (vaultId, keepId),
    INDEX (userId),

    FOREIGN KEY (userId)
        REFERENCES users(id)
        ON DELETE CASCADE,

    FOREIGN KEY (vaultId)
        REFERENCES vaults(id)
        ON DELETE CASCADE,

    FOREIGN KEY (keepId)
        REFERENCES keeps(id)
        ON DELETE CASCADE
)

-- SELECT * FROM users;
-- DROP TABLE keeps;