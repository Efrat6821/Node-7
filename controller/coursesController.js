const { Router } = require('express'); 
const app = Router();
const courses = require('../Data/Courses.js');

//פונקציה לקבלת פרטי כלל הקורסים
app.get('/courses',(req,res)=>{
    res.send(courses);
});

app.get('/courses/query', (req, res) => {
    try{
        const courseName = req.query.courseName;
        // if(courseName==null){
        //     //console.log();
        //     return res.status(500).send("courseName is undifind")
        // }
        const courses_result = courses.filter(c => c.courseName.includes(courseName));
        if (courses_result.length < 1) {
            return res.status(200).send('No cours matched your search');
        }
        res.json(courses_result);
    }
    catch(error){
        console.log("status kode 500 in courses");
        res.status(500).send("There is currently an error On the server, try again later");
    }
    
   

   
});

module.exports = app;