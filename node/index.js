const express = require('express');
const app = express();
const server = 8000;
const Gravity_members = require("./database/schema")
require("./database/connection");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const bcrypt = require('bcrypt')


app.post('/registtation', async (req, res) => {


    console.log("finally reach")
    const pass = req.body.password;
    const cpass = req.body.confirmpassword;


    try {

        if (pass == cpass) {

            const document_instance = new Gravity_members({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            })
            console.log(document_instance)
            document_instance.genratetoken();
            await document_instance.save()
            res.status(200).send("complete")
        }
    } catch (err) {
        console.log(err)
    }

})
app.post('/login', async (req, res) => {
    try {
        const mail = req.body.username;
        const password = req.body.password;


        const instance_data = await Gravity_members.findOne({ email: mail });

        const bool = bcrypt.compare(password, instance_data.password)
        if (bool) {
            const login_token = await instance_data.genratetoken();
             await instance_data.save();
            res.cookie("login_jwt", login_token,{expire : new Date() + 600000})
            res.status(200).send()
        } else {
            res.send(window.alert("plz enter your valid password of your id"))
        }
    } catch (err) {
        console.log(err)
    };
})
app.listen(server, () => { console.log("listening to the server port ") });


