var fs=require('fs');
fs.writeFile("demoFile2.txt",'Hello World',function(err){
    //if(err) throw err;
    if (err) throw Number(err);
    console.log("Saved succrssfully");
});