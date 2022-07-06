import { Table } from '@mantine/core';
import { ElementInfo } from '../types';
import _ from "lodash";
import JSTableRow from "./JSTableRow";

interface JSTableProps {
  data: ElementInfo[]
}

const JSTable = ({data} : JSTableProps) => {
  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
          <th>Compound</th>
        </tr>
      </thead>
      <tbody>
      {data.map((element) => (
        <tr key={element.name}>
          <td>{element.position}</td>
          <td>{element.name}</td>
          <td>{element.symbol}</td>
          <td>{element.mass}</td>
          <td>
            <JSTableRow data={element} />
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}

export default JSTable
