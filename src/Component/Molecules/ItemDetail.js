import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteItem} from '../../Store/Action/itemAction';
import { Draggable } from 'react-beautiful-dnd';

function ItemDetail({item,id,index}) {

    const dispatch = useDispatch();

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="col s6 m6">
                <div className="card hoverable">
                    <div className="card-content">
                        <span className="card-title"> {item.Name} </span>
                        <div>Cost : {item.Cost}</div>
                    </div>
                    <div className="card-action">
                        <button
                        onClick={()=>dispatch(deleteItem(item.id))}
                        className='btn-small red s6 offset-s6'>
                            Remove Item
                            <i className="material-icons right">delete</i>
                        </button>
                    </div>
                </div>
            </div>
            )}
        </Draggable>
    )
}


export default ItemDetail

