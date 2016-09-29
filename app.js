var express               = require("express"),
    app                   = express() 
    
// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));


//=================//
// ROUTES
//=================//

app.use("/", function(req, res){
   res.render("home"); 
});

app.use("*", function(req, res){
   res.redirect("/");
});

// PORT - STARTING THE SERVER 
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server started!") 
});

