import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../configs/axiosInstance";
import Swal from "sweetalert2";
import ManageTable from "../components/ManageTable";

export default function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const { data } = await axios({
        method: "GET",
        url: "/products",
      });

      await new Promise((resolve) => setTimeout(resolve, 1200));

      console.log(data, "<<<data");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch products",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDetailProduct = (id) => {
    navigate(`/product/detail/${id}`);
  };

  const handleEditProduct = (id) => {
    navigate(`/product/edit/${id}`);
  };

  const handleDeleteProduct = async (id) => {
    try {
      const { isConfirmed } = await Swal.fire({
        icon: "warning",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      });

      if (isConfirmed) {
        await axios({
          method: "DELETE",
          url: `/products/${id}`,
        });

        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        fetchProducts();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete product",
      });
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log("fetch products", products);
  }, []);

  if (loading) {
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-infinity loading-lg"></span>;
    </div>;
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Manage Your Products
        </h1>
        <ManageTable
          products={products}
          handleDetailProduct={handleDetailProduct}
          handleEditProduct={handleEditProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      </div>
    </div>
  );
}
