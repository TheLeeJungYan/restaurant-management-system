interface Product {
  ID: number;
  NAME: string;
  IMG: string;
  PRICE: number;
  CATEGORY: string;
}

const products: Product[] = [
  { ID: 1, NAME: "Garlic Bread", IMG: "temp", PRICE: 5, CATEGORY: "appetizer" },
  { ID: 2, NAME: "Caesar Salad", IMG: "temp", PRICE: 8, CATEGORY: "appetizer" },
  {
    ID: 3,
    NAME: "French Onion Soup",
    IMG: "temp",
    PRICE: 7,
    CATEGORY: "appetizer",
  },
  {
    ID: 4,
    NAME: "Mozzarella Sticks",
    IMG: "temp",
    PRICE: 6,
    CATEGORY: "appetizer",
  },
  { ID: 5, NAME: "Buffalo Wings", IMG: "temp", PRICE: 9, CATEGORY: "appetizer" },

  // Main Courses
  { ID: 6, NAME: "Grilled Ribeye Steak", IMG: "temp", PRICE: 28, CATEGORY: "main" },
  { ID: 7, NAME: "BBQ Baby Back Ribs", IMG: "temp", PRICE: 25, CATEGORY: "main" },
  {
    ID: 8,
    NAME: "Chicken Alfredo Pasta",
    IMG: "temp",
    PRICE: 18,
    CATEGORY: "main",
  },
  { ID: 9, NAME: "Classic Cheeseburger", IMG: "temp", PRICE: 15, CATEGORY: "main" },
  { ID: 10, NAME: "Fish and Chips", IMG: "temp", PRICE: 14, CATEGORY: "main" },
  { ID: 11, NAME: "Margherita Pizza", IMG: "temp", PRICE: 12, CATEGORY: "main" },
  { ID: 12, NAME: "Spaghetti Carbonara", IMG: "temp", PRICE: 16, CATEGORY: "main" },
  { ID: 13, NAME: "Pan-Seared Salmon", IMG: "temp", PRICE: 22, CATEGORY: "main" },
  {
    ID: 14,
    NAME: "Grilled Chicken Caesar Wrap",
    IMG: "temp",
    PRICE: 12,
    CATEGORY: "main",
  },
  { ID: 15, NAME: "Lamb Chops", IMG: "temp", PRICE: 30, CATEGORY: "main" },

  // Sides
  { ID: 16, NAME: "Mashed Potatoes", IMG: "temp", PRICE: 5, CATEGORY: "side" },
  { ID: 17, NAME: "Steamed Vegetables", IMG: "temp", PRICE: 4, CATEGORY: "side" },
  { ID: 18, NAME: "French Fries", IMG: "temp", PRICE: 3, CATEGORY: "side" },
  { ID: 19, NAME: "Coleslaw", IMG: "temp", PRICE: 3, CATEGORY: "side" },
  { ID: 20, NAME: "Garlic Rice", IMG: "temp", PRICE: 4, CATEGORY: "side" },

  // Desserts
  {
    ID: 21,
    NAME: "Chocolate Lava Cake",
    IMG: "temp",
    PRICE: 7,
    CATEGORY: "dessert",
  },
  { ID: 22, NAME: "Tiramisu", IMG: "temp", PRICE: 8, CATEGORY: "dessert" },
  {
    ID: 23,
    NAME: "New York Cheesecake",
    IMG: "temp",
    PRICE: 8,
    CATEGORY: "dessert",
  },
  { ID: 24, NAME: "Apple Pie", IMG: "temp", PRICE: 6, CATEGORY: "dessert" },
  { ID: 25, NAME: "Ice Cream Sundae", IMG: "temp", PRICE: 5, CATEGORY: "dessert" },
  { ID: 26, NAME: "Crème Brûlée", IMG: "temp", PRICE: 9, CATEGORY: "dessert" },
  { ID: 27, NAME: "Pecan Pie", IMG: "temp", PRICE: 7, CATEGORY: "dessert" },

  // Beverages
  { ID: 28, NAME: "Coca-Cola", IMG: "temp", PRICE: 3, CATEGORY: "beverage" },
  {
    ID: 29,
    NAME: "Fresh Orange Juice",
    IMG: "temp",
    PRICE: 4,
    CATEGORY: "beverage",
  },
  { ID: 30, NAME: "Lemonade", IMG: "temp", PRICE: 3, CATEGORY: "beverage" },
  { ID: 31, NAME: "Iced Tea", IMG: "temp", PRICE: 3, CATEGORY: "beverage" },
  { ID: 32, NAME: "Espresso", IMG: "temp", PRICE: 4, CATEGORY: "beverage" },
  { ID: 33, NAME: "Cappuccino", IMG: "temp", PRICE: 5, CATEGORY: "beverage" },
  { ID: 34, NAME: "Red Wine", IMG: "temp", PRICE: 8, CATEGORY: "beverage" },
  { ID: 35, NAME: "White Wine", IMG: "temp", PRICE: 8, CATEGORY: "beverage" },
  { ID: 36, NAME: "Draft Beer", IMG: "temp", PRICE: 6, CATEGORY: "beverage" },

  // Salads
  { ID: 37, NAME: "Greek Salad", IMG: "temp", PRICE: 8, CATEGORY: "salad" },
  { ID: 38, NAME: "Caprese Salad", IMG: "temp", PRICE: 9, CATEGORY: "salad" },
  { ID: 39, NAME: "Waldorf Salad", IMG: "temp", PRICE: 10, CATEGORY: "salad" },

  // Sandwiches
  { ID: 40, NAME: "Club Sandwich", IMG: "temp", PRICE: 12, CATEGORY: "sandwich" },
  { ID: 41, NAME: "BLT Sandwich", IMG: "temp", PRICE: 10, CATEGORY: "sandwich" },
  {
    ID: 42,
    NAME: "Philly Cheesesteak",
    IMG: "temp",
    PRICE: 14,
    CATEGORY: "sandwich",
  },
  {
    ID: 43,
    NAME: "Grilled Cheese Sandwich",
    IMG: "temp",
    PRICE: 8,
    CATEGORY: "sandwich",
  },

  // Seafood
  {
    ID: 44,
    NAME: "Grilled Shrimp Skewers",
    IMG: "temp",
    PRICE: 20,
    CATEGORY: "seafood",
  },
  { ID: 45, NAME: "Crab Cakes", IMG: "temp", PRICE: 18, CATEGORY: "seafood" },
  { ID: 46, NAME: "Lobster Roll", IMG: "temp", PRICE: 24, CATEGORY: "seafood" },

  // Pizza
  { ID: 47, NAME: "Pepperoni Pizza", IMG: "temp", PRICE: 12, CATEGORY: "pizza" },
  { ID: 48, NAME: "Hawaiian Pizza", IMG: "temp", PRICE: 13, CATEGORY: "pizza" },
  { ID: 49, NAME: "BBQ Chicken Pizza", IMG: "temp", PRICE: 14, CATEGORY: "pizza" },

  // Pasta
  { ID: 50, NAME: "Lasagna", IMG: "temp", PRICE: 18, CATEGORY: "pasta" },
  { ID: 51, NAME: "Penne Arrabbiata", IMG: "temp", PRICE: 14, CATEGORY: "pasta" },
  { ID: 52, NAME: "Fettuccine Alfredo", IMG: "temp", PRICE: 16, CATEGORY: "pasta" },

  // Breakfast
  { ID: 53, NAME: "Pancakes", IMG: "temp", PRICE: 10, CATEGORY: "breakfast" },
  { ID: 54, NAME: "Omelette", IMG: "temp", PRICE: 12, CATEGORY: "breakfast" },
  { ID: 55, NAME: "French Toast", IMG: "temp", PRICE: 11, CATEGORY: "breakfast" },

  // Burgers
  {
    ID: 56,
    NAME: "Bacon Cheeseburger",
    IMG: "temp",
    PRICE: 16,
    CATEGORY: "burger",
  },
  { ID: 57, NAME: "Veggie Burger", IMG: "temp", PRICE: 14, CATEGORY: "burger" },
  {
    ID: 58,
    NAME: "Mushroom Swiss Burger",
    IMG: "temp",
    PRICE: 17,
    CATEGORY: "burger",
  },

  // Drinks (Alcoholic)
  { ID: 59, NAME: "Whiskey Sour", IMG: "temp", PRICE: 10, CATEGORY: "drink" },
  { ID: 60, NAME: "Margarita", IMG: "temp", PRICE: 12, CATEGORY: "drink" }
];


 
export default products;
