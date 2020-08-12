import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteItem} from '../../Store/Action/itemAction';
import { Draggable } from 'react-beautiful-dnd';
import Label from '../Atoms/Label'
import Box from '@material-ui/core/Box';

function ItemDetail({item,id,index}) {
    
    const dispatch = useDispatch();

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="col s6 m6">
                <Box borderRadius="50%" className="card hoverable ">
                    <div className="card-content ">
                        <span className="card-title center"><h5> <Label text={item.Name}/> </h5></span>
                        <div className='center'> Cost : {item.Cost} </div>
                    </div>
                    <Box className="card-action center ">
                        <button
                        onClick={()=>dispatch(deleteItem(item.id))}
                        className='btn-small light-blue lighten-3  black-text'>
                            Remove Item
                            <i className="material-icons right">delete</i>
                        </button>
                    </Box>
                </Box>
            </div>
            )}
        </Draggable>
    )
}


export default ItemDetail

