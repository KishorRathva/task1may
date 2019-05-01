const fs = require('fs');
fs.readFile('./discovery.json',(err,data) => {
    if(err) throw err;
    let projects = JSON.parse(data);
    let result = {};
    // projects.forEach(element => {
    //     console.log(element._source.project1);
    // });
    console.log(projects.length);
    for(let i = 0;i< projects.length-1;i++){
        for(let j=1;j<projects.length;j++){
            // console.log(projects[i]._source.project1);
            // console.log(projects[j]._source.project1);
           

            if(projects[i]._source.project1 === projects[j]._source.project1){
                
                    result[projects[i]._source.project1] = [];
                    if(projects[i]._source.column1 !== projects[j]._source.column2){
                        result[projects[i]._source.project1].push(projects[i]._source.column1);
                        result[projects[i]._source.project1].push(projects[i]._source.column2);
                    }else{
                        result[projects[i]._source.project1].push(projects[i]._source.column1);
                    }
                       
            }
            if(projects[i]._source.project1 === projects[j]._source.project2){

                result[projects[i]._source.project1] = [];
                if(projects[i]._source.column1 !== projects[j]._source.column2){
                    result[projects[i]._source.project1].push(projects[i]._source.column1);
                    result[projects[i]._source.project1].push(projects[i]._source.column2);
                }else{
                    result[projects[i]._source.project1].push(projects[i]._source.column1);
                }
            
            }
            if(projects[i]._source.project2 === projects[j]._source.project2){

                result[projects[i]._source.project1] = [];
                if(projects[i]._source.column1 !== projects[j]._source.column2){
                    result[projects[i]._source.project1].push(projects[i]._source.column1);
                    result[projects[i]._source.project1].push(projects[i]._source.column2);
                }else{
                    result[projects[i]._source.project1].push(projects[i]._source.column1);
                }
            
            }

            
        }
    }
    console.log(result);
});

console.log('After reading...')