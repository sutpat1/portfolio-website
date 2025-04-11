import React from 'react'
import NavLink from './NavLink'

// Update the interface to match your NavItem structure
interface Link {
  path: string;
  title: string;
}

const MenuOverlay = ({ links }: { links: Link[] }) => {
  return (
    <div>
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuOverlay