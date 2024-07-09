import mongoose from "mongoose";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverID } = req.params;
    const senderID = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, recieverID] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, recieverID],
      });
    }
    const newMessage = new Message({
      senderID,
      recieverID,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in SendMessage Controller: ", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatID } = req.params;
    const senderID = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderID, userToChatID] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    return res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessage Controller: ", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
