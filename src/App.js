import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logoColombia from "./logo-colombia.png";
import productoKeratina from "./producto-keratina.png";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Shampoo Hidratante Rosa",
    price: "12.99 EUR",
    image: "https://via.placeholder.com/300x200",
    description:
      "Hidrata profundamente el cabello seco, aporta brillo y suavidad. Ideal para uso diario.",
  },
  {
    id: 2,
    name: "Shampoo Reparador",
    price: "14.99 EUR",
    image: "https://via.placeholder.com/300x200",
    description:
      "Repara puntas abiertas y fortalece el cabello danado por calor o quimicos.",
  },
  {
    id: 3,
    name: "Shampoo Anticaida",
    price: "15.99 EUR",
    image: "https://via.placeholder.com/300x200",
    description:
      "Reduce la caida del cabello y estimula el crecimiento saludable.",
  },
  {
    id: 4,
    name: "Keratina Ritual Botanico",
    price: "40 EUR",
    image: productoKeratina,
    description:
      "Deja de usar herramientas termicas y empieza a cuidarte mas tu cabello y luce un cabello lacio y con brillo con nuestra keratina de ritual botanico.",
  },
];

function Layout({ children }) {
  return (
    <div className="app">
      <header className="header">
        <img className="brand-logo" src={logoColombia} alt="Logo Colombia en Ti" />
        <h1>Colombia Ne Ti</h1>
        <p>Belleza y cuidado capilar</p>
      </header>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catalogo</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      {children}

      <footer className="footer">© 2026 Colombia Ne Ti</footer>
    </div>
  );
}

function HomePage() {
  return (
    <section className="hero">
      <h2>Bienvenida a Colombia Ne Ti</h2>
      <p>Descubre los mejores shampoos para tu cabello</p>
    </section>
  );
}

function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="products-section">
        <h2>Nuestros Productos</h2>
        <div className="products-grid">
          {products.map((product) => (
            <article
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedProduct(product);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
          role="presentation"
        >
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <button type="button" onClick={() => setSelectedProduct(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function CatalogPage() {
  return (
    <section className="catalog">
      <h2>Catalogo</h2>
      <p>Explora nuestra coleccion completa de productos capilares profesionales.</p>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <p>Siguenos en redes sociales o contactanos para mas informacion.</p>
      <div className="contact-options">
        <a
          className="whatsapp-link"
          href="https://wa.me/34744624497"
          target="_blank"
          rel="noreferrer"
        >
          Opcion 1: 744624497
        </a>
        <a
          className="whatsapp-link"
          href="https://wa.me/34613075166"
          target="_blank"
          rel="noreferrer"
        >
          Opcion 2: 613 07 51 66
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
