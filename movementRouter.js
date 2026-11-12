//also last session 11
const express = require("express");

const router = express.Router();
const movementController = require("../controllers/movementController");
router.post("/", movementController.createTicket);
router.get("/", movementController.getTickets);
//patch is used for partial updates
router.patch("/:id/stage", movementController.updateTicketStage);
router.patch("/:id/review", movementController.approveOrCancelTicket);
//export it
module.exports = router;