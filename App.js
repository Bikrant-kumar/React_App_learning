import React, {useState} from 'react';
import { IconButton, Typography, makeStyles,TextField } from "@material-ui/core";
import { Add, Cancel, Remove } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridAutoFlow: "column",
    padding: theme.spacing(2),
  }
}));

function App() {
const [count,setCount] = useState(0);

const onAddButtonClick = () => {
setCount(count + 1);
}

const onDeleteButtonClick = () => {
setCount(count - 1);
}

const onResetButtonClick = () => {
setCount(count - count);
}

  return (
    <div className="App">
            <IconButton color="primary"
                onClick={onAddButtonClick} >
                <Add />
             </IconButton>
             <IconButton color="primary"
             onClick={onDeleteButtonClick}>
               <Remove />
              </IconButton>
             <TextField id="outlined-basic" label="Counter" value ={count} variant="outlined" />
             <IconButton color="secondary"
             onClick={onResetButtonClick}>
               <Cancel/>
             </IconButton>
    </div>
  );
}

export default App;
