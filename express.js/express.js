const data = require("express")

const ans = data();
let value = false;

ans.use(function(req , res , next){
  value = true;
  if(value) console.log("it work")
  else console.log("it not work")
  next();
})

ans.get("/" , function(req , res){
  res.end("hii this is anuj")
})

ans.listen(3000);