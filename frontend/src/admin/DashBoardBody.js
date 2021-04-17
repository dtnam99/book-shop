import React, { useEffect, useState } from 'react'
import './../App.css'
import './../Styles/Dashboard.css'
import classNames from 'classnames'
import DashBoardHeader from './DashBoardHeader'
import DashBoardUser from './UserManagement/DashBoardUser'
import DashBoardGenre from './GenreManagement/DashBoardGenre'
import DashBoardGenreCreate from './GenreManagement/DashBoardGenreCreate'

export default function DashBoardBody(props) {

    const tabId = props.tabId;
    const [toast, setToast] = useState(false)
    const [isChange, setIsChange] = useState(false)
    const [product, setProduct] = useState({})
    const [news, setNews] = useState({})
    const [user, setUser] = useState({})
    const [order, setOrder] = useState({})
    const [collection, setCollection] = useState({})
    const [email, setEmail] = useState([])

    const setToastFunc = (bool) => {
        setIsChange(true)
        setTimeout(()=>{
            setIsChange(false)
        }, 100)
        setToast(true)
        setTimeout(()=>{
            setToast(false)
        }, 3000)
    }
    const openMenuMobile = props.openMenuMobile;
    
    return (
        <div 
        className={classNames("DashboardBody", {
            DashboardBody_small: !props.openMenu
    })}>          
        {
            !openMenuMobile && 
            <div 
                className="DashboardBody-closemenu"
                onClick={props.setOpenMenuOnClick}
            ></div>
        }
        { (props.openCreate && tabId === "5") &&
                <DashBoardGenreCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
        <DashBoardHeader
            itemName= {props.menuItems[tabId-1].name}
            setOpenMenuOnClick = {props.setOpenMenuOnClick}
            openMenu = {props.openMenu}
            orderNotice = {props.orderNotice}
        />
        {
                tabId === "5" && 
                <DashBoardGenre
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
         {
                tabId === "6" && 
                <DashBoardUser
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
    </div>
    )
}