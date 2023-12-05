const { Router } = require('express'); 
const app = Router();
const Employees = require('../Data/Employee.js');

//פונקציה לקבלת עובד לפי התפקיד
app.get('/workers/query', (req, res) => {
    try{
    const role = req.query.role.toLowerCase();
    if(role==null){
        //console.log();
        return res.status(500).send("role is undifind")
    }
    const employee_result = Employees.filter(e => e.role.toLowerCase().includes(role));

    if (employee_result.length < 1) {
        return res.status(200).send('No workers matched your search');
    }
    res.json(employee_result);}
    catch(error){
        console.log("status kode 500 in the workers");
        res.status(500).send("There is currently an error On the server, try again later");
        
    }

});


//פונקציה לקבלת עובד בודד לפי קןד מזהה
app.get('/workers/:id', (req, res) => {
    const id = Number(req.params.id);
    const Worker = Employees.find(worker => worker.id === id);

        if (Worker!=undefined) {
         res.send(Worker);
    }
    else{
        res.send("worker dosn't exisct!");
    }
 
});




//פונקציה לקבלת כל העובדים
app.get('/workers',(req,res)=>{
    res.send(Employees);
});

module.exports = app;
