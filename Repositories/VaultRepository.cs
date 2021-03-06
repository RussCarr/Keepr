using System;
using System.Collections.Generic;
using System.Data;
using keepr.Models;
using Dapper;

namespace keepr.Repositories
{
  public class vaultRepository
  {

    private readonly IDbConnection _db;

    public vaultRepository(IDbConnection db)
    {
      _db = db;
    }

    //CREATEONE
    public vault Add(vault vault)
    {
      int id = _db.ExecuteScalar<int>($@"
      INSERT INTO vaults (
        description,
        name,
        userId
      ) VALUES (@Description, @Name, @Userid)", vault);
      vault.Id = id;
      return vault;
    }

    // READ: FINDONE FINDALL FINDMANY
    // public vault GetById(string id)
    // {
    //   return _db.QueryFirstOrDefault<vault>($@"
    //     SELECT * FROM vaults WHERE userid = '@id'
    //     ");
    // }

    public IEnumerable<vault> Getvaults(string id)
    {
      return _db.Query<vault>($@"SELECT * FROM vaults WHERE userid = '{id}'");
    }

    public vault GetOneByIdAndUpdate(int id, vault vault)
    {
      return _db.QueryFirstOrDefault<vault>($@"
                UPDATE vaults SET  
                   Description = @Description,
                    Name = @Name
                WHERE Id = {id};
                SELECT * FROM vaults WHERE id = {id};", vault);
    }

    public string FindByIdAndRemove(int id)
    {
      var success = _db.Execute(@"
                DELETE FROM vaults WHERE id = @id
            ",new {id = id});
      return success > 0 ? "success" : "umm that didnt work";
    }

    //STOREONE
    public stored AddToVault(stored stored)
    {
      int id = _db.ExecuteScalar<int>($@"
      INSERT INTO vaultkeeps (
        keepId,
        userId,
        vaultId
      ) VALUES (@Keepid, @Userid, @Vaultid)", stored);
      stored.Id = id;
      return stored;
    }

  }
}