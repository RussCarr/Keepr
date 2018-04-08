using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace keepr
{
  [Route("api/[controller]")]
  public class KeepsController : Controller
  {
    private readonly keepRepository _repo;
    public KeepsController(keepRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public IEnumerable<keep> Get()
    {
      return _repo.Getkeeps();
    }

    [HttpGet("{id}")]
    public keep Get(int id)
    {
      return _repo.GetById(id);
    }

    [HttpPost]
    public keep Addkeep([FromBody]keep keep)
    {
      if (ModelState.IsValid)
      {
        return _repo.Add(keep);
      }
      return null;
    }

    [HttpPut("{id}")]
    public keep Put(int id, [FromBody]keep keep)
    {
      if (ModelState.IsValid)
      {
        return _repo.GetOneByIdAndUpdate(id, keep);
      }
      return null;
    }

    [HttpDelete("{id}")]
    public string Delete(int id)
    {
      Console.WriteLine("here @ Delete");
      return _repo.FindByIdAndRemove(id);
    }

  }
}