import express from 'express'
import {prisma} from "./lib/prisma.js"
const app = express();



app.get("/", async(req, res) => {

  const users = await prisma.user.createMany({
    data: {
      name: "Raj",
      age: 20,
      email: "raaz.r@gmail.com"
    }
  })


  const userCount = await prisma.user.count();

  

  res.json({
    message: "Welocome to the Count page",
    count: userCount
  })
})




app.listen(4000, () => {
  console.log(`SRVR is running...`)
})