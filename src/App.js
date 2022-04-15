import { useState } from "react";
import "./App.css";
import Gallery from "./components/gallery";
import ImageBanner from "./components/imagebanner";

import Navbar from "./components/navbar";
import Product from "./components/product";
import Sidebar from "./components/sidebar";
import Cart from "./elements/cart";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [cart, showCart] = useState(false);
  const [gallery, showGallery] = useState(false);
  const [items, setItems] = useState(null);

  return (
    <>
      {gallery && <Gallery showGallery={showGallery} />}
      {cart && <Cart showCart={showCart} items={items} setItems={setItems} />}
      {sidebar && <Sidebar setSidebar={setSidebar} />}
      <div className="App">
        <Navbar
          showCart={showCart}
          cart={cart}
          setSidebar={setSidebar}
          items={items}
        ></Navbar>
        <div className="desktop">
          <ImageBanner showGallery={showGallery} />
          <Product showCart={showCart} setItems={setItems} />
        </div>
        <footer>
          © 2022 Sneakers clone with react/react-router-dom/state by nfnt
        </footer>
      </div>
    </>
  );
}

export default App;
