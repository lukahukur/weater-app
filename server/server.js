import request from 'request'
import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 6969;
app.use(bodyParser.json());
 app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods',"GET,POST");
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
 })


//gzavni res it
app.get('/:city/:type',async(req,res)=>{
    const {address,port,family} = req.socket.address()
    console.log(address,port,family,'is calling')
    request({
        url:`https://api.openweathermap.org/data/2.5/${req.params.type}?q=${req.params.city}&units=metric&appid=1367973a35055f31af8c58d0f87f7581`,
        json:true
    },(err,response,body)=>{
            if(err){
               res.send(err.message)
            }
            else{
            res.send(body)
            }
    });


});



app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})



