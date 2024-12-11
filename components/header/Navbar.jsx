import Link from "next/link";

import MobileMenu from "@/components/Header/MobileMenu";

export const navLinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Projects",
    href: "/projects",
  },
  {
    id: 3,
    label: "About Us",
    href: "/about",
  },
  {
    id: 4,
    label: "Services",
    href: "/services",
  },
  {
    id: 5,
    label: "Blog",
    href: "/blog",
  },
  {
    id: 6,
    label: "Faq",
    href: "/faq",
  },
  {
    id: 7,
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="h-16 sm:h-20 lg:h-[100px] flex items-center justify-between max-w-container mx-auto px-container">
      <Link className="text-2xl font-bold" href="/">
        Techdoit
      </Link>
      <ul className="items-center gap-6 hidden md:flex">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              className=" font-medium font-rubik hover:text-blue-500 duration-500 transition-all"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="">
        <MobileMenu />
      </div>
    </nav>
  );
};
export default Navbar;
