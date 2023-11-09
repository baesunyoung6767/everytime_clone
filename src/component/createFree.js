import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState} from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from 'react-router';

import './css/createFree.css';

function useCreateFree() {

    const [token, setToken] = useState('');
    let navigate = useNavigate();

    const getToken = async () => {
        try {
          const storedToken = await localStorage.getItem('token') || '';
          console.log('토큰 확인');
          console.log(storedToken);
          setToken(storedToken);
          if (token == null) { console.log('Token not found');}
        } catch (error) {
          console.error('Error retrieving token:', error);
        }
    };
    
    useEffect(() => {
        getToken();
    }, [])

    const [board, setBoard] = useState({
        freeTitle: '',
        freeContent: '',
      });

    const { freeTitle, freeContent } = board; 
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
          ...board,
          [name]: value,
        });
    }

    function uploadPost() {
        axios.post('http://localhost:8080/free-post/', {
            freeTitle: board.freeTitle,
            freeContent: board.freeContent,
        },{
            headers: {
              'Authorization' : `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status == 201) {
                alert('게시글 등록 성공!');
                navigate("/general-forum");
            } else { 
                alert('게시글 등록 실패!');
            }
        }).catch((err) => {
            console.log("API 요청 오류 : ", err);
        })
    }
  
   
    return(
        <div className='create_main'>
            <Grid container direction="column" justifyContent="center" alignItems="center">
            {/* <div className='create_title'>게시글 작성</div> */}
                    <Grid item>
                    <Box
                        sx={{
                            width: 1000,
                            maxWidth: '100%',
                            paddingBottom: '15px'
                        }}
                        >
                        <TextField fullWidth label="제목" id="title" style={{backgroundColor : 'transparent'}} value={freeTitle} name="freeTitle" onChange={onChange}/>
                    </Box>
                    </Grid>
                    <Grid item>
                    <Box
                        sx={{
                            paddingBottom: '15px'
                        }}>
                        <textarea
                        name="freeContent"
                        cols="135"
                        rows="30"
                        value={freeContent}
                        onChange={onChange}
                        style={{backgroundColor : 'transparent', borderRadius: '4px'}}
                        ></textarea>
                    </Box>
                    </Grid>
                    <Grid item>
                        <Box 
                            sx={{
                                paddingBottom: '15px'
                            }}>
                            <Button component="label" variant="contained" startIcon={<FaCloudUploadAlt />}>
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <Button 
                            sx={{ backgroundColor:'#d3d3d3', color:'black',  marginLeft:"10px"}}  variant="contained"
                            onClick={()=>uploadPost()}
                            >등록</Button>
                        </Box>
                    </Grid>
                </Grid>
            
        </div>
    );
}

export default useCreateFree;