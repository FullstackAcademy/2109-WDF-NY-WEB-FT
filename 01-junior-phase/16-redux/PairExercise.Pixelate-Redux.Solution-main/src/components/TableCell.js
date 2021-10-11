import React from 'react'
import store, { colorize } from '../store'

const TableCell = (props) => {

  function handleClick(e) {
    e.preventDefault()
    store.dispatch(colorize(props.rowIdx, props.colIdx))
  }

  return <td onClick={handleClick} className={props.color}></td>
}

export default TableCell