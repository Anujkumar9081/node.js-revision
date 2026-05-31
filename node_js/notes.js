
// what is fileSytem , http , path = these are the node js module  
              // File System;

// let data = require("fs");

//  1 require =  in build function  in the node.js

//  2 inside the require we have filesystem (fs) that is  object 
 
//  3 after we store in the data type name fs so in  fs we have these thing:
//      1: writeFile = to create the file and give content 
//      2: appendFile  = update the content in the writeFile
//      3: rename = rename the file name that is create by writefile 
//      4. copyfile = to create the copy of the file 
//      5. unlike = deleat the file not folder 
//      6. rm = file delete 

// question: what is the differnt b/w unlike and rm both are use for delete some thing ?
// answer:   unlike is only delete the file()
//               ex = "./upload/photo.png"
//                       if i use unlike so it only delete the photo.png not upload folder
          
//           rm is delete every thing file , folder any content


           *** // Http  ***

const http = require("http");

const server = http.createServer(function(req, res) {
    res.end("Hello World");
});

server.listen(3000 , function(err){                       //  the function is call requstHandler
  if(err) console.error(err);                   
  else console.log("ever this is done");
  
});

crearteserver = it create the server 
whenever the user visit the server the function will run
request(req)  = the data recived form the user
responce(res)  = the data is transfer form the server 

3000 is the port. mean the addres of the computer 

Just like:
Building Address + Flat No  =  exact location
IP Address + Port           =  exact service


  point =  // npm  = node package manager

  what is

  1: dependencies = package and there package there dependencies
  2: devdependincies = these are the package that are use in the devlopment and after complete the project or   deploy we are not use these packages
                           

                              // express js
it is the npm package of the node js 
it is the fram work of the ndoe js 
it work to recving the request and giving the responce  

        // routing 

it decide what responce will send to the user when the user visit the website

// ex

const data = require("express");

const app = data();

app.get("/" , function(req , res){
  res.send("VedamSOT")
})

app.get("/portfolio" , function(req , res){
  res.send("Anuj Yadav")
})

app.listen(3000);

        //middleware

Middleware is a function that runs between the request and the response. 

User Request
      ↓
 Middleware
      ↓
 Route Handler
      ↓
 Response 

 //ex
 app.use(function(req , res , next){
  console.log("middleware")
next();
})