CREATE TABLE users (
    id VARCHAR(255) NOT NULL,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);

CREATE TABLE vaults (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    INDEX userId (userId),
    FOREIGN KEY (userId)
        REFERENCES users(id)
        ON DELETE CASCADE,  
    PRIMARY KEY (id)
);

CREATE TABLE keeps (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    INDEX userId (userId),
    FOREIGN KEY (userId)
        REFERENCES users(id)
        ON DELETE CASCADE,  
    PRIMARY KEY (id)
);

CREATE TABLE vaultkeeps (
    id int NOT NULL AUTO_INCREMENT,
    vaultId int NOT NULL,
    keepId int NOT NULL,
    userId VARCHAR(255) NOT NULL,

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
