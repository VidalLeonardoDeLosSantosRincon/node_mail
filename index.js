(function(){
    const express = require("express");
    const app = express();
    const path = require("path");
    const port = process.env.PORT || 3000;
    
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    
    //routes
    app.use(require("./src/routes/index"));

    app.use(express.static(path.join(__dirname,"public")));

    app.listen(port, ()=>{
        console.log("server started in port: ",port);
    });
})();