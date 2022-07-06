import React, {useState, useEffect, useRef, createRef, LegacyRef} from "react"
import { Table } from '@mantine/core';
import { Menu, Button } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import { ElementInfo } from '../types';
import _ from "lodash";
import styles from '../styles/Home.module.css'

interface JSTableProps {
  data: ElementInfo[]
}

const JSTable = ({data} : JSTableProps) => {
  const [collapsed, setCollapsed] = useState<Array<boolean>>(data.map(item => false))
  const elRefs = useRef<HTMLDivElement[]>([]);
  const tBodyRef = useRef<HTMLTableSectionElement>(null);

  if (elRefs.current.length !== data.length) {
    // add or remove refs
    elRefs.current = Array(data.length)
      .map((_, i) => elRefs.current[i] || createRef());
  }
    
  const calcPosition = () => {
    let newCollapsed = [...collapsed]
    setCollapsed(Array(data.length).fill(false))
    setTimeout(() => {
      const len = tBodyRef.current?.rows.length || 0;
      if(tBodyRef.current) {
        for(let i = 0; i < len; i++) {    
          newCollapsed[i] = tBodyRef.current?.rows[i].clientHeight > 60
        }
      }
      setCollapsed(newCollapsed)
    }, 300)
  }

  const debounceResize = _.debounce(calcPosition, 300);

  useEffect(() => {
    window.addEventListener('resize', debounceResize);
    calcPosition()
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, [tBodyRef])

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
      <tbody ref={tBodyRef}>
      {data.map((element, idx) => (
        <tr key={element.name}>
          <td>{element.position}</td>
          <td>{element.name}</td>
          <td>{element.symbol}</td>
          <td>{element.mass}</td>
          <td>
            {collapsed[idx] ?
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
            :
            <div className={styles.cellFlex} /*ref={elRefs.current[idx]}*/>
            {element.compound.map((item) => (
              <div key={`comp-${item}`} className={styles.compound}>{item}</div>
            ))}
            </div>
            }
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}

export default JSTable
