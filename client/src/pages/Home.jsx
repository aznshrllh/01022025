import { useEffect, useState } from "react";
import axios from "../configs/axiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id_produk}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="card-body">
              <h2 className="card-title">{product.nama_produk}</h2>
              <p className="text-lg font-semibold text-primary">
                Rp {product.harga.toLocaleString("id-ID")}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDetailProduct(product.id_produk)}
                  className="btn btn-primary"
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
