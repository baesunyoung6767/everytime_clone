import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";

import './css/createFree.css';

function useCreateFree() {
    
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
   
    return(
        <div className='create_main'>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                    <Box
                        sx={{
                            width: 1000,
                            maxWidth: '100%',
                            paddingBottom: '15px'
                        }}
                        >
                        <TextField fullWidth label="제목" id="title" style={{backgroundColor : 'transparent'}} />
                    </Box>
                    </Grid>
                    <Grid item>
                    <Box
                        sx={{
                            paddingBottom: '15px'
                        }}>
                        <textarea
                        name="contents"
                        cols="135"
                        rows="30"
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
                            <Button sx={{ backgroundColor:"#3C3A39", color:"white", marginLeft:"10px"}}  variant="contained">등록</Button>
                        </Box>
                    </Grid>
                </Grid>
            
        </div>
    );
}

export default useCreateFree;