
export const addItem = (item) => {
    return { type:"ADD_ITEM", item }
}

export const deleteItem = (id) => {
    return { type: "DELETE_ITEM", id }
}

export const deleteRow =(table,rowId,rowCost) => {
    return {type: "DELETE_ROW", table,rowId,rowCost}
    debugger
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

export const deleteAllItem = (table) => {
    return {type: "DELETE_ALL_ITEM", table }
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