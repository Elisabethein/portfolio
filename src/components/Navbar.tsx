import React from "react";

const Navbar: React.FC = () => {
    const links = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Stack", href: "#stack" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="">
            <div className="">
                <ul className="">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;