import React from 'react'
import Table from './Table'
import { useSelector } from 'react-redux'
const Crud = (item) => {
    const items = useSelector((state)=>state.items)
  return (
    <>
        <Table items={items} />
    </>
  )
}

export default Crud