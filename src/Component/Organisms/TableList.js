import React from 'react'
import TableDetail from '../Molecules/TableDetail'
import { useSelector } from 'react-redux'
// import { Droppable } from 'react-beautiful-dnd'

function TableList() {
    
    const { tables } = useSelector(state => state)
 
    return (
        // <Droppable droppableId={"0"}>
        //     {provided => (
        <div
        //  {...provided.droppableProps} ref ={provided.innerRef} 
         className='container'> 
            <div className='row'>
               <h4 className="blue-text center"> TABLE </h4> 
                {
                   tables && 
                   tables.map((table,index) => <TableDetail table={table} index={index} key={table.id} id={table.id}/>)
                }
            </div>
            {/* {provided.placeholder}              */}
        </div>
    // )}
        // </Droppable>
        )
}

export default TableList

