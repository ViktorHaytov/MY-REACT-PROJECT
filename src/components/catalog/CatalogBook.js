import {Link} from 'react-router-dom';

export const CatalogBook = () => {
    return (
        <div className="catalog-container">
        <div className="product-card">
          <img src="" alt="Producto 1" />
          <h6>Title:</h6>
          <h2>Category</h2>
          <Link to="/catalog/:bookId">Details</Link>
        </div>

      </div>
    )
}