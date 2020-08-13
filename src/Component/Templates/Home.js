import React, {useEffect} from 'react'
import AddItem from '../Organisms/AddItem'
import ItemList from '../Organisms/ItemList'
import TableList from '../Organisms/TableList'
import styled, { ThemeProvider } from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort,getState } from '../../Store/Action/itemAction';
import { useDispatch } from 'react-redux';
import NavBar from '../Molecules/Navbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'


// background-color: #ccc;
const ListContainer = styled.div`
border-radius:3px;
width:68%;
padding:8px;
float:right;
margin-right:1%;
margin-top:12px;
`
const ListTable = styled.div`
border-radius:3px;
width:29%;
padding:8px;
float:left;
margin-left:1%;
margin-top:12px;
`
// const MyFont = styled.div`
// font-family: "Times New Roman", Times, serif;
// font-style: italic;
// `
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
 
      },
    },
    typography: {
        fontFamily: [
          'sans-serif',
          'italic',
        ].join(','),
      },
  });



function Home() {     
    const dispatch = useDispatch();
    useEffect(() => {

    fetch(`http://localhost:3000/profile`)
    .then(res => res.json())
    .then(
      data => dispatch(getState(data)),
      err => dispatch({ type: 'FAILURE', err })
    );
        }, []);

const onDragEnd = (result) => {
    const{ destination, source, draggableId } = result;

    if(!draggableId){
        return;
    }
    if(!source){
        return; 
    }
    if(!destination){
        return;
    }
   
    dispatch(sort(  
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
    ))
}

    return (   
        <ThemeProvider theme={theme}>   
        <Typography>
            <DragDropContext onDragEnd={onDragEnd}>
                <NavBar/>
                <ListTable className='#b3e5fc light-blue lighten-3'>
                    <TableList/>
                </ListTable>            
                <ListContainer className='#b0bec5 blue-grey lighten-5 '>
                    <AddItem /> 
                    <ItemList />
                </ListContainer> 
            </DragDropContext>
        </Typography>
        </ThemeProvider>   
    )
}

export default Home

