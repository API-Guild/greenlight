import React from "react"

// Encloses menuList components
export default function Menu(props) {
  return (
    <div className="container is-fluid">
      <aside className="menu">
        {props.children}
      </aside>
    </div>
  )
}
