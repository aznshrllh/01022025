import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 z-50">
      <div className="navbar-start">
        <Link to="/home" className="btn btn-ghost text-xl">
          FastPrint
        </Link>
      </div>

      <div className="navbar-end">
        {/* Mobile menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a>Products</a>
              <ul className="p-2">
                <li>
                  <Link to="/product/manage">Manage Products</Link>
                </li>
                <li>
                  <Link to="/product/add">Add Product</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <details>
              <summary>Products</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to="/product/manage">Manage Products</Link>
                </li>
                <li>
                  <Link to="/product/add">Add Product</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
