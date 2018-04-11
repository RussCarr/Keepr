using System;
using System.Collections.Generic;
using System.Data;
using keepr.Models;
using Dapper;

namespace keepr.Repositories
{
  public class keepRepository
  {

    private readonly IDbConnection _db;

    public keepRepository(IDbConnection db)
    {
      _db = db;
    }

    //CREATEONE
    public keep Add(keep keep)
    {
      int id = _db.ExecuteScalar<int>($@"
      INSERT INTO keeps (
        img,
        link,
        tags,
        title,
        userId,
        CountShare,
        CountKeep,
        CountView,
        Shared
      ) VALUES (@Img, @Link, @Tags, @Title,@Userid,@CountShare,@CountKeep,@CountView,@Shared)", keep);
      keep.Id = id;
      return keep;
    }

    //READ: FINDONE FINDALL FINDMANY
    public keep GetById(int id)
    {
      return _db.QueryFirstOrDefault<keep>($@"
        SELECT * FROM keeps WHERE userid = {id}
      ");
    }

  public IEnumerable<keep> Getkeeps(int id)
    {
      return _db.Query<keep>($@"SELECT * FROM keeps WHERE userid = {id}");
    }


    public IEnumerable<keep> Getkeeps()
    {
      return _db.Query<keep>("SELECT * FROM keeps");
    }

    public keep GetOneByIdAndUpdate(int id, keep keep)
    {
      return _db.QueryFirstOrDefault<keep>($@"
                UPDATE keeps SET  
                    Img = @Img,
                    Link = @Link,
                    Tags = @Tags,
                    Title = @Title,
                    CountShare = @CountShare,
                    CountKeep = @CountKeep,
                    CountView = @CountView,
                    Shared = @Shared
                WHERE Id = {id};
                SELECT * FROM keeps WHERE id = {id};", keep);
    }

  

    
    public string FindByIdAndRemove(int id)
    {
      var success = _db.Execute(@"
                DELETE FROM keeps WHERE id = @id
            ",new {id = id});
      return success > 0 ? "success" : "umm that didnt work";
    }

//  //READ: FINDONE FINDALL FINDMANY
//       public IEnumerable<keep> GetBySearch()
//     {
//       return _db.Query<keep>("SELECT keepId FROM vaultkeeps");
//     }
 
    // public storedKeep GetBySearch(int id)
    // {
    //   return _db.QueryFirstOrDefault<storedKeep>(@"
    //     SELECT keepid FROM vaultkeeps WHERE vaultid = @id
    //   ", id);
    // }

  public IEnumerable<storedKeep> GetBySearch(int id)
    {
      return _db.Query<storedKeep>($@"
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
          WHERE vaultid = {id}");
    }

public IEnumerable<storedKeep> GetSharedKeeps()
    {
      return _db.Query<storedKeep>($@"
        SELECT * FROM keeps
          WHERE shared = 1");
    }


  }
}