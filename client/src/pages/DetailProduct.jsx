import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../configs/axiosInstance";

export default function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `/products/${id}`,
      });

      // console.log(data, "<<<data");
      setProduct(data.product);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch product",
        text: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-infinity loading-lg"></span>;
    </div>;
  }

  const generateImagePrompt = (productName) => {
    const words = productName?.split(" ").slice(0, 2).join(" ");
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(words)}`;
  };

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={() => navigate(-1)} className="btn btn-ghost mb-4">
          ← Back
        </button>

        <div className="card bg-base-100 shadow-xl">
          {product?.nama_produk && (
            <figure className="px-4 pt-4">
              <img
                src={generateImagePrompt(product.nama_produk)}
                alt={product.nama_produk}
                className="rounded-xl object-cover h-64 w-full"
              />
            </figure>
          )}

          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">{product?.nama_produk}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-500">Price</h3>
                  <p className="text-2xl font-bold text-primary">
                    Rp {product?.harga?.toLocaleString("id-ID")}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-500">
                    Category
                  </h3>
                  <p className="text-xl">{product?.Category?.name}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-500">
                    Status
                  </h3>
                  <span
                    className={`badge ${
                      product?.Status?.name === "bisa dijual"
                        ? "badge-success"
                        : "badge-error"
                    } badge-lg`}
                  >
                    {product?.Status?.name}
                  </span>
                </div>
              </div>

              <div className="divider md:divider-horizontal"></div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-500">
                    Product ID
                  </h3>
                  <p>{product?.id_produk}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-500">
                    Created At
                  </h3>
                  <p>{new Date(product?.createdAt).toLocaleString("id-ID")}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-500">
                    Last Updated
                  </h3>
                  <p>{new Date(product?.updatedAt).toLocaleString("id-ID")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
