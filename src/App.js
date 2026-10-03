import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const displayPhoneNumber = "+234 916 549 3552";
  const whatsappNumberClean = "2349165493552";

  const getWhatsAppLink = (item = "") => {
    const text = item
      ? `Hello!%20I%20want%20to%20order%20${encodeURIComponent(item)}%20from%20Cephas%20Fresh%20%26%20Cold.`
      : "Hello!%20I%20am%20interested%20in%20your%20products%20at%20Cephas%20Fresh%20%26%20Cold.";
    return `https://wa.me/${whatsappNumberClean}?text=${text}`;
  };

  return (
    <div className="container">
      {/* Top Navbar */}
      <nav className="navbar">
        <h2 className="logo" onClick={() => setCurrentPage("home")} style={{ cursor: "pointer" }}>
          Cephas Fresh & Cold
        </h2>
        <div className="nav-links">
          <button className={currentPage === "home" ? "active-link" : ""} onClick={() => setCurrentPage("home")}>
            Home
          </button>
          <button className={currentPage === "products" ? "active-link" : ""} onClick={() => setCurrentPage("products")}>
            All Products
          </button>
          <button className={currentPage === "about" ? "active-link" : ""} onClick={() => setCurrentPage("about")}>
            About Us
          </button>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-nav">
            WhatsApp Us
          </a>
        </div>
      </nav>

      {/* HOME PAGE */}
      {currentPage === "home" && (
        <div>
          <header className="hero">
            <h1>Quality Products Delivered Fresh & Cold</h1>
            <p>Your trusted partner for premium supply and reliable cold-chain delivery.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => setCurrentPage("products")}>
                View Products
              </button>
              <button className="btn-secondary" onClick={() => setCurrentPage("about")}>
                About Us
              </button>
            </div>
          </header>

          <section className="services">
            <h2>What We Offer</h2>
            <p className="section-subtitle">Click any category below to view stock items, images, and live prices</p>

            <div className="card-grid">
              {/* Category 1: Poultry */}
              <div className="card category-card" onClick={() => setCurrentPage("poultry")}>
                <img
                  src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800&q=90"
                  alt="Fresh Poultry"
                  className="category-img ultra-crisp"
                />
                <h3>Fresh Poultry (Chicken & Turkey)</h3>
                <p>Soft Chicken, Boiler, Hen, Breast, Wings, Laps, Feet & Turkey sets.</p>
                <button className="btn-card">View Chicken & Turkey List &rarr;</button>
              </div>

              {/* Category 2: Aquatic Fish */}
              <div className="card category-card" onClick={() => setCurrentPage("fish")}>
                <img
                  src="https://i.postimg.cc/7b8Dg9qZ/4346b864-751c-4589-87ad-aba1be18ce18.jpg"
                  alt="Aquatic Fish"
                  className="category-img ultra-crisp"
                />
                <h3>Aquatic Fish Supply</h3>
                <p>Cece, Melusa, Scubia (Titus), Herring, Pala, Croaker & fresh fish varieties.</p>
                <button className="btn-card">View Fish List & Price &rarr;</button>
              </div>

              {/* Category 3: Sea Food */}
              <div className="card category-card" onClick={() => setCurrentPage("seafood")}>
                <img
                  src="https://i.postimg.cc/5tS2mZrj/Gemini-Generated-Image-37ju6a37ju6a37ju.jpg"
                  alt="Sea Food"
                  className="category-img ultra-crisp"
                />
                <h3>Fresh Sea Food</h3>
                <p>Lobster, Crabs, Shrimps, and specialized ocean seafood items.</p>
                <button className="btn-card">View Sea Food List &rarr;</button>
              </div>
            </div>
          </section>

          <section className="contact">
            <h2>Get in Touch</h2>
            <p>Ready to place an order? Chat directly on WhatsApp or call {displayPhoneNumber}.</p>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary-link">
              Send Message on WhatsApp
            </a>
          </section>
        </div>
      )}

      {/* ALL PRODUCTS OVERVIEW */}
      {currentPage === "products" && (
        <div className="page-content">
          <button className="back-btn" onClick={() => setCurrentPage("home")}>&larr; Back to Home</button>
          <h1 className="page-title">Product Categories</h1>
          <div className="phone-banner">📞 <strong>Order Line / Call:</strong> {displayPhoneNumber}</div>

          <div className="card-grid">
            <div className="card category-card" onClick={() => setCurrentPage("poultry")}>
              <img src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800&q=90" alt="Poultry" className="category-img ultra-crisp" />
              <h3>Fresh Poultry & Turkey</h3>
              <p>Chicken Breast, Wings, Laps, Feet, Whole Chicken & Turkey Kilo sets.</p>
              <button className="btn-card">Open Poultry Page &rarr;</button>
            </div>

            <div className="card category-card" onClick={() => setCurrentPage("fish")}>
              <img src="https://i.postimg.cc/7b8Dg9qZ/4346b864-751c-4589-87ad-aba1be18ce18.jpg" alt="Fish" className="category-img ultra-crisp" />
              <h3>Fish & Aquatic Items</h3>
              <p>Cece, Melusa, Scubia (Titus), Pala, Herring, Croaker & general fish stock.</p>
              <button className="btn-card">Open Fish Page &rarr;</button>
            </div>

            <div className="card category-card" onClick={() => setCurrentPage("seafood")}>
              <img src="https://i.postimg.cc/5tS2mZrj/Gemini-Generated-Image-37ju6a37ju6a37ju.jpg" alt="Sea Food" className="category-img ultra-crisp" />
              <h3>Sea Food (Lobster, Crabs & Shrimps)</h3>
              <p>Fresh Lobsters, Crabs, Shrimps, and ocean seafood selection.</p>
              <button className="btn-card">Open Sea Food Page &rarr;</button>
            </div>
          </div>
        </div>
      )}

      {/* POULTRY PAGE */}
      {currentPage === "poultry" && (
        <div className="page-content">
          <button className="back-btn" onClick={() => setCurrentPage("products")}>&larr; Back to Categories</button>
          <h1 className="page-title">Fresh Poultry & Turkey Items</h1>
          <p className="page-subtitle">Cleanly processed and stored cold for maximum quality.</p>
          <div className="phone-banner">📞 <strong>Order Line:</strong> {displayPhoneNumber}</div>

          <div className="card-grid">
            <div className="product-card">
              <img src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=90" alt="Chicken Breast" className="product-img ultra-crisp" />
              <h3>Chicken Breast</h3>
              <p className="price">Price: ₦8,000 / Kilo</p>
              <p className="description">Boneless, raw tender chicken breast cutlet ideal for restaurants and healthy home meals.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> 100% fresh cold storage, zero waste.</p>
              <a href={getWhatsAppLink("Chicken Breast (₦8,000)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/SKCwF1Ph/Gemini-Generated-Image-5jj1p5jj1p5jj1p5.jpg" alt="Chicken Wings" className="product-img ultra-crisp" />
              <h3>Chicken Wings</h3>
              <p className="price">Price: ₦8,000 / Kilo</p>
              <p className="description">Freshly trimmed raw chicken wings ready for grilling or frying.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Clean cuts and sealed hygiene packaging.</p>
              <a href={getWhatsAppLink("Chicken Wings (₦8,000)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/bvyQpsCw/Gemini-Generated-Image-8dpkr58dpkr58dpk.jpg" alt="Chicken Laps" className="product-img ultra-crisp" />
              <h3>Chicken Laps (Soft)</h3>
              <p className="price">Price: ₦6,000 / Kilo</p>
              <p className="description">Juicy soft raw chicken laps packed under constant cold temperature.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Quick delivery and affordable wholesale rates.</p>
              <a href={getWhatsAppLink("Chicken Laps (₦6,000)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/0ybMjwgd/Gemini-Generated-Image-dqu0nhdqu0nhdqu0.jpg" alt="Whole Chicken" className="product-img ultra-crisp" />
              <h3>Whole Chicken (Boiler)</h3>
              <p className="price">Price: ₦10,800 / Whole</p>
              <p className="description">Full raw boiler chicken cleaned and prepped for cooking or events.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> High weight standard and prime quality.</p>
              <a href={getWhatsAppLink("Whole Boiler Chicken (₦10,800)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/hvTsH5rH/Gemini-Generated-Image-6lqkcf6lqkcf6lqk.jpg" alt="Chicken Feet" className="product-img ultra-crisp" />
              <h3>Chicken Feet</h3>
              <p className="price">Price: ₦3,000 / Pieces</p>
              <p className="description">Cleaned raw chicken feet suitable for soups, stews, and specialty dishes.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Thoroughly washed and skin removed.</p>
              <a href={getWhatsAppLink("Chicken Feet (₦3,000)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/zGbZVJxv/Gemini-Generated-Image-gwnf76gwnf76gwnf.jpg" alt="Strong Chicken" className="product-img ultra-crisp" />
              <h3>Strong Chicken (Hen)</h3>
              <p className="price">Price: ₦7,500 / Kilo</p>
              <p className="description">Hard hen raw meat rich in flavor for traditional African stews and soups.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Deep flavor profile and healthy cuts.</p>
              <a href={getWhatsAppLink("Strong Chicken Hen (₦7,500)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/cJknTBQn/Gemini-Generated-Image-p0jem2p0jem2p0je.jpg" alt="Turkey" className="product-img ultra-crisp" />
              <h3>Turkey (Full / Kilo)</h3>
              <p className="price">Price: ₦10,500 / Kilo</p>
              <p className="description">Special raw turkey cuts and whole sets frozen under strict temperatures.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Meaty cuts, zero freezer burn.</p>
              <a href={getWhatsAppLink("Turkey (₦10,500)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FISH PAGE */}
      {currentPage === "fish" && (
        <div className="page-content">
          <button className="back-btn" onClick={() => setCurrentPage("products")}>&larr; Back to Categories</button>
          <h1 className="page-title">Aquatic Fish Items</h1>
          <p className="page-subtitle">Freshly frozen fish varieties available for individual and wholesale purchase.</p>
          <div className="phone-banner">📞 <strong>Order Line:</strong> {displayPhoneNumber}</div>

          <div className="card-grid">
            <div className="product-card">
              <img src="https://i.postimg.cc/wjzn2hVf/Gemini-Generated-Image-vgicdcvgicdcvgic.jpg" alt="Cece Fish" className="product-img ultra-crisp" />
              <h3>Cece Fish (Mackerel)</h3>
              <p className="price">Price: ₦3,500 Pieces / ₦5,500 Kilo</p>
              <p className="description">Freshly stored raw Cece fish with firm texture, ideal for frying and pepper soup.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Direct ocean sourcing and fast dispatch.</p>
              <a href={getWhatsAppLink("Cece Fish (₦5,500)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/CxWfBsVf/Gemini-Generated-Image-ovyunmovyunmovyu.jpg" alt="Melusa Fish" className="product-img ultra-crisp" />
              <h3>Melusa Fish</h3>
              <p className="price">Price: ₦5,500 / Kilo</p>
              <p className="description">High-grade raw Melusa fish frozen at peak condition to maintain taste.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Affordable bulk pricing for all households.</p>
              <a href={getWhatsAppLink("Melusa Fish (₦5,500)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/J0tFFLYY/Gemini-Generated-Image-b7js8qb7js8qb7js.jpg" alt="Scubia Titus Fish" className="product-img ultra-crisp" />
              <h3>Scubia (Titus Fish)</h3>
              <p className="price">Price: ₦6,500 Pieces / ₦13,500 Kilo</p>
              <p className="description">Rich, oily raw Titus (Scubia) fish ideal for smoked delicacies and rich stews.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Authentic grade Titus without ice inflation.</p>
              <a href={getWhatsAppLink("Scubia Titus Fish (₦6,500)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/SKDDbP9q/Gemini-Generated-Image-bkzy52bkzy52bkzy.jpg" alt="Pala Fish" className="product-img ultra-crisp" />
              <h3>Pala Fish & Herring</h3>
              <p className="price">Pala fish: ₦1,000 & Herring: ₦2,500 / Pieces</p>
              <p className="description">Raw Pala fish and Herring varieties kept cold for maximum retention.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Fresh batch guaranteed daily.</p>
              <a href={getWhatsAppLink("Pala Fish (₦1,000)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/T1VX0GKF/Gemini-Generated-Image-ixbjfvixbjfvixbj.jpg" alt="Croaker Fish" className="product-img ultra-crisp" />
              <h3>Croaker Fish</h3>
              <p className="price">Price: ₦5,500 / Kilo set</p>
              <p className="description">Fresh raw Croaker fish carefully handled under frozen cold storage.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Cleaned, zero waste, premium quality.</p>
              <a href={getWhatsAppLink("Croaker Fish (₦5,500)")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SEA FOOD PAGE */}
      {currentPage === "seafood" && (
        <div className="page-content">
          <button className="back-btn" onClick={() => setCurrentPage("products")}>&larr; Back to Categories</button>
          <h1 className="page-title">Sea Food (Lobster, Crabs & Shrimps)</h1>
          <p className="page-subtitle">Fresh ocean seafood kept frozen under certified cold storage.</p>
          <div className="phone-banner">📞 <strong>Order Line:</strong> {displayPhoneNumber}</div>

          <div className="card-grid">
            <div className="product-card">
              <img src="https://i.postimg.cc/R0xch62r/Gemini-Generated-Image-nn2nkenn2nkenn2n.jpg" alt="Fresh Lobster" className="product-img ultra-crisp" />
              <h3>Fresh Lobsters</h3>
              <p className="price">Price: Contact for daily market rate</p>
              <p className="description">Large whole lobsters sourced directly for luxury dining and grilling.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Carefully handled and cold preserved.</p>
              <a href={getWhatsAppLink("Lobsters")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://i.postimg.cc/TY9wgyyv/Gemini-Generated-Image-x4zytox4zytox4zy.jpg" alt="Fresh Crabs" className="product-img ultra-crisp" />
              <h3>Sea Crabs</h3>
              <p className="price">Price: Contact for daily market rate</p>
              <p className="description">Ocean sea crabs perfect for seafood boils, soups, and specialized dishes.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Full meat guarantee and direct dispatch.</p>
              <a href={getWhatsAppLink("Sea Crabs")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>

            <div className="product-card">
              <img src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&q=90" alt="Fresh Shrimps" className="product-img ultra-crisp" />
              <h3>Fresh Shrimps & Prawns</h3>
              <p className="price">Price: Contact for daily market rate</p>
              <p className="description">Cleaned, high-grade ocean shrimps prepped for instant frying or boiling.</p>
              <p className="why-buy">✓ <strong>Why buy from us:</strong> Fast cold-chain logistics and firm texture.</p>
              <a href={getWhatsAppLink("Shrimps")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Order via WhatsApp ({displayPhoneNumber})
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT US PAGE */}
      {currentPage === "about" && (
        <div className="page-content article-container">
          <button className="back-btn" onClick={() => setCurrentPage("home")}>&larr; Back to Home</button>

          <article className="article">
            <h1>About Cephas Fresh & Cold</h1>
            <p className="article-intro">Everything you need to know about our supply standards, location, and product quality guarantees.</p>
            <hr className="divider" />

            <h2>1. About Our Products</h2>
            <p>
              At Cephas Fresh & Cold, we specialize in high-grade fresh and temperature-regulated supply.
              Our chicken, turkey, aquatic fish (Cece, Melusa, Titus, Pala, Croaker), and sea foods (Lobsters, Crabs, Shrimps) are sourced directly from trusted producers and stored under strict cold-chain protocols.
            </p>

            <h2>2. Why Buy Our Products?</h2>
            <ul>
              <li><strong>Guaranteed Freshness:</strong> Continuous refrigeration ensures zero quality loss or spoilage during transit.</li>
              <li><strong>Affordable Wholesale Pricing:</strong> Honest weights and competitive prices for households and restaurants.</li>
              <li><strong>Reliable Supply Line:</strong> We keep steady stock levels so your kitchen or business never runs out.</li>
            </ul>

            <h2>3. Our Location & Distribution</h2>
            <p>
              We operate central supply hubs configured for fast logistics.
              You can place an order for direct home pickup or request fast cold-chain delivery right to your door or business spot.
            </p>

            <h2>4. How to Order</h2>
            <p>
              Ordering takes less than a minute! Call our direct sales line at <strong>{displayPhoneNumber}</strong>, browse our <strong onClick={() => setCurrentPage("products")} style={{ color: "#0077b6", cursor: "pointer" }}>Products Catalog</strong>, or click the WhatsApp button below.
            </p>

            <div className="article-cta">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
                Chat With Us on WhatsApp ({displayPhoneNumber})
              </a>
            </div>
          </article>
        </div>
      )}

      <footer>
        <p>&copy; 2026 Cephas Fresh & Cold. All rights reserved.</p>
      </footer>
    </div>
  );
}