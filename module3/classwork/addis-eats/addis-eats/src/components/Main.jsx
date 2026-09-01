import React, { useState, useEffect } from "react";
import Dish from "./Dish";
import OrderForm from "./OrderForm";
import CategoryBar from "./CategoryBar";

function Main() {
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("All");
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState("")
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data.items);
        setLoding(false)
      }
      catch (error) {
        console.error("Error fetching menu:", error);
        setError(error)
      }
      finally(
        setLoading(false)
      )
    };

    fetchData();
  }, [catagory]);

  const shown =
    category === "All"
      ? menu
      : menu.filter((item) => item.category === category);

  function addToOrder(price) {
    setTotal((prevTotal) => prevTotal + price);
  }

  return (
    <div>
      <h2>Addis Eats - Our Menu</h2>
      <h1>Total : {total}</h1>
      <CategoryBar onSelectCategory={setCategory} />
      <div className="card-container">
        {shown.map((item) => (
          <Dish key={item.id} {...item} onAdd={addToOrder} />
        ))}
      </div>
            {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : menu.length === 0 ? (
                <p>No available</p>
              ) : (
                <div className="card-container">
                  {shown.map((item) => (
                    <Dish key={item.id} {...item} onAdd={addToOrder} />
                  ))}
                </div>
              )}  
      

      <OrderForm />
    </div>
  );
}

export default Main;
