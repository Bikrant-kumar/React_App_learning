import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'

const ListTable = styled.div`
margin-right:20%;
margin-left:20%;
margin-top:10%;
font-family: "Times New Roman", Times, serif;
font-style: italic;
`
  
function TableData({table}) {

  return (
        <ListTable >
          <div className="white">
    <h2 className="green center" >{table.Name}</h2>
        <TableContainer component={Paper}>
      <Table  aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="right">S No.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {table.item.map((row,index) => (
            <TableRow key={index} >
               <TableCell align="right">{index+1}</TableCell> 
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Serving}</TableCell>
              <TableCell align="right">{row.Cost}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"> Total </TableCell> 
              <TableCell align="right">{table.totalCost}</TableCell>
          </TableRow>
           </TableBody>
      </Table>
    </TableContainer>
    </div>
    </ListTable>
    )
}

export default TableData

