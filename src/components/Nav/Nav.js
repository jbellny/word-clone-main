import React from "react"

function Nav({ handleReset }) {
  const [menuToggle, setMenuToggle] = React.useState(false)

  function prepareReset() {
    toggleMenu()
    handleReset()
  }
  function toggleMenu() {
    const nextToggle = menuToggle
    setMenuToggle(!nextToggle)
  }
  function subMenu() {
    return (
      <div onClick={prepareReset} className="subMenu">
        RESET
      </div>
    )
  }
  return (
    <nav>
      <span onClick={toggleMenu}>⚙️</span>
      {menuToggle ? subMenu() : ""}
    </nav>
  )
}

export default Nav
