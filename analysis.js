
let data = {Synonyms:0, Related:0, "Near Antonyms":0, Antonyms:0};

let fs = require("fs");
let words = require("./words.json");

let p = new Promise((Resolve, Reject) => {
    fs.readFile("Optimism_and_your_health.txt","utf-8", function(err, input) {
        if (err){
           Reject("Error reading file");
        }
        else if(input){
            Resolve(input.toString().toUpperCase());
        }
    
    });
    
})

p.then((input) => {
    count(input);

}).catch((messege) => {
    console.log(messege);
})

function count(textfile){

    for(let i = 0; i < words.Synonyms.length; i++){
        let nextInd = -1
        while(true){
            nextInd = textfile.indexOf(words.Synonyms[i].toUpperCase(), (nextInd + 1))
            if(nextInd == -1){
                break;
            }
            else{
                data.Synonyms = data.Synonyms+1
            }
        }
    }

    for(let i = 0; i < words.Related.length; i++){
        let nextInd = -1
        while(true){
            nextInd = textfile.indexOf(words.Related[i].toUpperCase(), (nextInd + 1))
            if(nextInd == -1){
                break;
            }
            else{
                data.Related = data.Related+1
            }
        }
    }

    for(let i = 0; i < words["Near Antonyms"].length; i++){
        let nextInd = -1
        while(true){
            nextInd = textfile.indexOf(words["Near Antonyms"][i].toUpperCase(), (nextInd + 1))
            if(nextInd == -1){
                break;
            }
            else{
                data["Near Antonyms"] = data["Near Antonyms"]+1
            }
        }
    }
    for(let i = 0; i < words.Antonyms.length; i++){
        let nextInd = -1
        while(true){
            nextInd = textfile.indexOf(words.Antonyms[i].toUpperCase(), (nextInd + 1))
            if(nextInd == -1){
                break;
            }
            else{
                data.Antonyms = data.Antonyms+1
            }
        }
    }
    fs.writeFile("result.txt",JSON.stringify(data), function(err) {
        if (err){
           console.log("Error saving file");
        }
    });
}





