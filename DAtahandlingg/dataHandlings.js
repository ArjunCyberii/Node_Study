const fs =require('fs')// Used for file Handling 
const path = require('path') //Used for calling paths in a directory  

// TO read a file in a Path
fs.readFile(path.join(__dirname,'data.txt'),'utf8',(err,data) => {
          if (err) throw err
          console.log(data)
});


//Create and write some content in this file 
fs.writeFile(path.join(__dirname,'CreateAfile.txt'),'This is how to create a file and write',(err)=>{
         if(err) throw err
         console.log("Writing Complete")
});



// Write , Append and Rename the file 
fs.writeFile(path.join(__dirname,'welcome.txt'),'Welcome to all I am Arjun of Selvadurai , I am currently pusuring B.Tech CCE ',(err) =>{
       if (err) throw err
       console.log("File 2 created")
      //Append
       fs.appendFile(path.join(__dirname,'welcome.txt'),' This file was addend the previous data is "Welcome to all I am Arjun of Selvadurai , I am currently pusuring B.Tech CCE" ',(err)=>{
        if (err) throw err
        console.log("File append Successfully")
        // Rename
        fs.rename(path.join(__dirname,'welcome.txt'),path.join(__dirname,'welcomeToAll.txt'),(err)=>{
            if (err) throw err
            console.log("Rename the file Successfully")
            
           })
       })
})

//After append and Rename the file , read the same file by using the previous file name 
//It will run but is show the prevoius file data 
fs.readFile(path.join(__dirname,'welcome.txt'),'utf8',(err,data)=>{
    if (err) throw err
    console.log(data)
});



// This Process is used for check the error in this code, if any error is occure it will throw the error
process.on('uncaughtException',err=>{
    console.error(`THere was an error:${err}`)
    process.exit(1)
})