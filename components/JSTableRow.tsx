import React, {useState, useEffect, useRef, createRef, LegacyRef} from "react"
import { Menu, Button } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import { ElementInfo } from '../types';
import { useViewportSize } from '@mantine/hooks';
import _ from "lodash";
import styles from '../styles/Home.module.css'

interface JSTableRowProps {
  data: ElementInfo
}

const JSTableRow = ({data} : JSTableRowProps) => {
  const { width } = useViewportSize();
  const tBodyRef = useRef<HTMLDivElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState<boolean>(false)
      
  const calcPosition = () => {
    setCollapsed(false)
    setTimeout(() => {      
      if(tBodyRef.current && cellRef.current) {        
        setCollapsed(tBodyRef.current?.clientHeight > cellRef.current.clientHeight * 2)
      }
    }, 300)
  }

  const debounceResize = _.debounce(calcPosition, 200);

  useEffect(() => {
    debounceResize()
  }, [width])

  return (
      <div ref={tBodyRef}>
        {collapsed ?
        <Menu 
            control={<Button rightIcon={<ChevronDown />}>Documents</Button>} 
            styles={{
            body: { overflowY: 'scroll', maxHeight: '148px', width: '240px' }
            }}
        >
            {data.compound.map((item) => (
            <Menu.Item key={`comp-m-${item}`}>{item}</Menu.Item>
            ))}
        </Menu>
        :
        <div className={styles.cellFlex}>
        {data.compound.map((item) => (
            <div key={`comp-${item}`} className={styles.compound} ref={cellRef}> {item}</div>
        ))}
        </div>
        }
      </div>
  )
}

export default JSTableRow
