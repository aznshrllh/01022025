import { useState } from "react";

export default function ManageTable({
  products,
  handleEditProduct: handleEdit,
  handleDeleteProduct: handleDelete,
  handleDetailProduct: handleDetail,
}) {
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortField) return 0;

    let compareA = a[sortField];
    let compareB = b[sortField];

    if (sortField === "Category") {
      compareA = a.Category?.name;
      compareB = b.Category?.name;
    }

    if (sortField === "Status") {
      compareA = a.Status?.name;
      compareB = b.Status?.name;
    }

    if (sortOrder === "asc") {
      return compareA > compareB ? 1 : -1;
    } else {
      return compareA < compareB ? 1 : -1;
    }
  });

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No</th>
            <th
              onClick={() => handleSort("nama_produk")}
              className="cursor-pointer hover:bg-base-300"
            >
              Name{" "}
              {sortField === "nama_produk" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("harga")}
              className="cursor-pointer hover:bg-base-300"
            >
              Price {sortField === "harga" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("Category")}
              className="cursor-pointer hover:bg-base-300"
            >
              Category{" "}
              {sortField === "Category" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("Status")}
              className="cursor-pointer hover:bg-base-300"
            >
              Status{" "}
              {sortField === "Status" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product, index) => (
            <tr key={product.id_produk} className="hover">
              <td>{index + 1}</td>
              <td>{product.nama_produk}</td>
              <td>Rp {product.harga.toLocaleString("id-ID")}</td>
              <td>{product.Category?.name}</td>
              <td>
                <span
                  className={`badge ${
                    product.Status?.name === "tidak bisa dijual"
                      ? "badge-error"
                      : "badge-success"
                  }`}
                >
                  {product.Status?.name}
                </span>
              </td>
              <td className="space-x-2">
                <button
                  onClick={() => handleDetail(product.id_produk)}
                  className="btn btn-info btn-sm"
                >
                  Detail
                </button>
                <button
                  onClick={() => handleEdit(product.id_produk)}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id_produk)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
