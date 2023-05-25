/* in this file  we are creating the route to get recent data sended by the user on route  /booking  */

const express = require('express')
const router = express.Router()
const controller = require("../Controller/movieController")

// this is the route to handle booking request
router.post("/booking", controller.storeBooking)
router.get("/booking", controller.getBooking)

module.exports = router