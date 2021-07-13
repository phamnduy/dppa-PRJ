import React from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  
const HomeContainer = styled.div(({ theme }) => ({

}));


const Home = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [bottomValue, setBottomValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <HomeContainer>
         <h1>Home</h1>
        </HomeContainer>
    );
};

export default Home