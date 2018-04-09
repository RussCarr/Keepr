using System.ComponentModel.DataAnnotations;


namespace keepr.Models
{

  public class keep
  {
  
    public int Id { get; set; }

    [Required]
    public string Img { get; set; }
    [Required]
    public string Link { get; set; }

    public string Tags { get; set; }
    [Required]
    [MinLength(3)]
    public string Title { get; set; }
    [Required]
    public string UserId { get; set; }

  }
}