import './css/free.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName', //title
      headerName: '제목',
      width: 200,
      editable: true,
    },
    {
      field: 'lastName', //content
      headerName: '내용',
      width: 450,
      editable: true,
    },
    {
      field: 'age', //name
      headerName: '작성자',
      width: 150,
      editable: true,
    },
    {
      field: 'fullName', //date
      headerName: '작성일',
    //   description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 180,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'coment', //name
        headerName: '댓글',
        typeof: Number,
        width: 90,
        editable: true,
    },
    {
        field: 'like', //name
        headerName: '공감',
        typeof: Number,
        width: 90,
        editable: true,
    },
    {
        field: 'look', //name
        headerName: '조회수',
        typeof: Number,
        width: 90,
        editable: true,
    }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

function free() {
    return(
        <>
        <div className = "free_main">
            <div className='free_main_content'>
                <Box sx={{ height: 630, width: '100%'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        sx={{
                            borderColor: 'transparent',
                        }}
                    />  
                </Box>
            </div>
        </div>
        </>
    );
}

export default free;