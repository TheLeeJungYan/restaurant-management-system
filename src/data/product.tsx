interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  type: string;
}

const products: Product[] = [
  // Appetizers
  { id: 1, name: "Garlic Bread", img: "temp", price: 5, type: "appetizer" },
  { id: 2, name: "Caesar Salad", img: "temp", price: 8, type: "appetizer" },
  {
    id: 3,
    name: "French Onion Soup",
    img: "temp",
    price: 7,
    type: "appetizer",
  },
  {
    id: 4,
    name: "Mozzarella Sticks",
    img: "temp",
    price: 6,
    type: "appetizer",
  },
  { id: 5, name: "Buffalo Wings", img: "temp", price: 9, type: "appetizer" },

  // Main Courses
  { id: 6, name: "Grilled Ribeye Steak", img: "temp", price: 28, type: "main" },
  { id: 7, name: "BBQ Baby Back Ribs", img: "temp", price: 25, type: "main" },
  {
    id: 8,
    name: "Chicken Alfredo Pasta",
    img: "temp",
    price: 18,
    type: "main",
  },
  { id: 9, name: "Classic Cheeseburger", img: "temp", price: 15, type: "main" },
  { id: 10, name: "Fish and Chips", img: "temp", price: 14, type: "main" },
  { id: 11, name: "Margherita Pizza", img: "temp", price: 12, type: "main" },
  { id: 12, name: "Spaghetti Carbonara", img: "temp", price: 16, type: "main" },
  { id: 13, name: "Pan-Seared Salmon", img: "temp", price: 22, type: "main" },
  {
    id: 14,
    name: "Grilled Chicken Caesar Wrap",
    img: "temp",
    price: 12,
    type: "main",
  },
  { id: 15, name: "Lamb Chops", img: "temp", price: 30, type: "main" },

  // Sides
  { id: 16, name: "Mashed Potatoes", img: "temp", price: 5, type: "side" },
  { id: 17, name: "Steamed Vegetables", img: "temp", price: 4, type: "side" },
  { id: 18, name: "French Fries", img: "temp", price: 3, type: "side" },
  { id: 19, name: "Coleslaw", img: "temp", price: 3, type: "side" },
  { id: 20, name: "Garlic Rice", img: "temp", price: 4, type: "side" },

  // Desserts
  {
    id: 21,
    name: "Chocolate Lava Cake",
    img: "temp",
    price: 7,
    type: "dessert",
  },
  { id: 22, name: "Tiramisu", img: "temp", price: 8, type: "dessert" },
  {
    id: 23,
    name: "New York Cheesecake",
    img: "temp",
    price: 8,
    type: "dessert",
  },
  { id: 24, name: "Apple Pie", img: "temp", price: 6, type: "dessert" },
  { id: 25, name: "Ice Cream Sundae", img: "temp", price: 5, type: "dessert" },
  { id: 26, name: "Crème Brûlée", img: "temp", price: 9, type: "dessert" },
  { id: 27, name: "Pecan Pie", img: "temp", price: 7, type: "dessert" },

  // Beverages
  { id: 28, name: "Coca-Cola", img: "temp", price: 3, type: "beverage" },
  {
    id: 29,
    name: "Fresh Orange Juice",
    img: "temp",
    price: 4,
    type: "beverage",
  },
  { id: 30, name: "Lemonade", img: "temp", price: 3, type: "beverage" },
  { id: 31, name: "Iced Tea", img: "temp", price: 3, type: "beverage" },
  { id: 32, name: "Espresso", img: "temp", price: 4, type: "beverage" },
  { id: 33, name: "Cappuccino", img: "temp", price: 5, type: "beverage" },
  { id: 34, name: "Red Wine", img: "temp", price: 8, type: "beverage" },
  { id: 35, name: "White Wine", img: "temp", price: 8, type: "beverage" },
  { id: 36, name: "Draft Beer", img: "temp", price: 6, type: "beverage" },

  // Salads
  { id: 37, name: "Greek Salad", img: "temp", price: 8, type: "salad" },
  { id: 38, name: "Caprese Salad", img: "temp", price: 9, type: "salad" },
  { id: 39, name: "Waldorf Salad", img: "temp", price: 10, type: "salad" },

  // Sandwiches
  { id: 40, name: "Club Sandwich", img: "temp", price: 12, type: "sandwich" },
  { id: 41, name: "BLT Sandwich", img: "temp", price: 10, type: "sandwich" },
  {
    id: 42,
    name: "Philly Cheesesteak",
    img: "temp",
    price: 14,
    type: "sandwich",
  },
  {
    id: 43,
    name: "Grilled Cheese Sandwich",
    img: "temp",
    price: 8,
    type: "sandwich",
  },

  // Seafood
  {
    id: 44,
    name: "Grilled Shrimp Skewers",
    img: "temp",
    price: 20,
    type: "seafood",
  },
  { id: 45, name: "Crab Cakes", img: "temp", price: 18, type: "seafood" },
  { id: 46, name: "Lobster Roll", img: "temp", price: 24, type: "seafood" },

  // Pizza
  { id: 47, name: "Pepperoni Pizza", img: "temp", price: 12, type: "pizza" },
  { id: 48, name: "Hawaiian Pizza", img: "temp", price: 13, type: "pizza" },
  { id: 49, name: "BBQ Chicken Pizza", img: "temp", price: 14, type: "pizza" },

  // Pasta
  { id: 50, name: "Lasagna", img: "temp", price: 18, type: "pasta" },
  { id: 51, name: "Penne Arrabbiata", img: "temp", price: 14, type: "pasta" },
  { id: 52, name: "Fettuccine Alfredo", img: "temp", price: 16, type: "pasta" },

  // Breakfast
  { id: 53, name: "Pancakes", img: "temp", price: 10, type: "breakfast" },
  { id: 54, name: "Omelette", img: "temp", price: 12, type: "breakfast" },
  { id: 55, name: "French Toast", img: "temp", price: 11, type: "breakfast" },

  // Burgers
  {
    id: 56,
    name: "Bacon Cheeseburger",
    img: "temp",
    price: 16,
    type: "burger",
  },
  { id: 57, name: "Veggie Burger", img: "temp", price: 14, type: "burger" },
  {
    id: 58,
    name: "Mushroom Swiss Burger",
    img: "temp",
    price: 17,
    type: "burger",
  },

  // Drinks (Alcoholic)
  { id: 59, name: "Whiskey Sour", img: "temp", price: 10, type: "drink" },
  { id: 60, name: "Margarita", img: "temp", price: 12, type: "drink" },
];

export default products;
