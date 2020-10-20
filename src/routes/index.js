(function(){
    const {Router} = require("express");
    const router  = Router();

    router.post("/", (request, response)=>{
        console.log(request.body);
        response.send("Recibido");
    })
  
    module.exports = router;
})();