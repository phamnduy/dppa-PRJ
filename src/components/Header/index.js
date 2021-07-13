import React from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import BoCongThuong from '../../assets/images/1587973112-654729576-custom.png'
import ERAV from '../../assets/images/1587973016-668840127-vietnam-direct-power-purchase-agreement-pilot-program.png'
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  
const HeaderContainer = styled(Grid)(({ theme }) => ({
  width: '1170px',
  paddingRight: '15px',
    paddingLeft: '15p',
    marginRight: 'auto',
    marginLeft: 'auto'
}));


const Header = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [bottomValue, setBottomValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <HeaderContainer container justifyContent='space-between'>
         <Grid item xs={2} >
           <Grid container justifyContent='center' alignItems='center'>
             <img src={BoCongThuong}/> <br/>
             <img src={ERAV}/>
           </Grid>
         </Grid>
         <Grid item xs={7} container justifyContent='center'>
         <div > Vietnam Direct Power Purchase</div> 
         <div > Agreement Pilot Program</div>
         </Grid>
         <Grid item container xs={3} alignItems='flex-end' direction='column'>
           <h5>Countdown to Submission</h5>
           <h4>Closure</h4>
           <h5>Deadline for application:</h5>
           <h5>159 days</h5>
         </Grid>
        </HeaderContainer>
    );
};

export default Header