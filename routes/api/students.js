const router = require('express').Router();
const Student = require('../../db').Student;
const path = require('path');
const fs = require('fs');
var nodemailder = require('nodemailer');

var transporter = nodemailder.createTransport({
    service : 'gmail',
    auth : {
        user : 'mlhomefriend@gmail.com',
        pass : 'mlhome99'
    }
});

// For sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

// Building list for filtering process
const all_branches = ['CO','IT','SE','MC','EC','EE','EP','ME','PE','AE','CE','PS','BT','EN','MPAE','ICE'];
const all_batches = ['2K17','2K18'];
const all_colleges = ['DTU','NSIT'];

// Currently used for serving data 
router.post('/',function(req,res){
    console.log(req.body);
    obj = req.body;
    // For storing the data from the message body of the request 
    var branch_list = [];
    var batch_list = [];
    var college_list = [];

    // Iterate over the JSON object
    for(var key in obj){
        var current_value = obj[key];
        // If branch , add in branch list
        if(all_branches.indexOf(current_value)>=0){
            branch_list.push(current_value);
        }
        // else if batch , add in batch list
        else if(all_batches.indexOf(current_value)>=0){
            batch_list.push(current_value);
        }
        // else if college , add in college list
        else if(all_colleges.indexOf(current_value)>=0){
            college_list.push(current_value);
        }
    }

    console.log(branch_list);
    console.log(batch_list);
    console.log(college_list);

    Student.findAll(
        {
            attributes: ['index', 'Name','College','Branch','Batch','Email','Phone'],
            where: {
                Branch: branch_list,
                Batch : batch_list,
                College : college_list
                }
    })

    .then(function(students){
        res.send(students);
    })
    .catch(function(){
        res.status(500).send({
            error : 'Could not retrieve data.'
        })
    })
});

// Route for sending Email
router.post('/email',function(req,res){
    console.log(req.body);
    // Once the promise function is resolved then print the output of the promise function
    sendEmail(req.body.email,req.body.name,req.body.template_content,req.body.template_subject)
    .then(function(op){
        console.log(op);
    })
    .catch(function(err){
        console.log(err);
    });
    res.send("Email send");
});

function sendEmail(email,name,content,sub){
    console.log(email);
    console.log(name);
    console.log(content);
    console.log(sub);

    return new Promise(function(resolve,reject){

        var mailOptions = {
            from : 'mlhomefriend@gmail.com',
            to: 'tanishqsaluja18@gmail.com',
            subjet : sub,
            text : '',
            html : content
        }
    
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }else{
                resolve('Email Send.');    
            }
        })
        // When the message is delivered then do resolve(message), to notify it has done executing
    });
}

// Route for returning value of template file
router.post('/template',function(req,res){
    // File path for template email
    var filePath = path.join(__dirname+'/template'+req.body.option+'.html');
    var contents = fs.readFileSync(filePath).toString();
    var name = toTitleCase(req.body.name);
    contents =  "<h4>Dear, "+name+ "</h4>" + contents;
    res.send(contents);
});

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// Route for login
router.post('/login',function(req,res){
    console.log(req.body.name);
    console.log(req.body.pass);
    if(req.body.name == 'user' && req.body.pass == 'pass'){
        res.send('Success');
    }else{
        res.send('Failure');
    }
});

module.exports = router;