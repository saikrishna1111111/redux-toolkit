import React from 'react'
import Table from './Table'
import { useSelector } from 'react-redux'
import NoData from './NoData'
const Crud = (item) => {
    const items = useSelector((state)=>state.items)
  return (
    <>

        {items.length !==0 ? <Table items={items} /> : <><NoData /></>}
    </>
  )
}

export default Crud