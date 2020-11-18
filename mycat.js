const readline = require('readline')
const fs = require('fs');    

if(process.argv.length==2)  {
    const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
    });
    rl.on('line', (input) =>  {
        console.log(input)
    });
    
} 

else if(process.argv.length==3){
const displayFile = (filename) => {

    const read = fs.createReadStream(filename);
    read.on('data', function(chunk) {
    
        console.log(chunk.toString())
    });
}
displayFile(process.argv[2])
}
else if (process.argv[2] === "-e") {
    var datacopy;
    let j = 0;
    fs.readFile(process.argv[3], 'utf8', function(err, data) {
      if (err) throw err;
      const lines = data.split(/\r?\n/);
      lines.forEach((line) => {
          console.log(line + "$");
      });

  });
}