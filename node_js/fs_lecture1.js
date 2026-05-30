const fs = require("fs");

fs.writeFile("file.txt" , "still there" ,function(err){
    if(err) console.error(err);
    else console.log("all done") 
} )
                           
fs.copyFile("notes.js" , "./copy/chacha.txt" , function(err){
  if(err) console.log(err);
  else console.log("copyed")
  
} )


// fs.unlink("./copy/chacha.txt" , function(err){
//   if(err) console.error(err);
//   else console.log("file deleated");
// })



fs.rm("./copy" , {recursive: true} , function(err){
  if(err) console.error(err);
  else console.log("file deleted");
  
})

