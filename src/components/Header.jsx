import Link from "next/link";
import HeaderStyles from "@/components/Header.module.css";

export default function Header() {
  return (
    <header>
      {/* we add the module name (that we choose in the import) and the rules we want to apply */}
      <h1 className={HeaderStyles.h1}>Coaster Rollers</h1>
      <nav className={HeaderStyles.nav}>
        <Link href="/" className="italic">
          Home
        </Link>
        <br />
        <Link href="/rollers" className="text-pink-700 font-extrabold">
          Rollers
        </Link>
        <br />
        <Link href="/users" className="text-blue-700 font-extrabold">
          Users
        </Link>
      </nav>
    </header>
  );
}
