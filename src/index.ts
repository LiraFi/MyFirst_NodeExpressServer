import Express, {Request, Response} from "express";


//creating server with Express
const app = Express();

app.use(Express.json());

const userList=[
  {
    id:1, userName: "Aga", age:20
  },
  {
    id:2, userName: "Sam", age:25
  },
  {
    id:3, userName: "Linda", age:27
  },
]
//get method
app.get("/users", (req:Request, res:Response)=>{
  res.json(userList);
});

//post method
app.post("/users", (req:Request, res:Response)=>{
  const newUser = req.body;
  userList.push(newUser);
  console.log(userList);
  res.json(userList);
});

//delete method
app.delete("/users/:id", (req:Request, res:Response)=>{
  const userId=req.params;
  const result= userList.filter((user)=>user.id !== Number(userId.id));
  res.json(result);
})

// assigning a port
const port = 8002;

//listen for connection
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);
});