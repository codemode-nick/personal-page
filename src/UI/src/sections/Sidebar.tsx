const Sidebar = () => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <div className="group fixed top-0 right-0 z-50 h-screen w-8">
      <aside
        className="
          absolute top-1/2 right-0
          w-36
          -translate-y-1/2 translate-x-26.25
          rounded-l-2xl
          bg-[#6f6f6f]
          py-8
          transition-transform duration-300 ease-out
          group-hover:translate-x-0
          border-l
          border-y
        "
      >
        <nav className="flex flex-col items-center gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                flex h-8 w-20
                items-center justify-center
                rounded-sm
                bg-[#d9d9d9]
                text-xs font-medium text-black
                shadow-[0_1px_2px_rgba(0,0,0,0.3)]
                transition-all duration-150
                hover:bg-white
                hover:-translate-x-1
              "
            >
              {link.name}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
