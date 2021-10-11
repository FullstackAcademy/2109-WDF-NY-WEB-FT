import React from 'react'
import TableRow from './TableRow.js'

export default (props) => {
  return (
    <table>
      <tbody>
        { props.grid.map((row, rowIdx) => <TableRow key={rowIdx} rowIdx={rowIdx} row={row} />) }
      </tbody>
    </table>
  )
}
