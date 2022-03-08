import React from "react"
import DropdownItem from "./DropdownItem"

const MainDropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <DropdownItem items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default MainDropdown
