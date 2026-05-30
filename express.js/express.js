const data = require("express");

const app = data();

app.get("/" , function(req , res){
  res.send("VedamSOT")
})

app.get("/portfolio" , function(req , res){
  res.send("Anuj Yadav")
})

app.listen(3000);