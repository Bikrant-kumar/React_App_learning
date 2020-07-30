
export const addItem = (item) => {
    return { type:"ADD_ITEM", item }
}

export const deleteItem = (id) => {
    return { type: "DELETE_ITEM", id }
}

export const deleteTable =(id) => {
    return { type: "DELETE_TABLE", id }
}

export const getState =(data) => {
    return {type: "GET_STATE", data}
}

export const getFailure = (err) => {
    return {type: "FAILURE", err }
}

export const sort =(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
 ) => {
    return {
        type: "DRAG_HAPPENED",
        payload:{
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
            }   
        }
     }