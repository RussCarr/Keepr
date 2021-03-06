using System.ComponentModel.DataAnnotations;


namespace keepr.Models
{

  public class keep
  {

    public int Id { get; set; }
    public int CountShare { get; set; } = 0;
    public int Shared { get; set; } = 0;
    public int CountKeep { get; set; } = 0;
    public int CountView { get; set; } = 0;
    [Required]
    public string Img { get; set; }
    [Required]
    public string Link { get; set; }
    [Required]
    public string Tags { get; set; }
    [Required]
    [MinLength(3)]
    public string Title { get; set; }
    [Required]
    public string UserId { get; set; }

  }


}