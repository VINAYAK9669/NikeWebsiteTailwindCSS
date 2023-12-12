import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
function Nav() {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="LOGO" width={130} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt={hamburger} width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
