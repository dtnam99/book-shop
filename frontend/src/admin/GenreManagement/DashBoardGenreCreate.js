import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashBoardGenreCreate(props) {

    const createForm = useRef();
    
    const [id, setId] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const formData = new FormData();

        formData.append("id", id);
        
        axios.post(`/api/genres/new-genres`, formData, config)
        props.setCloseCreateFunc(false);
        props.setToastFunc(true);
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box"> 
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Genre infomation
                    </div>
                    <div  
                        className="create-box-title-close flex-center"
                        onClick={()=>{
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Name</div>
                        <div className="dashboard-right">
                            <input 
                                type="text" name="id" 
                                value={id || ""}
                                onChange={(event)=>{
                                    setId(event.target.value)
                                }} required
                                ></input>
                        </div>
                    </div>
                    <div className="flex-center" style={{marginTop: '40px'}}>
                        <button className="create-box-btn btn">
                            Create New Genre
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}