// import { makeStyles } from '@mui/material/styles';
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import TaskIcon from '@mui/icons-material/Task';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { format } from 'date-fns';



const drawerWidth = 240;


const View = ({ children }) => {

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar variant="dense"  sx={{ mb:1 }}>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        { format(new Date(), 'do MMM Y')}
                    </Typography>

                    <Typography sx={{ mt:1 }}>
                        Juliet
                    </Typography>
                    <Avatar alt="Juliet" src="/avatar.png" sx={{ ml:2 }}/>

                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <Link to="/">
                        <ListItem>
                            <ListItemIcon><TaskIcon /> </ListItemIcon>
                            <ListItemText primary="My Tasks" />
                        </ListItem>
                    </Link>

                    <Link to="/create">
                        <ListItem>
                            <ListItemIcon><SaveAsIcon /> </ListItemIcon>
                            <ListItemText primary="Create Task" />
                        </ListItem>
                    </Link>
                </List>

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
            >
                <Toolbar />
                <div>
                    {children}
                </div>
            </Box>
        </Box>
    );
};

export default View;
