export default function Table({ products, handleDetailProduct }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id_produk} className="hover">
              <th>{index + 1}</th>
              <td>{product.nama_produk}</td>
              <td>Rp {product.harga.toLocaleString("id-ID")}</td>
              <td>{product.Category?.name}</td>
              <td>
                <button
                  onClick={() => handleDetailProduct(product.id_produk)}
                  className="btn btn-primary btn-sm"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
