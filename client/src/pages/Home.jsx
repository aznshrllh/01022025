import { useEffect, useState } from "react";
import axios from "../configs/axiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const { data } = await axios({
        method: "GET",
        url: "/products/sellable",
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Sellable Products
      </h1>
      <Table products={products} handleDetailProduct={handleDetailProduct} />
    </div>
  );
}
