-- SELECT keepId 
-- FROM vaultkeeps 
-- WHERE userId = "0c827b89-223b-4894-ac9f-b758ab8af012"
-- WHERE userId = ANY (SELECT vaultId)

-- SELECT SupplierID
-- FROM Products
-- WHERE CategoryID = ANY (SELECT Unit);
-- SELECT keepid FROM vaultkeeps WHERE vaultid = 8
-- ELECT keepid
-- FROM vaultkeeps
-- WHERE vaultid = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);
-- S


SELECT
 keeps.link,
 keeps.tags,
 keeps.title,
 keeps.userId,
 keeps.id,
 keeps.img
FROM vaultkeeps 
JOIN users ON users.id = vaultkeeps.userId
JOIN keeps ON keeps.id = vaultkeeps.keepId
WHERE vaultid = 8