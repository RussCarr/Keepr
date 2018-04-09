using System.ComponentModel.DataAnnotations;


namespace keepr.Models
{

  public class keep
  {
    public int Id { get; set; }

    [Required]
    [MinLength(3)]
    public string Name { get; set; }
    public string Description { get; set; }

  }
}