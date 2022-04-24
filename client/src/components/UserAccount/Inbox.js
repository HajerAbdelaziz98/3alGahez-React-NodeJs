import React from 'react'
import kit from "../../images/undraw_Chatting_re_j55r.png"
import profile from "../../images/meal.png"
import Slide from "react-reveal/Slide"

const Inbox = () => {
    return (
        <>
            <Slide right>
                <div className='d-flex justify-content-around'>
                    <div className='col-9'>
                        <ul className="list-group">
                            <li className="list-group-item Head py-2">
                                <strong>
                                    Inbox
                                </strong>
                            </li>
                        </ul>
                        {/*  */}
                        <div className='px-2'>
                            <ul className="list-group pt-1">
                                <li className="list-group-item border-0">
                                    <div className='row d-flex justify-content-around'>
                                        <div className='col-2 p-1 d-flex justify-content-center align-items-center'>
                                            {/* <span className="rounded-circle bg-danger">img</span> */}
                                            <img src={profile} className="w-100 rounded-circle" alt="..."></img>
                                        </div>
                                        <div className='row col-9 border-left'>
                                            <h5 className='w-100'>
                                                Someone
                                            </h5>
                                            <p className='text-muted overflow-hidden' style={{ height: "30px" }}>
                                                lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-3 p-0 d-flex align-items-center'>
                        <img alt='test' src={kit} className='w-100'></img>
                    </div>
                </div>
                {/*  */}
            </Slide>
        </>
    )
}

export default Inbox;