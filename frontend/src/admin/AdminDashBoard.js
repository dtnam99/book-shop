import React, { useContext, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter, Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@material-ui/styles';
import { faEnvelope, faFileInvoice, faHome, faInbox, faNewspaper, faShoppingBag, faTshirt, faUser } from '@fortawesome/free-solid-svg-icons'

import DashboardBody from './DashBoardBody'
import DashboardMenu from './DashBoardMenu'

const AdminDashBoard = withRouter(({ history }) => {
    const menuItems = [
        {
            id: "1",
            name: "Dashboard",
            icon: faHome
        },
        {
            id: "2",
            name: "Live Chat",
            icon: faInbox
        },
        // {
        //     id: "3",
        //     name: "Email",
        //     icon: faEnvelope
        // },
        {
            id: "3",
            name: "Orders",
            icon: faFileInvoice
        },
        {
            id: "4",
            name: "Products",
            icon: faTshirt
        },
        {
            id: "5",
            name: "Genres",
            icon: faNewspaper
        },
        {
            id: "6",
            name: "Users",
            icon: faUser
        },
        {
            id: "7",
            name: "Collection",
            icon: faShoppingBag
        },
        {
            id: "8",
            name: "Subscribers",
            icon: faEnvelope
        },
    ]

    const [tabId, setTabId] = useState("1");
    const [openMenu, setOpenMenu] = useState(true);
    const [openMenuMobile, setOpenMenuMobile] = useState(true);
    const [productId, setProductId] = useState("")

    // const socket = socketIOClient(ENDPOINT);

    const [orderNotice, setOrderNotice] = useState(null)
    const [userInfo, setUserInfo] = useState(null)




    const setTabIdOnClick = (id) => {
        setTabId(id);
    }

    const setOpenMenuOnClick = () => {
        if (window.innerWidth <= 1110) {
            setOpenMenu(true);
            if (openMenuMobile) setOpenMenuMobile(false);
            else setOpenMenuMobile(true);
        } else {
            if (openMenu) setOpenMenu(false);
            else setOpenMenu(true);
        }
    }

    const [openCreate, setOpenCreate] = useState(false)

    const setOpenCreateFunc = () => {
        document.body.style.overflow = 'hidden';
        setOpenCreate(true)
    }

    const setCloseCreateFunc = (bool) => {
        document.body.style.overflow = 'unset';
        setOpenCreate(bool)
    }

    const [openEdit, setOpenEdit] = useState(false)

    const setOpenEditFunc = (event) => {
        document.body.style.overflow = 'hidden';
        setOpenEdit(true)
        setProductId(event.target.id)
    }

    const setCloseEditFunc = (bool) => {
        document.body.style.overflow = 'unset';
        setOpenEdit(bool)
    }
    return (
        <div className="Dashboard flex">
            <DashboardMenu
                setTabIdOnClick={setTabIdOnClick}
                setOpenMenuOnClick={setOpenMenuOnClick}
                tabId={tabId}
                menuItems={menuItems}
                openMenu={openMenu}
                openMenuMobile={openMenuMobile}
                setCloseCreateFunc={setCloseCreateFunc}
                setCloseEditFunc={setCloseEditFunc}
                userInfo={userInfo}
            />
            <DashboardBody
                tabId={tabId}
                menuItems={menuItems}
                openMenu={openMenu}
                openMenuMobile={openMenuMobile}
                openCreate={openCreate}
                openEdit={openEdit}
                setOpenMenuOnClick={setOpenMenuOnClick}
                setOpenCreateFunc={setOpenCreateFunc}
                setCloseCreateFunc={setCloseCreateFunc}
                setOpenEditFunc={setOpenEditFunc}
                setCloseEditFunc={setCloseEditFunc}
                productId={productId}
                orderNotice={orderNotice}
            />
        </div>
    )

})
export default AdminDashBoard;