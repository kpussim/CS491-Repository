import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const API_URL = "https://bored-api.appbrewery.com";

// Home: Get a random activity on first load
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/random`);
    res.render("index", { data: response.data, error: null });
  } catch (error) {
    res.render("index", { data: null, error: error.message });
  }
});

// Filter: Query by activity type and participants
app.post("/filter", async (req, res) => {
  try {
    const { type, participants } = req.body;
    const response = await axios.get(`${API_URL}/filter`, {
      params: { type, participants },
    });
    
    // API returns an array for /filter; pick a random one
    const results = response.data;
    const randomChoice = results[Math.floor(Math.random() * results.length)];
    res.render("index", { data: randomChoice, error: null });
  } catch (error) {
    // 404 indicates no activities match the criteria
    res.render("index", { 
      data: null, 
      error: "No activities found matching your criteria. Try another filter!" 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});