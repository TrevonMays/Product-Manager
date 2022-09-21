import { Link, useOutletContext } from 'react-router-dom';

const AllProduct = () => {
  const { product } = useOutletContext();

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Products</th>
          <th>Price</th>
          <th className='text-end'>Descritption</th>
        </tr>
      </thead>
      <tbody>
        {product &&
          product.map((product) => {
            return (
              <tr key={product._id}>
                <td><Link to={`/product/${product._id}`}>{product.title}</Link></td>
                <td>{product.price}</td>
                <td className='text-end'>
                  <Link
                    to={`/product/${product._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllProduct;