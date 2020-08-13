import React,{useState} from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Modal from '@material-ui/core/Modal';
import TableData from './TableData';
import Label from '../Atoms/Label'
import Box from '@material-ui/core/Box';

function TableDetail({table,index,id}) {
  debugger  
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 

    return (
               <div data-testid="tableDetails">    
                        <div  className="col s12 m12 center ">
                             <Droppable droppableId={String(id)}>
                        {provided => (
                        <Box  borderRadius={16} {...provided.droppableProps} ref ={provided.innerRef} className="card hoverable" >
                                <div className="card-title" onClick={handleOpen}> <h5><Label text={table.Name}/> </h5> </div>
                            <Box borderRadius={16}
                            className="card-action ">
                             <Label text={"Serving :"}/> <Label text={table.totalItem}/>
                             <Label text={"Total Amount :"}/> <Label text={table.totalCost}/>
                            </Box>                            
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="simple-modal-title"
                              aria-describedby="simple-modal-description"
                            >
                            <TableData table={table}/>
                            </Modal>
                            {provided.placeholder}    
                        </Box> 
                        
                        )}
                        </Droppable>                    
                    </div>
     </div>    
    )
}

export default TableDetail

