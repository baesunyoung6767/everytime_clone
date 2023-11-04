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
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";

import './css/detail.css';

const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'transparent',
        padding: theme.spacing(3),
        textAlign: 'left',
        // boxShadow: 'none',
  }));

function useDetail() {
    let {id} = useParams();
    const [freeTitle, setFreeTitle] = useState();
    const [freeContent, setFreeContent] = useState();
    const [freeDate, setFreeDate] = useState();
    const [freeUser, setFreeUser] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/free-post/detail/'+id)
            .then((res) => {
                const data = res.data;
                setFreeTitle(data.freeTitle);
                setFreeContent(data.freeContent);
                setFreeDate(data.freeDate.split("T")[0]);
                setFreeUser(data.user.userId);
            })
            .catch((err)=>{
                
                console.log(err)
            })
        return () => {
            //console.log('article클리어 하는 코드')
        }
      }, [])


    return(
        <div className='detail_main'>
            <Box sx={{ width: '100%' }}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <Item>
                            {/* db에서 가져오는 값은 변수에 담아서 추후 변경하면 됨 */}
                            <div className='detail_title'>{freeTitle}</div> 
                            <div className='detail_info'>
                                <div className='detail_user'>{freeUser}</div>
                                <div className='detail_date'>{freeDate} </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <Item>
                            <div className='detail_content'>
                                {freeContent}
                            </div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <Item>
                            <div style={{ marginLeft: '57px', marginBottom: '15px'}}>
                                <FiHeart size="20" color="#D11808" style={{ marginRight: '10px' }}/>
                                <AiOutlineShareAlt size="23"/>
                            </div>
                            <div className='detail_comment'>
                                <TextField style={{width : '800px'}} id="comment"/>
                                <Button variant="contained" style={{margin:'10px', backgroundColor:'#d3d3d3', color:'black', border:'0.5px solid'}}>등록</Button>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default useDetail;