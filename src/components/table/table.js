import React from "react"

export default function Table(props) {
  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-hoverable is-fullwidth">
        <Headers headers={props.headers}/>
        <Data data={props.data}/>
      </table>
    </div>
  )
}

const Headers = (props) => {
  return (
    <thead>
      <tr align="center">
        {props.headers.map((header, index) => (
          <th>{header}</th>
        ))}
      </tr>
    </thead>
  )
}

const Data = (props) => {
  return (
    <tbody>
      <tr>
        {props.data.map((datum, index) => (
          <td>{datum}</td>
        ))}
      </tr>
    </tbody>
  )
}
