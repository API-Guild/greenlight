import React, { useState } from "react"
import { modalTable } from "./table.module.scss"

export default function Table(props) {
  const modal = props.modalTable ? modalTable : '';

  return (
    <div className={`table-container ${modal}`}>
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
          <th key={`${index}-${Math.random().toString(36).substr(2, 10)}`}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

const Data = (props) => {
  if (!Array.isArray(props.data)) {
    throw new Error('data props for <Table/> must be an array!')
  }
  
  return (
    <tbody>
      {props.data.map((row, index) => (
        <Row 
          row={row} key={`${index}-${Math.random().toString(36).substr(2, 10)}`}
        />
      ))}
    </tbody>
  )
}

const Row = (props) => {
  const [selected, setSelected] = useState('');

  const handleClick = () => {
    setSelected(selected === '' ? 'is-selected' : '');
  }

  return (
    <>
      {props.row.map((row, index) => (
        <tr 
          key={`${index}-${Math.random().toString(36).substr(2, 10)}`}
          className={selected}
          onClick={handleClick}
        >
          <Cell row={row}/>
        </tr>
      ))}
    </>
  )
}

const Cell = (props) => {
  return (
    <>
      {props.row.map((cell, index) => (
        <td key={`${index}-${Math.random().toString(36).substr(2, 10)}`}>
          {cell}
        </td>
      ))}
    </>
  )
}
