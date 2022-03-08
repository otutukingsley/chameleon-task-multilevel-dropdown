import React from "react"
import DropdownItem from "./DropdownItem"
import { menuItems } from "./menuItems"

const ExampleNav = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menuItem, index) => {
          const depthLevel = 0
          return (
            <DropdownItem
              items={menuItem}
              key={index}
              depthLevel={depthLevel}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default ExampleNav
