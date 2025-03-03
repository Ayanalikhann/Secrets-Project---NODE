import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}));

function checkpass(req,res,next){
    const pass=req.body["password"];
    if(pass==='ILoveProgramming'){
        res.sendFile(__dirname + '/public/secret.html');
    }else{
        res.redirect("/?error=wrong-password");
    }
}



app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    checkpass(req,res);
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});