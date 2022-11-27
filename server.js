const express = require("express");
const app = express()
app.use(express.static("public"))
const cors = require("cors");
const fs = require("fs")

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
}));

const salvar = (dado, arquivo) => {
    const finished = (error) => {
        if (error) {
            console.error(error)
            return;
        }
    }
    const dadojson = JSON.stringify(dado)
    fs.writeFile(arquivo, dadojson, finished)
}

app.listen(3000, () => console.log("Servidor pronto"))

app.get("/12345", function (req, res) {
    res.status(200).json("Informação recebida");
    console.log(req.query.data);
    salvar(req.query.data, "coords.json");

})

app.get("/bus1", function (req, res) {
    res.sendFile(__dirname + "/coords.json");
})









