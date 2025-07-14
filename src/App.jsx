import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from './Pages/Home'
import ProductsPage from "./Pages/Products";
import CartPage from "./Pages/Cart";
import "./cssfiles/basic.css";
import "./cssfiles/products.css"
import "./cssfiles/MinitureNav.css"
function App() {
const items = [
  // Beverages
  { name: "Water Bottle", price: 0.99, stock: 15, image: viteLogo, category: "Beverages" },
  { name: "Orange Juice", price: 2.5, stock: 10, image: viteLogo, category: "Beverages" },
  { name: "Green Tea", price: 1.75, stock: 8, image: viteLogo, category: "Beverages" },
  { name: "Soda Can", price: 0.85, stock: 0, image: viteLogo, category: "Beverages" },
  { name: "Apple Juice", price: 2.2, stock: 5, image: viteLogo, category: "Beverages" },
  { name: "Iced Coffee", price: 3.0, stock: 7, image: viteLogo, category: "Beverages" },
  { name: "Energy Drink", price: 2.99, stock: 4, image: viteLogo, category: "Beverages" },
  { name: "Lemonade", price: 1.95, stock: 6, image: viteLogo, category: "Beverages" },
  { name: "Coconut Water", price: 2.75, stock: 9, image: viteLogo, category: "Beverages" },
  { name: "Cold Brew", price: 3.5, stock: 0, image: viteLogo, category: "Beverages" },

  // Snacks
  { name: "Potato Chips", price: 1.99, stock: 12, image: viteLogo, category: "Snacks" },
  { name: "Chocolate Bar", price: 1.2, stock: 7, image: viteLogo, category: "Snacks" },
  { name: "Granola Bar", price: 0.99, stock: 10, image: viteLogo, category: "Snacks" },
  { name: "Trail Mix", price: 2.1, stock: 4, image: viteLogo, category: "Snacks" },
  { name: "Pretzels", price: 1.45, stock: 8, image: viteLogo, category: "Snacks" },
  { name: "Fruit Snacks", price: 0.89, stock: 6, image: viteLogo, category: "Snacks" },
  { name: "Popcorn", price: 1.25, stock: 0, image: viteLogo, category: "Snacks" },
  { name: "Nuts Mix", price: 3.49, stock: 3, image: viteLogo, category: "Snacks" },
  { name: "Cheese Crackers", price: 1.99, stock: 5, image: viteLogo, category: "Snacks" },
  { name: "Rice Cakes", price: 1.1, stock: 2, image: viteLogo, category: "Snacks" },
  
  { name: "Toothpaste", price: 2.75, stock: 8, image: viteLogo, category: "Personal Care" },
{ name: "Shampoo", price: 3.99, stock: 5, image: viteLogo, category: "Personal Care" },
{ name: "Body Wash", price: 4.25, stock: 3, image: viteLogo, category: "Personal Care" },
{ name: "Deodorant", price: 2.9, stock: 6, image: viteLogo, category: "Personal Care" },
{ name: "Hand Soap", price: 1.5, stock: 10, image: viteLogo, category: "Personal Care" },
{ name: "Face Wash", price: 3.2, stock: 4, image: viteLogo, category: "Personal Care" },
{ name: "Toothbrush", price: 1.75, stock: 7, image: viteLogo, category: "Personal Care" },
{ name: "Lotion", price: 2.95, stock: 0, image: viteLogo, category: "Personal Care" },
{ name: "Hair Gel", price: 3.49, stock: 2, image: viteLogo, category: "Personal Care" },
{ name: "Nail Clipper", price: 1.2, stock: 9, image: viteLogo, category: "Personal Care" },

{ name: "Toilet Paper (4 rolls)", price: 3.49, stock: 6, image: viteLogo, category: "Household" },
{ name: "Dish Soap", price: 2.1, stock: 4, image: viteLogo, category: "Household" },
{ name: "Laundry Detergent", price: 5.99, stock: 2, image: viteLogo, category: "Household" },
{ name: "Glass Cleaner", price: 3.5, stock: 3, image: viteLogo, category: "Household" },
{ name: "Sponges (Pack)", price: 1.99, stock: 8, image: viteLogo, category: "Household" },
{ name: "Trash Bags", price: 4.25, stock: 5, image: viteLogo, category: "Household" },
{ name: "Paper Towels", price: 2.75, stock: 0, image: viteLogo, category: "Household" },
{ name: "All-Purpose Cleaner", price: 3.9, stock: 6, image: viteLogo, category: "Household" },
{ name: "Floor Cleaner", price: 4.75, stock: 1, image: viteLogo, category: "Household" },
{ name: "Bleach", price: 2.5, stock: 7, image: viteLogo, category: "Household" },

{ name: "Spaghetti", price: 1.15, stock: 10, image: viteLogo, category: "Pantry" },
{ name: "Canned Beans", price: 0.99, stock: 8, image: viteLogo, category: "Pantry" },
{ name: "Peanut Butter", price: 2.75, stock: 5, image: viteLogo, category: "Pantry" },
{ name: "Tomato Paste", price: 1.5, stock: 4, image: viteLogo, category: "Pantry" },
{ name: "Olive Oil", price: 4.25, stock: 6, image: viteLogo, category: "Pantry" },
{ name: "Rice (1kg)", price: 2.0, stock: 7, image: viteLogo, category: "Pantry" },
{ name: "Cereal Box", price: 3.5, stock: 2, image: viteLogo, category: "Pantry" },
{ name: "Baking Powder", price: 0.85, stock: 3, image: viteLogo, category: "Pantry" },
{ name: "Sugar (1kg)", price: 1.75, stock: 0, image: viteLogo, category: "Pantry" },
{ name: "Flour (1kg)", price: 1.55, stock: 9, image: viteLogo, category: "Pantry" },

  // Dairy
  { name: "Milk (1L)", price: 1.5, stock: 10, image: viteLogo, category: "Dairy" },
  { name: "Cheddar Cheese", price: 2.99, stock: 3, image: viteLogo, category: "Dairy" },
  { name: "Yogurt Cup", price: 0.89, stock: 12, image: viteLogo, category: "Dairy" },
  { name: "Butter", price: 2.75, stock: 7, image: viteLogo, category: "Dairy" },
  { name: "Cream Cheese", price: 1.95, stock: 5, image: viteLogo, category: "Dairy" },
  { name: "Mozzarella", price: 3.25, stock: 9, image: viteLogo, category: "Dairy" },
  { name: "Greek Yogurt", price: 1.5, stock: 0, image: viteLogo, category: "Dairy" },
  { name: "Sour Cream", price: 1.25, stock: 4, image: viteLogo, category: "Dairy" },
  { name: "Cottage Cheese", price: 2.1, stock: 6, image: viteLogo, category: "Dairy" },
  { name: "Whipping Cream", price: 2.6, stock: 1, image: viteLogo, category: "Dairy" },

  // Produce
  { name: "Bananas (1kg)", price: 1.1, stock: 10, image: viteLogo, category: "Produce" },
  { name: "Tomatoes (1kg)", price: 1.8, stock: 8, image: viteLogo, category: "Produce" },
  { name: "Apples (1kg)", price: 1.7, stock: 7, image: viteLogo, category: "Produce" },
  { name: "Carrots (1kg)", price: 0.95, stock: 6, image: viteLogo, category: "Produce" },
  { name: "Spinach", price: 1.25, stock: 9, image: viteLogo, category: "Produce" },
  { name: "Cucumbers", price: 1.3, stock: 5, image: viteLogo, category: "Produce" },
  { name: "Bell Peppers", price: 2.0, stock: 3, image: viteLogo, category: "Produce" },
  { name: "Lettuce", price: 0.99, stock: 4, image: viteLogo, category: "Produce" },
  { name: "Onions (1kg)", price: 1.4, stock: 2, image: viteLogo, category: "Produce" },
  { name: "Avocados", price: 1.8, stock: 0, image: viteLogo, category: "Produce" },

  // Bakery
  { name: "White Bread", price: 1.25, stock: 12, image: viteLogo, category: "Bakery" },
  { name: "Croissant", price: 0.99, stock: 8, image: viteLogo, category: "Bakery" },
  { name: "Bagel", price: 1.1, stock: 6, image: viteLogo, category: "Bakery" },
  { name: "Baguette", price: 1.3, stock: 5, image: viteLogo, category: "Bakery" },
  { name: "Donuts", price: 2.5, stock: 4, image: viteLogo, category: "Bakery" },
  { name: "Muffin", price: 1.85, stock: 7, image: viteLogo, category: "Bakery" },
  { name: "Pita Bread", price: 1.0, stock: 3, image: viteLogo, category: "Bakery" },
  { name: "Rolls", price: 1.45, stock: 9, image: viteLogo, category: "Bakery" },
  { name: "Cake Slice", price: 3.5, stock: 0, image: viteLogo, category: "Bakery" },
  { name: "Focaccia", price: 2.1, stock: 2, image: viteLogo, category: "Bakery" },

  // Frozen
  { name: "Frozen Pizza", price: 4.99, stock: 6, image: viteLogo, category: "Frozen" },
  { name: "Frozen Vegies", price: 2.25, stock: 10, image: viteLogo, category: "Frozen" },
  { name: "Frozen Berries", price: 3.5, stock: 7, image: viteLogo, category: "Frozen" },
  { name: "Frozen Fish", price: 5.25, stock: 4, image: viteLogo, category: "Frozen" },
  { name: "Ice Cream", price: 2.99, stock: 0, image: viteLogo, category: "Frozen" },
  { name: "Frozen Fries", price: 2.1, stock: 8, image: viteLogo, category: "Frozen" },
  { name: "Frozen Chicken", price: 6.5, stock: 5, image: viteLogo, category: "Frozen" },
  { name: "Frozen Dumplings", price: 4.2, stock: 3, image: viteLogo, category: "Frozen" },
  { name: "Frozen Meals", price: 5.75, stock: 6, image: viteLogo, category: "Frozen" },
  { name: "Frozen Bread", price: 1.95, stock: 2, image: viteLogo, category: "Frozen" },

  // Appliances
  { name: "Blender", price: 49.99, stock: 5, image: viteLogo, category: "Appliances" },
  { name: "Toaster", price: 25.5, stock: 3, image: viteLogo, category: "Appliances" },
  { name: "Microwave", price: 89.99, stock: 2, image: viteLogo, category: "Appliances" },
  { name: "Electric Kettle", price: 34.99, stock: 6, image: viteLogo, category: "Appliances" },
  { name: "Air Fryer", price: 79.99, stock: 4, image: viteLogo, category: "Appliances" },
  { name: "Rice Cooker", price: 59.5, stock: 3, image: viteLogo, category: "Appliances" },
  { name: "Coffee Maker", price: 65.99, stock: 1, image: viteLogo, category: "Appliances" },
  { name: "Mini Fridge", price: 119.0, stock: 2, image: viteLogo, category: "Appliances" },
  { name: "Hand Mixer", price: 29.99, stock: 4, image: viteLogo, category: "Appliances" },
  { name: "Electric Grill", price: 49.5, stock: 0, image: viteLogo, category: "Appliances" },

  // Electronics
  { name: "Smartphone", price: 299.99, stock: 4, image: viteLogo, category: "Electronics" },
  { name: "Tablet", price: 199.0, stock: 2, image: viteLogo, category: "Electronics" },
  { name: "Laptop", price: 599.99, stock: 1, image: viteLogo, category: "Electronics" },
  { name: "Bluetooth Speaker", price: 45.99, stock: 6, image: viteLogo, category: "Electronics" },
  { name: "Wireless Mouse", price: 15.5, stock: 8, image: viteLogo, category: "Electronics" },
  { name: "Keyboard", price: 25.75, stock: 7, image: viteLogo, category: "Electronics" },
  { name: "Smart Watch", price: 120.0, stock: 3, image: viteLogo, category: "Electronics" },
  { name: "Webcam", price: 35.0, stock: 2, image: viteLogo, category: "Electronics" },
  { name: "Headset", price: 39.99, stock: 5, image: viteLogo, category: "Electronics" },
  { name: "USB Hub", price: 12.49, stock: 9, image: viteLogo, category: "Electronics" },
    { name: "Ballpoint Pen Set", price: 3.49, image: viteLogo, category: "Stationery", stock: 12 },
  { name: "A4 Spiral Notebook", price: 2.99, image: viteLogo, category: "Stationery", stock: 0 },
  { name: "Binder Clips (Pack of 12)", price: 1.75, image: viteLogo, category: "Stationery", stock: 8 },
  { name: "Sticky Notes (5 Colors)", price: 1.99, image: viteLogo, category: "Stationery", stock: 0 },
  { name: "Erasable Highlighters", price: 4.5, image: viteLogo, category: "Stationery", stock: 6 },
  { name: "Scientific Calculator", price: 14.99, image: viteLogo, category: "Stationery", stock: 3 },
  { name: "Graph Paper Pad", price: 2.25, image: viteLogo, category: "Stationery", stock: 15 },
  { name: "Ruler (30 cm)", price: 0.89, image: viteLogo, category: "Stationery", stock: 0 },
  { name: "Correction Tape", price: 1.49, image: viteLogo, category: "Stationery", stock: 9 },
  { name: "Drawing Compass Set", price: 5.75, image: viteLogo, category: "Stationery", stock: 4 }
];

const [Cart , setCart] = useState([]);
const addCartItem = (item) => {
  setCart(prevCart => [...prevCart , item]);
};
const deleteCartItem = (ItemToDelete) => {
  const newCart = Cart.filter(item => item.name !== ItemToDelete.name);
  setCart(newCart);
};

  return (
    <>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/products" element = {<ProductsPage items = {items} addCartItem = {addCartItem}/>}/>
        <Route path="/cart" element = {<CartPage cart = {Cart} DeleteCartItem = {deleteCartItem}/>}/>
      </Routes>
    </>
  );
}

export default App;
