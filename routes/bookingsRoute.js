const express = require("express");
const router= express.Router();
const Booking = require('../models/booking')

router.post("/bookroom", async(request,response)=>{
    const {
        room,
        userid,
        fromdate,
        todate,
        totalAmount,
        dateDifference
    } = request.body

    try {
        const newbooking = new Booking({
        room : room.name,
        roomid : room._id,
        userid,
        fromdate,
        todate,
        totalAmount,
        dateDifference,
        transactionId : '1234'
        })
        const booking = await newbooking.save();
        response.send('Room Booked Successfully')
    } catch (error) {
        return response.status(400).json({error})
    }
});

module.exports = router