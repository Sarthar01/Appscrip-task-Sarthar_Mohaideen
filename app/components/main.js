import { useState, useEffect } from 'react';
import '../styles/Home.css';
// Define filter categories and their options
const filters = {
  "Ideal For": ["All", "Men", "Women", "Baby & Kids"],
  "Occasion": ["All", "Casual", "Formal", "Party"],
  "Work": ["All", "Office", "Remote", "Freelance"],
  "Fabric": ["All", "Cotton", "Polyester", "Linen"],
  "Segment": ["All", "Fashion", "Technology", "Home"],
  "Suitable For": ["All", "Adults", "Children", "Elderly"],
  "Raw Materials": ["All", "Wood", "Metal", "Plastic"],
  "Pattern": ["All", "Stripes", "Plaid", "Solid"]
};



export default function Home() {
    // State to store products
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [sortOption, setSortOption] = useState('Recommended');
  const [activeFilters, setActiveFilters] = useState({});
  const [activeSections, setActiveSections] = useState({});
  const [isCustomizable, setIsCustomizable] = useState(false);

  useEffect(() => {
   
    console.log("Fetching products...");

    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        console.log("Fetched products:", data); 
        setProducts(data); 
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleWishlist = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedProducts = [...products];
    switch (option) {
      case 'Newest':
        sortedProducts = sortedProducts.reverse();
        break;
      case 'Popular':
        sortedProducts = sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case 'price : High to Low':
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'Price : Low to High':
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  const toggleFilterSection = (filter) => {
    setActiveSections((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleFilterChange = (filterCategory, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterCategory]: prev[filterCategory]
        ? [...prev[filterCategory], value]
        : [value],
    }));
  };

  const handleUnselectAll = (filterCategory) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterCategory]: [],
    }));
  };

  const handleCustomizableChange = () => {
    setIsCustomizable(!isCustomizable);
  };

  return (
    <div className="main">
      <div className="header">
        <div className="totalItems">
          <p>3425 ITEMS</p>
          <button className="filterToggle" onClick={toggleFilter}>
            {showFilter ? '<' : '>'} {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>
        <div className="sortDropdown">
          <button>{sortOption} <span className="dropdownSymbol">˅</span></button>
          <div className="dropdownContent">
            <span onClick={() => handleSortChange('Recommended')}>RECOMMENDED</span>
            <span onClick={() => handleSortChange('Newest')}>NEWEST FIRST</span>
            <span onClick={() => handleSortChange('Popular')}>POPULAR</span>
            <span onClick={() => handleSortChange('price : High to Low')}>PRICE : HIGH TO LOW</span>
            <span onClick={() => handleSortChange('Price : Low to High')}>PRICE : LOW TO HIGH</span>
          </div>
        </div>
      </div>

      <div className="container">
        {showFilter && (
          <div className="sidebar">
            <div className="filterSection">
              <label className="filterLabel">
                <input
                  type="checkbox"
                  checked={isCustomizable}
                  onChange={handleCustomizableChange}
                  className="customCheckbox"
                />
                Customizable
              </label>
            </div>

            {Object.keys(filters).map((filter) => (
              <div key={filter} className={`filterSection ${activeSections[filter] ? 'active' : ''}`}>
                <h4 onClick={() => toggleFilterSection(filter)}>
                  {filter} <span>{activeSections[filter] ? '^' : '˅'}</span>
                </h4>
                {activeSections[filter] && (
                  <div className="filterOptions">
                    <button
                      className="unselectButton"
                      onClick={() => handleUnselectAll(filter)}
                    >
                      Unselect All
                    </button>
                    {filters[filter].map((option) => (
                      <label key={option} className="filterLabels" style={{ fontWeight: "normal" }}>
                        <input
                          type="checkbox"
                          onChange={() => handleFilterChange(filter, option)}
                          checked={activeFilters[filter]?.includes(option)}
                          className="customCheckbox"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="productsGrid">
          {products.length === 0 ? (
            <p>No products available</p>  // Display if no products
          ) : (
            products.map((product) => (
              <div key={product.id} className="card">
                <img src={product.image} alt={product.title} />
                <div className="cardContent">
                  <h2>{product.title}</h2>
                  <p>Sign in or Create an account to see pricing</p>
                </div>
                <span
                  className={`wishlist ${product.isFavorite ? 'red' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  &#9825;
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
