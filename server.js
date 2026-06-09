require('dotenv').config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/get-gallabox-token", async (req, res) => {

    try {

        const response = await axios.post(
            "https://server.gallabox.com/auth/v2/login",
            {
                email: "email",
                password: "password"
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {

        console.error(
            error.response?.data || error.message
        );

        res.status(500).json({
            error: "Unable to generate token"
        });
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});