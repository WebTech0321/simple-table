import { Table } from '@mantine/core';
import { Menu, Button } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import { ElementInfo } from '../types';
import styles from '../styles/Home.module.css'

interface CSSTableProps {
  data: ElementInfo[]
}

const CSSTable = ({data} : CSSTableProps) => {
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
          <td className={styles.cellSmall}>
            <Menu 
              control={<Button rightIcon={<ChevronDown />}>Documents</Button>} 
              styles={{
                body: { overflowY: 'scroll', maxHeight: '148px', width: '240px' }
              }}
            >
              {element.compound.map((item) => (
                <Menu.Item key={`comp-m-${item}`}>{item}</Menu.Item>
              ))}
            </Menu>
          </td>
          <td className={styles.cellLarge}>
            {element.compound.map((item) => (
              <div key={`comp-${item}`} className={styles.compound}>{item}</div>
            ))}
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}

export default CSSTable
