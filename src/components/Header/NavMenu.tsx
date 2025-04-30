import React from 'react';

interface NavMenuProps {
  onItemClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ onItemClick }) => {
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <ul className={`flex ${onItemClick ? 'flex-col space-y-3' : 'space-x-6'}`}>
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="text-gray-300 hover:text-white transition-colors duration-300 py-2 relative group"
            onClick={onItemClick}
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;