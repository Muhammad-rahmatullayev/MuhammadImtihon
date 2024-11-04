import "./magazine.css";
import React, { useState } from "react";

function Magazine() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$20",
      color: "Red",
      stars: 4,
      image: "/public/med1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30",
      color: "Blue",
      stars: 5,
      image: "/public/med2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$15",
      color: "Green",
      stars: 3,
      image: "/public/med3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$25",
      color: "Yellow",
      stars: 4,
      image: "/public/med4.jpg",
    },
    {
      id: 1,
      name: "Product 5",
      price: "$51",
      color: "Red",
      stars: 4,
      image: "/public/med5.jpg",
    },
    {
      id: 2,
      name: "Product 6",
      price: "$33",
      color: "Blue",
      stars: 5,
      image: "/public/med6.jpg",
    },
    {
      id: 3,
      name: "Product 7",
      price: "$153",
      color: "Green",
      stars: 3,
      image: "/public/med3.jpg",
    },
    {
      id: 4,
      name: "Product 8",
      price: "$24",
      color: "Yellow",
      stars: 4,
      image: "/public/med1.jpg",
    },
    {
      id: 1,
      name: "Product 9",
      price: "$85",
      color: "Red",
      stars: 4,
      image: "/public/med6.jpg",
    },
    {
      id: 2,
      name: "Product 10",
      price: "$100",
      color: "Blue",
      stars: 5,
      image: "/public/med2.jpg",
    },
    {
      id: 3,
      name: "Product 11",
      price: "$65",
      color: "Green",
      stars: 3,
      image: "/public/med4.jpg",
    },
    {
      id: 4,
      name: "Product 12",
      price: "$77",
      color: "Yellow",
      stars: 4,
      image: "/public/med5.jpg",
    },
    {
      id: 3,
      name: "Product 13",
      price: "$25",
      color: "Green",
      stars: 3,
      image: "/public/med6.jpg",
    },
    {
      id: 4,
      name: "Product 14",
      price: "$35",
      color: "Yellow",
      stars: 4,
      image: "/public/med1.jpg",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} savatchaga qo'shildi!`);
  };

  return (
    <div>
      <div className="abcont">
        <div>
          <h1 className="wordabout">MAGAZINE</h1> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a className="wordhome" href="./Home.jsx">
            HOME
          </a>
          <span className="wordab">Magazine</span>
        </div>
      </div>
      <div><br />
      <br />
        <div className="product-collection">
          <h1>Drugs and Medical items for sale</h1>
          <br />
          <br />
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>PRICE: {product.price}</p>
                <p>COLOR: {product.color}</p>
                <p>
                  STAR: {"★".repeat(product.stars)}
                  {"☆".repeat(5 - product.stars)}
                </p>
                <button className="magbtn" onClick={() => addToCart(product)}>
                  Xarid qilish
                </button>
              </div>
            ))}
          </div>
          <div className="cart">
            <img src="/public/basket.png" alt="Cart" />
            <span>{cart.length} ta buyum</span>
          </div>
        </div>
      </div><br /><br /><br />
    </div>
  );
}

export default Magazine;
