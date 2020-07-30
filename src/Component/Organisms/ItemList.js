import React from 'react'
import ItemDetail from '../Molecules/ItemDetail'
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd'

function ItemList( ) {
    
    const items  = useSelector(state=>state.item)

    return (
        <Droppable droppableId={"1"}>
            {provided => (
                        <div {...provided.droppableProps} ref ={provided.innerRef} className='container'> 
                        <div className='row'>
                            {
                               items && 
                               items.map((item,index) => <ItemDetail item={item} index={index} key={item.id} id={item.id}/>)
                            }
                        </div> 
                        
                                  
                    </div>
            )}

        </Droppable>
    )
}

export default ItemList

