
using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{

  public class vault
  {
    public int Id { get; set; }
    [Required]
    [MinLength(3)]

    public string Name { get; set; }
    [Required]

    public string Description { get; set; }
    [Required]
    public string UserId { get; set; }

   }
}
