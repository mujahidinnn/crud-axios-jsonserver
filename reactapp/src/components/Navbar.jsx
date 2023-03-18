import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <nav className="bg-blue-500 w-full h-16 flex justify-between px-10 py-5 items-center">
      <h1 className="text-white font-bold text-3xl">Crud_</h1>
      <Link to="/create">
        <button className="text-blue-500 bg-white font-semibold px-3 py-3 rounded-xl">
          Create
        </button>
      </Link>
    </nav>
  );
};
export default NavbarComp;
