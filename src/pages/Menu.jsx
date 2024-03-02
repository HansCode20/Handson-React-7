import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const getMenuData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenu(res.data.data.Data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  const handleEdit = (id) => {
    // Implementasi fungsi untuk edit menu dengan menggunakan id menu
    console.log("Edit menu dengan id:", id);
  };

  const handleDelete = (id) => {
    // Implementasi fungsi untuk delete menu dengan menggunakan id menu
    console.log("Hapus menu dengan id:", id);
  };

  return (
    <div>
      <Navbar />
      <h1>Menu Page</h1>

      {menu.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img width={"40px"} src={item.imageUrl} alt={item.name} />
          <Link to={`/menu/${item.id}`}>
            <button>Detail</button>
          </Link>
          <button onClick={() => handleEdit(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
