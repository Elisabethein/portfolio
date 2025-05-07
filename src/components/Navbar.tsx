import React, {useState, useEffect} from "react";

const Navbar: React.FC = () => {
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
              const offsetTop = (section as HTMLElement).offsetTop - 100;
              const offsetHeight = (section as HTMLElement).offsetHeight;
              if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                setActive(links[i].href);
              }
            }
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


      return (
        <nav className="flex justify-center mt-6">
          <ul className="flex bg-orange-100/20 backdrop-blur-md px-6 py-2 rounded-full gap-3">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-200
                    ${active === link.href
                      ? "text-orange-400 font-semibold"
                      : "text-orange-300"}
                    hover:text-orange-500
                  `}
                >
                  {/* background circle for selected link */}
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