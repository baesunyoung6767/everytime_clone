import './css/free.css';
import * as React from 'react';
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'No.', width: 90 },
    {
      field: 'freeTitle', //title
      headerName: '제목',
      width: 350,
      editable: true,
    },
    {
      field: 'userId', //name
      headerName: '작성자',
      width: 150,
      editable: true,
    },
    {
      field: 'freeDate', //date
      headerName: '작성일',
    //   description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 180,
      editable: true,
    },
    {
        field: 'comment', //name
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
    // {
    //     field: 'look', //name
    //     headerName: '조회수',
    //     typeof: Number,
    //     width: 90,
    //     editable: true,
    // }
  ];
  
function useFree() {

  const navigate = useNavigate();

  // 상세페이지 이동
  const useHandleEvent = (event) => {
    navigate(`` + event.id);
  }

  const [freePostData, setFreePostData] = useState([]);

  function setFreePostFun(props) {
    setFreePostData(props);
  }

  const createFreePage = () => {
    navigate('/create-post');
  }

  useEffect(() => {
    axios.get('http://localhost:8080/free-post/0')
        .then((res) => {
            const data = res.data.content;
            const extractedData = data.map(item => ({
              id: item.freeId,
              userId: item.user.userId,
              freeDate: item.freeDate.split("T")[0],
              freeTitle: item.freeTitle,
              comment: 0,
              like: 0,
            }));
            setFreePostFun(extractedData);
        })
        .catch((err)=>{
            
            console.log(err)
        })
    return () => {
        //console.log('article클리어 하는 코드')
    }
  }, [])


    return(
        <>
        <div className = "free_main">
            <div style={{textAlign:'Right', marginRight:'40px', paddingTop:'25px'}}>
            <Button variant="text" style={{margin:'10px', color:'black', textDecoration:'underline'}} onClick={createFreePage}>작성하기</Button>
            </div>
            <div className='free_main_content'>
                <Box sx={{ height: 630, width: 1000}}>
                    <DataGrid
                        onRowClick={useHandleEvent}
                        rows={freePostData}
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

export default useFree;