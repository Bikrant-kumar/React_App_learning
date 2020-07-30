import React,{useState} from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Modal from '@material-ui/core/Modal';
import TableData from './TableData';



function TableDetail({table,index,id}) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 

    return (        
                <div >    
                        <div  className="col s12 m12 center ">
                             <Droppable droppableId={String(id)}>
                        {provided => (
                        <div  {...provided.droppableProps} ref ={provided.innerRef} className="card hoverable" >
                                <div className="card-title" onClick={handleOpen}> {table.Name} </div>
                            <div
                            className="card-action ">
                            <div> Serving : {table.totalItem} </div>
                            <div> Total Amount : {table.totalCost} </div>
                            </div>                            
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="simple-modal-title"
                              aria-describedby="simple-modal-description"
                            >
                            <TableData table={table}/>
                            </Modal>
                            {provided.placeholder}    
                        </div> 
                        )}
                        </Droppable>                    
                    </div>
                  
     </div>
   

      
    )
}

export default TableDetail

