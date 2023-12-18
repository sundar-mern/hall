import { client } from "../db.js";

export function Getbooking() {
    return client.db("guvi").collection("bookings").find({}).toArray();
}

export function createbooking(data){
    return client.db("guvi").collection("bookings").insertOne(data)
}

export function GetBookingsByCustomer(customerName) {
    return client.db("guvi").collection("bookings").find({ customer_name: customerName }).toArray();
}