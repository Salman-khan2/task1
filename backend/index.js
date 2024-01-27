const express = require("express");
require('./db/config');
const Employee = require('./db/Employee');
const cors = require('cors');


// Enable CORS

const app = express();

app.use(cors());
app.use(express.json());

app.get("/employee",async(req,res)=>{

    let data = await Employee.find();
    console.log(data);
    if(data.length > 0){
        res.send(data)
    }else{
        res.send({result : "No Result Found"});
    }

})

app.post("/create",async(req,res)=>{
    let data = new Employee(req.body);
    
    let result = await data.save();
    res.send(result);
})
app.get("/search/:key", async (req, res) => {
    const key = req.params.key;
    let result;
    const isNumeric = !isNaN(key);

    if (isNumeric) {
        result = await Employee.find({
            $or: [
                { name: { $regex: key, $options: 'i' } },
                { salary: { $eq: parseFloat(key) } }, 
            ]
        });
    } else {
        result = await Employee.find({
            name: { $regex: key, $options: 'i' },
        });
    }

    res.send(result);
});



app.delete("/employee/:id",async(req,res)=>{
    let result = await Employee.deleteOne({_id:req.params.id})
    res.send(result);
})

app.put('/employee/:id',async(req,res)=>{
    let result = await Employee.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    res.send(result)
})
app.get('/employe/:id',async(req,res)=>{
    let result = await Employee.findOne({_id:req.params.id})
    if(result){
        res.send(result);
    }
    else{
        res.send({result:"No Record Found"})
    }
})

app.put('/employee/:id',async(req,res)=>{
    let result = await Employee.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    res.send(result)
})

app.listen(4000)