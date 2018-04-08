using System.ComponentModel.DataAnnotations;
using keepr.Interfaces;

namespace keepr.Models
{

  public class keep : IMenuItem
  {
    public int Id { get; set; }
    
    [Required]
    [MinLength(3)]
    public string Name { get; set; }
    public string Description { get; set; }
    [Required]
    public double Price { get; set; }
    public int KCal { get; set; }
  }

}