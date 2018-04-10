using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
  [Route("api/[controller]")]
  public class VaultsController : Controller
  {
    private readonly vaultRepository _repo;
    public VaultsController(vaultRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public IEnumerable<vault> Get()
    {
      return _repo.Getvaults();
    }

    [HttpGet("{id}")]
    public vault Get(int id)
    {
      return _repo.GetById(id);
    }

    [HttpPost]
    public vault Addvault([FromBody]vault vault)
    {
      if (ModelState.IsValid)
      {
        return _repo.Add(vault);
      }
      return null;
    }

    [HttpPut("{id}")]
    public vault Put(int id, [FromBody]vault vault)
    {
      if (ModelState.IsValid)
      {
        return _repo.GetOneByIdAndUpdate(id, vault);
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