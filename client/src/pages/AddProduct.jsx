import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../configs/axiosInstance";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    status: "",
    category: "",
  });

  const categories = [
    { id: 1, name: "L QUEENLY" },
    { id: 2, name: "L MTH AKSESORIS (IM)" },
    { id: 3, name: "L MTH TABUNG (LK)" },
    { id: 4, name: "SP MTH SPAREPART (LK)" },
    { id: 5, name: "CI MTH TINTA LAIN (IM)" },
    { id: 6, name: "S MTH STEMPEL (IM)" },
    { id: 7, name: "L MTH AKSESORIS (LK)" },
  ];

  const statuses = [
    { id: 1, name: "bisa dijual" },
    { id: 2, name: "tidak bisa dijual" },
  ];

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Price validation
    if (name === "price") {
      if (parseFloat(value) < 0) {
        Swal.fire({
          icon: "error",
          title: "Invalid Price",
          text: "Price cannot be negative",
        });
        return;
      }
    }

    // Name validation
    if (name === "name" && value.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Product name cannot be empty",
      });
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!form.name || !form.price || !form.status || !form.category) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "All fields are required",
      });
      return;
    }

    if (parseFloat(form.price) <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Price",
        text: "Price must be greater than 0",
      });
      return;
    }

    setLoading(true);
    try {
      const dataToSend = {
        nama_produk: form.name,
        harga: parseFloat(form.price),
        status_id: parseFloat(form.status),
        kategori_id: parseFloat(form.category),
      };

      const { response } = await axios({
        method: "POST",
        url: "/products",
        data: dataToSend,
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: `Successfully add product ${form.name}`,
      });

      navigate("/product/manage");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate(-1)} className="btn btn-ghost mb-4">
          ← Back
        </button>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-6">
              Add New Product
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Price Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price (IDR)</span>
                </label>
                <input
                  type="number"
                  name="price"
                  className="input input-bordered w-full"
                  value={form.price}
                  onChange={handleChange}
                  min="0"
                  step="1"
                  required
                />
              </div>

              {/* Status Select */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select
                  name="status"
                  className="select select-bordered w-full"
                  value={form.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Status</option>
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Select */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Add Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
