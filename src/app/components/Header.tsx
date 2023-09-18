import Link from "next/link";
import Search from "./Search";
import Filter from "./Filter";

const Header = () => {
  return (
    <div className="relative flex items-center justify-between mb-8 h-16 bg-red-500">
      <div className="flex items-center px-2 lg:px-0">
        <Link
          href={"/"}
          className="flex ml-2 text-2xl font-semibold"
        >
          Movies
        </Link>
      </div>
      <Search />
      <Filter />
    </div>
  );
};

export default Header;
