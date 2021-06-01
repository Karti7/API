import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const UseEffectAPI = () => {

    const [user, setUser] = useState([])

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        setUser(await response.json())
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <h1 className="text-uppercase text-danger mt-2">API Random data Fetch</h1>
            <div className="container-fluid mt-2">
                <div className="row  text-center">

                    {
                        user.map((curElem) => {
                            return (

                                <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                    <div className="card p-2 border-primary">
                                        <div className="d-flex  align-item-center m-auto p-auto">
                                            <div class="row g-0">
                                                <div className="col-md-4 ">
                                                    <img src={curElem.thumbnailUrl} style={{height:"100%", width:"100%"}}alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{curElem.id}</h5>
                                                        <p className="card-text text-start text-capitalize">{curElem.title}</p>
                                                        <p className="card-text"><small className="text-muted">{curElem.url}</small></p>
                                                        <button className="btn btn-primary">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        })

                    }

                                </div>
            </div>
            </div>
    )
}

export default UseEffectAPI
