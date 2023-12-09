import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader";
import Error from "../components/Error";


function Bookingscreen({ match }) {
    const { roomid } = useParams();
    // return(
    // <div>
    //     <h1>Booking screen</h1>
    //     <p>Room ID: {roomid}</p>
    // </div>
    // );

    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()
    const [room, setroom] = useState()

    async function populateRoom() {
        try {
            setloading(true)
            const data = (await axios.post("/api/rooms/getroombyid", { roomid })).data
            setroom(data)
            setloading(false)
        } catch (error) {
            seterror(true)
            console.log(error)
            setloading(false)
        }
    }
    useEffect(() => {
        populateRoom();
    }, []);


    return (
        <div className="m-5">
            {loading ? <Loader/> : room ?(
                <div >
                    <div className="row justify-content-center mt-5 bs">
                        <div className="col-md-6">
                            <h1>{room.name}</h1>
                            <img src={room.imageurl[0]} className="bigimg" />

                        </div >
                        <div className="col-md-6">
                            <div style={{textAlign : 'right'}}>
                                <h1>Booking Details</h1>
                                <hr />
                                <b>
                                    <p>Name : </p>
                                    <p>Form Date : </p>
                                    <p>To Date : </p>
                                    <p>Max Count : {room.maxcount}</p>
                                </b>
                            </div>

                            <div style={{textAlign : 'right'}}>
                                <b>
                                    <h1>Amount</h1>
                                    <hr />
                                    <p>Total days : </p>
                                    <p>Rent per day : {room.rentperday} </p>
                                    <p>Total Amount</p>
                                </b>
                            </div>
                            <div style={{float : 'right'}}>
                                <button className="btn btn-primary">Pay Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            ): <Error/>}
        </div>
    )



}

export default Bookingscreen;