import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Margherita Pizza",
    ingredients: "Tomato sauce, mozzarella, fresh basil",
    price: 8.99,
    picture: "pizzas/margherita.jpg",
    soldout: false,
  },
  {
    name: "Pepperoni Pizza",
    ingredients: "Tomato sauce, mozzarella, pepperoni",
    price: 10.5,
    picture: "pizzas/pepperoni.jpg",
    soldout: false,
  },
  {
    name: "Veggie Supreme",
    ingredients: "Tomato sauce, mozzarella, bell peppers, olives, onions",
    price: 9.75,
    picture: "pizzas/veggie.jpg",
    soldout: false,
  },
  {
    name: "BBQ Chicken Pizza",
    ingredients: "BBQ sauce, grilled chicken, red onions, mozzarella",
    price: 11.25,
    picture: "pizzas/bbq-chicken.jpg",
    soldout: true,
  },
  {
    name: "Hawaiian Pizza",
    ingredients: "Tomato sauce, mozzarella, ham, pineapple",
    price: 10.0,
    picture: "pizzas/hawaiian.jpg",
    soldout: false,
  },
];

function Header() {
  return <h1> Welcome to pizza co.</h1>;
}

function Menu() {
  return (
    <div className="menu">
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  //   const hour = new Date().getHours();
  //   const startHour = 10;
  //   const endHour = 22;
  //   if (hour >= startHour && hour <= endHour) {
  //     alert("we are open");
  //   } else {
  //     alert("sorry, we are closed");
  //   }
  return (
    <div className="footer">
      {new Date().toLocaleTimeString()} We are currently Open Now!
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizzaitem">
      <h1>veggie supreme</h1>
      <img src="pizzas/veggie.jpg" alt="veggie pizza"></img>
    </div>
  );
}

//creating a function thats a Component
function App() {
  return (
    <div className="container">
      <Header />

      <Menu />
      <Footer />
    </div>
  );
}

//manual implemnetation of react
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*strict mode helps in easy debugging and checks for outdated components,
    useful in react applications, renders twice*/}
    <App />
  </React.StrictMode>,
);

//or react less than  v18
//React.render(<App />, document.getElementById("root"));
