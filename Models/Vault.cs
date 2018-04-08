using keepr.Interfaces;
namespace keepr.Models
{

  public class Drink : IMenuItem
  {
    public string Name { get; set; }
    public string Description { get; set; }
    public double Price { get; set; }
    public string Ingredients { get; set; }
    public int KCal { get; set; }

    public Drink(string name, string desc, double price, string ingredients)
    {
      Name = name;
      Description = desc;
      Price = price;
      Ingredients = ingredients;
    }
  }
}
