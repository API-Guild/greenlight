import React from "react"

// Must be encased in a Menu component. Accepts a label (string) and a list (array)
export default function MenuList(props) {

  return (
    <>
      <p className="menu-label">
        {props.label}
      </p>
      <ul className="menu-list">
        {props.list.map((li) => (
            <li key={Math.random().toString(36).substr(2, 10)}>
              <a href="/">{li}</a>
            </li>
        ))}
      </ul>
    </>
  )
}
