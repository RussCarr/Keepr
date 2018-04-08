-- RELATIONSHIPS
-- CREATE TABLE orders (
--   id VARCHAR(255) NOT NULL,
--   userId VARCHAR(255) NOT NULL,
--   price DOUBLE(40, 2) NOT NULL,
--   INDEX userId (userId),
--   FOREIGN KEY (userId)
--     REFERENCES users(id)
--     ON DELETE CASCADE,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE orderdrinks (
--   id VARCHAR(255) NOT NULL,
--   orderId VARCHAR(255) NOT NULL,
--   drinkId int NOT NULL,
--   userId VARCHAR(255) NOT NULL,
--   quantity int NOT NULL,

--   PRIMARY KEY (id),
--   INDEX (orderId, drinkId),
--   INDEX (userId),

--   FOREIGN KEY (userId)
--     REFERENCES users(id)
--     ON DELETE CASCADE,

--   FOREIGN KEY (orderId)
--     REFERENCES orders(id)
--     ON DELETE CASCADE,

--   FOREIGN KEY (drinkId)
--     REFERENCES drinks(id)
--     ON DELETE CASCADE

-- );

-- INSERT INTO orders (
--   id,
--   userId,
--   price
-- ) VALUES (
--   "004",
--   "693310ce-2d82-4507-846d-e507328ee1fc",
--   33.99
-- );

-- SELECT * FROM burgers

-- INSERT INTO orderdrinks (
--   id,
--   userId,
--   orderId,
--   drinkId,
--   quantity
-- ) VALUES (
--   "001",
--   "13683c3b-b608-469e-ba93-7a3fb079de65",
--   "010",
--   1,
--   1
-- );


-- get all burgers where user id = 1
-- SELECT
--   u.name username,
--   u.email,
--   ob.burgerId,
--   ob.quantity,
--   ob.orderId,
--   b.name,
--   b.kcal
-- FROM orderburgers ob
-- JOIN users u ON u.id = ob.userId
-- JOIN burgers b ON b.id = ob.burgerId
-- WHERE userId = "13683c3b-b608-469e-ba93-7a3fb079de65";

-- SELECT * FROM orderburgers

-- DELETE FROM users WHERE id = "a38cd655-ccfc-4b53-a11c-225aee7799b5"



-- GET FROM DB_TABLE
SELECT * FROM users;

-- SELECT * FROM burgers;

