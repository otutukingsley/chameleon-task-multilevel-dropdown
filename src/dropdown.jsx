// /*

// Prompt:
//   We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
//   in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also
//   have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)

//   0. How are you today? 😊
//   1. Please fix any obvious issues you see with the dropdown and then save your gist.
//   2. Please then make improvements to the dropdown and then save your gist again.
//   3. Consider the different ways that this dropdown might be used and what changes would
//      be neccessary to make it more flexible.
//   4. If we wanted to sync the dropdown selection to a server with this hypothetial "syncing library"
//      `app.sync('PATCH', 'users/'+app.USER.id, { dropdown_1_state: {true,false} })` where would this be included? Should
//      the state be read again from the server to show the dropdown open/closed on page load?
//   5. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items
//      what changes should be made? (just a sentence or two or some code is ok).

//   PS: No need to worry about CSS or about making it actually run.

//  */

import React, { PureComponent } from "react"

export const menuItems = [
  {
    title: "Page 1",

    submenu: [
      {
        title: "Page 2",
      },

      {
        title: "Page 3",
      },

      {
        title: "Page 4",
        submenu: [
          {
            title: "Page 5",
          },
          {
            title: "Page 6",
          },
        ],
      },
    ],
  },
]

export class ExampleNavs extends PureComponent {
  render() {
    return (
      <nav>
        <ul className="menus">
          {menuItems.map((menuItem, index) => {
            return <Dropdown items={menuItem} key={index} />
          })}
        </ul>
      </nav>
    )
  }
}

export class Dropdown extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    const { isOpen } = this.state
    const { items } = this.props

    return (
      <li className="menu-items">
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={() => this.toggle()}
            >
              {items.title}
              {""}
              <span className="arrow" />
            </button>
            <DropdownItem open={isOpen} submenus={items.submenu} />
          </>
        ) : (
          <a href="/#">{items.title}</a>
        )}
      </li>
    )
  }
}

export class DropdownItem extends PureComponent {
  render() {
    const { submenus, open } = this.props

    return (
      <ul className={`dropdown ${open ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <Dropdown items={submenu} key={index} />
        ))}
      </ul>
    )
  }
}
