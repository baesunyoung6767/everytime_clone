import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './css/detail.css';

const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'transparent',
        padding: theme.spacing(3),
        textAlign: 'left',
  }));

function detail() {

    return(
        <div className='detail_main'>
            <Box sx={{ width: '100%' }}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <Item>
                            {/* db에서 가져오는 값은 변수에 담아서 추후 변경하면 됨 */}
                            <div className='detail_title'>게시글 제목</div> 
                            <div>작성자 작성일 조회수 0 댓글 0 공감 0</div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <Item>
                            <div className='detail_content'>
                                게시글 상세 내용
                            </div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <Item>
                            <div className='detail_comment'>
                                공감<br/>
                                댓글
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default detail;