import React from "react";
import Navbar from "../components/Navbar";
import "../pages/StyleAddMenu.css";
import { useState } from "react";
import axios from "axios";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    type: "beverage",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    setMenu((menu) => ({ ...menu, [e.target.name]: e.target.value }));
  };

  console.log(menu);

  const handleSubmit = () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const payload = {
      name: menu.name,
      description: menu.description,
      type: menu.type,
      imageUrl: menu.image,
      price: parseInt(menu.price),
    };

    axios
      .post("https://api.mudoapi.tech/menu", payload, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="margin-left-20">
      <Navbar />
      <h1 className="add-menu-title">Add Menu</h1>
      <div className="add-menu-section">
        <h2>Name</h2>
        <input
          onChange={handleChange}
          className="add-menu-input"
          type="text"
          placeholder="name"
          name="name"
        />
      </div>
      <div className="add-menu-section">
        <h2>Description</h2>
        <input
          onChange={handleChange}
          className="add-menu-input"
          type="text"
          placeholder="description"
          name="description"
        />
      </div>
      <div className="add-menu-section">
        <h2>Select Option</h2>
        <select
          onChange={handleChange}
          name="type"
          id=""
          className="custom-select"
        >
          <option value="beverage">minuman</option>
          <option value="main-dish">Makanan</option>
        </select>
      </div>
      <div className="add-menu-section">
        <h2>Image</h2>
        <input
          onChange={handleChange}
          className="add-menu-input"
          type="text"
          placeholder="image"
          name="image"
        />
      </div>
      <div className="add-menu-section">
        <h2>Price</h2>
        <input
          onChange={handleChange}
          className="add-menu-input"
          type="text"
          placeholder="price"
          name="price"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddMenu;
