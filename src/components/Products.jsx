import React from "react";
import details from "../details";

const Products = () => {
  return (
    <div className="products">
      <h1 className="label">Products</h1>

      {details.products.map((product, index) => (
        <div className="list" key={index + 1}>
          <h1 className="highlight">{product.name}</h1>
          <p className="detail">{`${product.role}`}</p>

          {product["products"] && (
            <div className="product-links">
              <a
                className="detail"
                href={`${product["products"][0].url}`}
              >{`${product["products"][0].platform}`}</a>
              {product["products"][1] && ` | `}
              {product["products"][1] && (
                <a
                  className="detail"
                  href={`${product["products"][1].url}`}
                >{`${product["products"][1].platform}`}</a>
              )}
            </div>
          )}

          <p className="detail">{`${product.description}`}</p>

          <ul>
            {product.details.map((detail, subIndex) => (
              <li>
                <p className="detail" key={subIndex + 1}>{`${detail}`}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Products;
