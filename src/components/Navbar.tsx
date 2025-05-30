import React, {useState, useEffect} from "react";

const Navbar: React.FC = () => {
    const SCROLL_OFFSET = 160;

    const links = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Stack", href: "#stack" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
    ];

    const [active, setActive] = useState("#hero");

    useEffect(() => {
        const handleScroll = () => {
          const scrollPos = window.scrollY;

          for (let i = 0; i < links.length; i++) {
            const section = document.querySelector(links[i].href);
            if (section) {
              const offsetTop = (section as HTMLElement).offsetTop - SCROLL_OFFSET;
              const offsetHeight = (section as HTMLElement).offsetHeight;

              if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                setActive(links[i].href);
                break;
              }
            }
          }
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


      return (
        <nav className="fixed top-4 z-50 sm:w-auto">
          <ul className="flex flex-wrap justify-center bg-orange-100/20 backdrop-blur-md px-4 py-2 rounded-full gap-2 sm:gap-3">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-200
                    ${active === link.href
                      ? "text-orange-400 font-semibold"
                      : "text-orange-300"}
                    hover:text-orange-500
                  `}
                >
                  {active === link.href && (
                    <span className="absolute inset-0 bg-orange-100 opacity-20 rounded-full -z-10"></span>
                  )}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
};

export default Navbar;