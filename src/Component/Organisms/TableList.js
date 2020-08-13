import React from 'react'
import TableDetail from '../Molecules/TableDetail'
import { useSelector } from 'react-redux'

function TableList() {
    
    const { tables } = useSelector(state => state)
 
    return (
        <div 
         className='container '> 
            <div className='row'>
               <h4 className="black-text center"> TABLE </h4> 
                {
                   tables && 
                   tables.map((table,index) => <TableDetail table={table} index={index} key={table.id} id={table.id}/>)
                }
            </div>
        </div>
        )
}

export default TableList

