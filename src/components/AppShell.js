import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 'auto',
      marginLeft: '5px'
    }
})

class AppShell extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggle:false
      }
    }
  
    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    
    render() { 
        const { classes } = this.props;
        return (
            <div>
          <div className={classes.root}>
            <AppBar position="static">
                  <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={this.handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton> 
              </AppBar>
              <Drawer open={this.state.toggle}>
                <MenuItem onClick={this.handleDrawerToggle}>
                  <Link component={RouterLink} to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                  <Link component={RouterLink} to="/Texts">Texts</Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                  <Link component={RouterLink} to="/Words">Words</Link>
                </MenuItem>
              </Drawer>
          </div>
          <div id="content" style={{margin: 'auto', marginTop: '20px', marginLeft: 18, marginRight: 18}}>
              {React.cloneElement(this.props.children)}
          </div>
        </div>
    )
  }    
}

export default withStyles(styles)(AppShell);