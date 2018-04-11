
using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
  public class stored
  {
    public int Id { get; set; }
    [Required]
    public int KeepId { get; set; }
    [Required]
    public string UserId { get; set; }
    [Required]
    public int VaultId { get; set; }
  }

  public class storedKeep
  {
    public string Img { get; set; }

    public string Link { get; set; }

    public string Tags { get; set; }

    public string Title { get; set; }
    public int Shared { get; set; }
  }

}

