
namespace keepr.Models
{

  public class Vault 
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
 
    public Vault(string name, string desc)
    {
      Name = name;
      Description = desc;
    
    }
  }
}
