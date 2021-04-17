import { faPager } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import DashBoardGenreTable from './DashBoardGenreTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function DashBoardGenre(props) {

    const table = [
        "STT",
        "GenreName",
        "Action"
    ]
    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Update products successfully
            </div>
            <DashBoardGenreTable
                icon = {faPager}
                title = "Genre"
                color = "lightblue"
                table = {table}
                setOpenCreateFunc = {props.setOpenCreateFunc}
                setCloseCreateFunc = {props.setCloseCreateFunc}
                setOpenEditFunc = {props.setOpenEditFunc}
                setCloseEditFunc = {props.setCloseEditFunc}
                isChange = {props.isChange}
            />
        </div>
    )
}