import React from 'react';
import useFetch from './useFetch';
import './App.css';

function App() {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const getValidImageUrl = (image) => {
    if (!image) return '';
    let url = image;
    // Remove array brackets and quotes if present (common issue with this API)
    if (url.startsWith('["') && url.endsWith('"]')) {
      url = url.slice(2, -2);
    }
    if (url.startsWith('["')) {
      url = url.slice(2);
    }
    if (url.endsWith('"]')) {
      url = url.slice(0, -2);
    }
    return url;
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="product-grid">
        {data && data.map((product) => {
          const imageUrl = getValidImageUrl(product.images[0]);
          return (
            <div key={product.id} className="product-card">
              <img
                src={imageUrl}
                alt={product.title}
                className="product-image"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=No+Image'; }}
              />
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
