import express from "express";
import cors from "cors";
import { sample_foods } from "./data";

const app = express();

//omogucavanje razgovora medju portovima
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

//definisanje get apija

app.get("/api/foods", (req, res) => {
    res.send(sample_foods);
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
})

//definisanje porta
const port = 5000;
app.listen(port, () => {
    console.log("Server is running on http://localhost:"  + port);
});