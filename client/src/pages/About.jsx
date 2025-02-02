import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero min-h-[60vh] bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">FastPrint Indonesia</h1>
            <p className="py-6">
              Leading provider of high-quality printing solutions. We deliver
              innovative products and exceptional service to meet all your
              printing needs.
            </p>
            <Link to="/home" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <h3 className="card-title">Quality Products</h3>
              <p>We provide high-quality printing products and accessories.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="card-title">Fast Delivery</h3>
              <p>Quick and reliable delivery service nationwide.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="card-title">24/7 Support</h3>
              <p>Round-the-clock customer service support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Address</h3>
                <p>123 Print Street</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Contact</h3>
                <p>Phone: (021) 123-4567</p>
                <p>Email: info@fastprint.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
