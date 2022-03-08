import React from "react"
import MainDropdown from "./MainDropdown"

const DropdownItem = ({ items, key, depthLevel }) => {
  const [dropdown, setDropdown] = React.useState(false)
  let ref = React.useRef()

  React.useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [dropdown])

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  return (
    <li
      key={key}
      className="menu-items"
      ref={ref}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {""}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <MainDropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <a href="/#">{items.title}</a>
      )}
    </li>
  )
}

export default DropdownItem
