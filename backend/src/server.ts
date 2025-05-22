import express from "express";
import cors from "cors";

const app = express();

//omogucavanje razgovora medju portovima
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

//definisanje get apija

app.get("/api/foods", (req, res) => {
    res.send("Hello from the server!");
});

//definisanje porta
const port = 5000;
app.listen(port, () => {
    console.log("Server is running on http://localhost:"  + port);
});