import { client } from "../db.js";

export function Getroom() {
    return client.db("guvi").collection("rooms").find({}).toArray();
}

export function createRoom(data){
    return client.db("guvi").collection("rooms").insertOne(data)
}