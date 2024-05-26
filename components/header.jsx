import CartLink from "./CartLink";
import CategoriesDropdown from "./CategoriesDropdown";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-black p-4">
      <Link href="/">
        <h1 className="item-link text-black hover:underline mt-2 block text-left text-xl">
          TuTiendaOnline
        </h1>
      </Link>
      <CategoriesDropdown/>
      <CartLink/>
    </header>
  );
}
