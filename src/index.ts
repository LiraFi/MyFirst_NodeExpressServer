import Express, {Request, Response} from "express";


//creating server with Express
const app = Express();

app.use(Express.json());
//get method
app.get("/users", (req:Request, res:Response)=>{
  res.json("Hello!");
});

//post method
app.post("/users", (req:Request, res:Response)=>{
  
  res.json("Create a new user.");
});

//delete method
app.delete("/users/:id", (req:Request, res:Response)=>{
  res.json("Delete a user with particular ID.");
})

// assigning a port
const port = 8000;

//listen for connection
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);
});