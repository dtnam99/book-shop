import React, { useContext, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import BigNumber from 'bignumber.js';
import { 
    Typography, CssBaseline,
    AppBar, Toolbar, Menu, MenuItem,
    IconButton, Badge, Hidden, 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/Brightness2';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face';

import { APPLY_VI, APPLY_EN } from '../../constants/globalConstants';
import useStyle from './NavBar.styles'; // Must be imported after all @material-ui
import ThemeContext from '../../contexts/ThemeContext';
import CartOpenContext from '../../contexts/CartOpenContext';
import AuthOpenContext from '../../contexts/AuthOpenContext';
import RedirectOpenContext from '../../contexts/RedirectOpenContext';

import { signout } from '../../actions/userActions';

const NavBar = withRouter(({history}) => {
    const classes = useStyle();
    const [anchorAcc, setAnchorAcc] = useState(null);
    const isAccOpen = Boolean(anchorAcc);
    const [anchorUnknownAcc, setAnchorUnknownAcc] = useState(null);
    const isUnknownAccOpen = Boolean(anchorUnknownAcc);
    const [anchorLang, setAnchorLang] = useState(null);
    const isLangOpen = Boolean(anchorLang);
    const { isDarkMode, setDarkMode } = useContext(ThemeContext);
    const { setCartOpen } = useContext(CartOpenContext);
    const { setAuthOpen } = useContext(AuthOpenContext);
    const { setRedirectOpen } = useContext(RedirectOpenContext);
    const cart = useSelector(state => state.cart);
    const { userInfo } = useSelector(state => state.userSignin);
    const cartQuantity = useMemo(() => {
        const { cartList } = cart;
        return cartList.reduce((total, item) => total + new BigNumber(item.quantity).toNumber(), 0);
    }, [cart])
    const dispatch = useDispatch();

    const handleSignIn = () => {
        setAuthOpen(true); 
        handleMenuClose(); 
    }

    const handleSignOut = () => {
        dispatch(signout());
        handleMenuClose();
    }

    const handleLangOpen = (e) => {
        setAnchorLang(e.currentTarget);
    }

    const handleAccOpen = (e) => {
        setAnchorAcc(e.currentTarget);
    }

    const handleUnknownAccOpen = (e) => {
        setAnchorUnknownAcc(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorLang(null);
        setAnchorAcc(null);
        setAnchorUnknownAcc(null);
    }

    const chooseVietnamese = () => {
        dispatch({type: APPLY_VI});
        handleMenuClose();
    }

    const chooseEnglish = () => {
        dispatch({type: APPLY_EN});
        handleMenuClose();
    }

    const switchTheme = () => {
        setDarkMode(!isDarkMode);
        handleMenuClose();
    }

    const languageMenuId = 'language-menu';
    const renderLanguageMenu = (
        <Menu
            id={languageMenuId}
            open={isLangOpen}
            anchorEl={anchorLang}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={chooseVietnamese}>
                Ti???ng Vi???t
            </MenuItem>
            <MenuItem onClick={chooseEnglish}>
                English
            </MenuItem>
        </Menu>
    );

    const userAcountMenuId = 'user-account-menu';
    const renderUserAccountMenu = (
        <Menu
            id={userAcountMenuId}
            open={isAccOpen}
            anchorEl={anchorAcc}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <FormattedMessage id='my_account' defaultMessage="My Account" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <FormattedMessage id='setting' defaultMessage="Setting" />
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
                <FormattedMessage id='sign_out' defaultMessage="Sign Out" />
            </MenuItem>
        </Menu>
    );

    const unknownAcountMenuId = 'unknown-account-menu';
    const renderUnknownAccountMenu = (
        <Menu
            id={unknownAcountMenuId}
            open={isUnknownAccOpen}
            anchorEl={anchorUnknownAcc}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleSignIn}>
                <FormattedMessage id='sign_in' defaultMessage="Sign In" />
            </MenuItem>
        </Menu>
    );
   
    return(
        <>
        <CssBaseline />
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar position='relative'>
                    <Hidden smDown>  
                        <Link to='/' className={classes.link} style={{paddingLeft: '24px'}}>
                            <Typography className={classes.title} variant="h5" noWrap>
                                Atticus Literature
                            </Typography>
                        </Link>  
                    </Hidden>
                    <Hidden mdUp> 
                        <IconButton 
                            edge="start" className={classes.menuButton} 
                            color="inherit" aria-label="open drawer" 
                            onClick={e => setRedirectOpen(true)}>
                            <MenuIcon />
                        </IconButton> 
                        <Link to='/' className={classes.link}>  
                            <Typography className={classes.title} variant="h5" noWrap>
                                AL
                            </Typography>
                        </Link>
                    </Hidden>
                    <Hidden xsDown>  
                    <div className={classes.pagesSections}>
                        <Link to='/bookstore/' className={classes.link}>
                            <IconButton className={classes.noBorderRadius}>
                                <Typography variant='h6'>
                                    <FormattedMessage id='bookstore' defaultMessage='Bookstore'/>
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link to='/under_construction/' className={classes.link}>
                            <IconButton className={classes.noBorderRadius}>
                                <Typography variant='h6'>
                                    <FormattedMessage id='stories' defaultMessage='Stories'/>
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link to='/about_us/' className={classes.link}>
                            <IconButton className={classes.noBorderRadius}>
                                <Typography variant='h6'>
                                    <FormattedMessage id='about_us' defaultMessage='About us'/>
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link to='/admin_dashboard/' className={classes.link}>
                            <IconButton className={classes.noBorderRadius}>
                                <Typography variant='h6'>
                                    <FormattedMessage id='admin' defaultMessage='Admin'/>
                                </Typography>
                            </IconButton>
                        </Link>
                    </div>
                    </Hidden>
                    <div className={classes.grow} />
                    <div className={classes.iconsSection}>
                        <IconButton aria-label="show number of products in cart" color="inherit" onClick={e => setCartOpen(true)}>
                            <Badge badgeContent={cartQuantity} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>             
                        {
                            isDarkMode
                            ?
                            <IconButton onClick={switchTheme} aria-label="light theme" color="inherit" >
                                <SunIcon />
                            </IconButton>
                            :
                        
                            <IconButton onClick={switchTheme} aria-label="dark theme" color="inherit" >
                                <MoonIcon />
                            </IconButton>
                        }
                        <IconButton aria-label="switch language" aria-controls={languageMenuId} aria-haspopup="true" color="inherit" 
                            onClick={handleLangOpen}
                        >
                            <LanguageIcon />
                        </IconButton>
                        {
                            userInfo
                            ?
                            <IconButton edge="end" aria-label="account of current user" aria-controls={userAcountMenuId} aria-haspopup="true" color="inherit" 
                                onClick={handleAccOpen}
                            >
                                <FaceIcon />
                            </IconButton>
                            :
                            <IconButton edge="end" aria-label="account of unknown user" aria-controls={unknownAcountMenuId} aria-haspopup="true" color="inherit" 
                                onClick={handleUnknownAccOpen}
                            >
                                <AccountCircleIcon />
                            </IconButton>
                        }
                    </div>
                </Toolbar>
            </AppBar>
            {renderLanguageMenu}
            {renderUserAccountMenu}
            {renderUnknownAccountMenu}
        </div>
        </>
    )
})

export default NavBar;