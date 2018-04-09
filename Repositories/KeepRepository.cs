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
        username,
        description,
        price,
        kcal
      ) VALUES (@Username, @Description, @Price, @KCal)", keep);
      keep.Id = id;
      return keep;
    }

    //READ: FINDONE FINDALL FINDMANY
    public keep GetById(int id)
    {
      return _db.QueryFirstOrDefault<keep>(@"
        SELECT * FROM keeps WHERE id = @id
      ", id);
    }

    public IEnumerable<keep> Getkeeps()
    {
      return _db.Query<keep>("SELECT * FROM keeps");
    }

    public keep GetOneByIdAndUpdate(int id, keep keep)
    {
      return _db.QueryFirstOrDefault<keep>($@"
                UPDATE keeps SET  
                    Name = @Name,
                    Description = @Description,
                    Price = @Price
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



  }
}