const initState = {    
    // items: [
    //     { id:`item-${0}`, Name: "Kabab", Cost: 200, Serving:1 },
    //     { id:`item-${1}`, Name: "Misal Pav", Cost: 200, Serving:1  },
    //     { id:`item-${2}`, Name: "Panner Pakora", Cost: 200, Serving:1  },
    //     { id:`item-${3}`, Name: "Kosha Mangsho", Cost: 500, Serving:1  },
    //     { id:`item-${4}`, Name: "Dhokla", Cost: 100, Serving:1  },
    //     { id:`item-${5}`, Name: "Rogan Josh", Cost: 200, Serving:1  },
    //     { id:`item-${6}`, Name: "Pongal", Cost: 100, Serving:1  },
    //     { id:`item-${7}`, Name: "Papaya Kher", Cost: 100, Serving:1  },
    //     { id:`item-${8}`, Name: "Litti Chowkha", Cost: 100, Serving:1  },
    //     { id:`item-${9}`, Name: "Dham", Cost: 100, Serving:1  },
    //     { id:`item-${10}`, Name: "Pootha Rekulu", Cost: 100, Serving:1  },
    //     { id:`item-${11}`, Name: "Biryani", Cost: 100, Serving:1  },
    //     { id:`item-${12}`, Name: "Fish Curry", Cost: 100, Serving:1  },
    //     { id:`item-${13}`, Name: "Kauli", Cost: 250, Serving:1  },
    //     { id:`item-${14}`, Name: "Chakhwi", Cost: 200, Serving:1  },
    //     { id:`item-${15}`, Name: "Kangshoi", Cost: 100, Serving:1  },
    //     { id:`item-${16}`, Name: "Jadoh", Cost: 150, Serving:1  },
    //     { id:`item-${17}`, Name: "Appam", Cost: 150, Serving:1  },
    //     { id:`item-${18}`, Name: "Bhutte Ka Kees", Cost: 100, Serving:1  },
    //     { id:`item-${19}`, Name: "Dal Baati Churma", Cost: 100, Serving:1  },
    //     { id:`item-${20}`, Name: "Bakre Ki Khichdi", Cost: 150, Serving:1  },
    //     { id:`item-${21}`, Name: "Thukpa", Cost: 200, Serving:1  },
    //     { id:`item-${22}`, Name: "Momos", Cost: 100, Serving:1  },
    //     { id:`item-${23}`, Name: "Bisi Bele Bath", Cost: 100, Serving:1  },
    //     { id:`item-${24}`, Name: "Bamboo Shoots", Cost: 250, Serving:1  },
    //     { id:`item-${25}`, Name: "Misa Mash Poora", Cost: 100, Serving:1  },
    //     { id:`item-${26}`, Name: "Chenna Poda", Cost: 150, Serving:1  },
    //     { id:`item-${27}`, Name: "Chila", Cost: 100, Serving:1  },
    //     { id:`item-${28}`, Name: "Rugda", Cost: 100, Serving:1  }
    // ],
    // tables: [
    //     { id:`table-${0}`, Name: "Table1", totalItem: 0, totalCost: 0,
    //         item:[        
    //         ] },
    //     { id:`table-${1}`, Name: "Table2", totalItem: 0, totalCost: 0,
    //         item:[
    //         ] },
    //     { id:`table-${2}`, Name: "Table3", totalItem: 0, totalCost: 0,
    //         item:[
    //         ] },
    //     { id:`table-${3}`, Name: "Table4", totalItem: 0, totalCost: 0,
    //         item:[
    //     ] },
    // ],
};

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_ITEM":
            const newItem = state.item.filter((item) => item.id !== action.id);
            return{
                ...state,
                item: newItem
            };
        case "ADD_ITEM":
            const items = [action.item, ...state.item]
            return {
                ...state,
                item: items,
            };
        case "DELETE_TABLE":
            const newtable = state.tables.filter((table) => table.id !==action.id);
            
            return {
                ...state,
                table:newtable,
            };
        
        case "GET_STATE":
            return {  
                ...action.data,
            }

        case "DRAG_HAPPENED":
            const{
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;
           
            const newState = [...state.item];
 
            //in the same list
            if(droppableIdStart === droppableIdEnd)  {
                //  const item = state.find(item => droppableIdStart === item.id)
                //  item = item.splice(droppableIndexStart, 1)
                // item.splice(droppableIndexEnd, 0, ...item)
                newState[droppableIndexStart] = newState.splice(droppableIndexEnd, 1, newState[droppableIndexStart])[0];
            }   

            // in the another list
            if(droppableIdStart !== droppableIdEnd){
                const newitem =state.item.find(list =>draggableId === list.id)
                const table = state.tables.find(list => droppableIdEnd === list.id )
                // newState  = table.splice(droppableIndexEnd,0 , ...table[1].card);
                //use findto get the object and paste that object insdie push and find the index of dropaableIdEnd 
                //state.tables[droppableIdEnd].item.push()
                // table.splice(droppableIndexEnd, 0 , droppableIndexStart)
                table.item.push(newitem)
                // table.totalCost.reduce(table.totalCost,newitem.Cost)
                var cost =table.totalCost
                var item1 = table.totalItem
                item1=item1+newitem.Serving
                cost =cost+newitem.Cost
                table.totalCost = cost;
                table.totalItem= item1;
                }            

            return{ 
                ...state,
                item: newState
            };
        default:
            return state;    
    }
};

export default itemReducer;