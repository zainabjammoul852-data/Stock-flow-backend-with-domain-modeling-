//also session 6
//here we want to contorl the movement of a items
//so we should be able to create ,see ,update, and cancel the tickets
//before writing the functions we need both item and stockmvement to use, so we will require them
const StockMovement = require("../models/StockMovement");
const Item = require("../models/Item");

exports.createTicket = async (req, res) => {
  try {
    const ticket = await StockMovement.create(req.body);
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTickets = async(req, res) => {
  try {// getting all data
    const tickets = await StockMovement.find().populate("originWarehouse destinationWarehouse", "name location").populate("items.item", "name itemCode").populate("createdBy approvedBy", "name role");
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};

exports.updateTicketStage = async(req, res)=> {
  try {
    const ticket = await StockMovement.findByIdAndUpdate(req.params.id,{ status: req.body.status },{ new: true });
    res.status(200).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.approveOrCancelTicket = async (req, res) => {
  try {//we can use this to request for things together
    const {status,approvedBy} = req.body; 
    const ticket = await StockMovement.findById(req.params.id);
    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" });
    }
    ticket.status = status;
    ticket.approvedBy = approvedBy;
    await ticket.save();
    if (status === "APPROVED") {
      for (const entry of ticket.items) {
        //using ternary operator here is shorter
        //"INBOUND" is a positive number, but "OUTBOUND" become a negative number
        const adjustment = ticket.type === "INBOUND" ? entry.quantity : -entry.quantity;
        //$inc --> increment
        await Item.findByIdAndUpdate(entry.item, { $inc: { quantity: adjustment } });
      }
    }
    res.status(200).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};