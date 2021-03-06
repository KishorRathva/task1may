const fs = require('fs');
let result = {};
fs.readFile('./discovery.json',(err,data) => {
    if(err) throw err;
    let projects = JSON.parse(data);
   
    // projects.forEach(element => {
    //     console.log(element._source.project1);
    // });
    console.log(projects.length);
    for(let i = 0;i< projects.length-1;i++){
        result[projects[i]._source.project1] = new Set();
        for(let j=1;j<projects.length;j++){
        
            if(projects[i]._source.project1 === projects[j]._source.project1){
                
        
                    if( ! result[projects[i]._source.project1] instanceof Set)
                        result[projects[i]._source.project1] = new Set();
                  
                    result[projects[i]._source.project1].add(projects[j]._source.column1);
                    result[projects[i]._source.project1].add(projects[i]._source.column1);
                    
                       
            }
            if(projects[i]._source.project1 === projects[j]._source.project2){

                if( ! result[projects[i]._source.project1] instanceof Set)
                    result[projects[i]._source.project1] = new  Set();
              
                result[projects[i]._source.project1].add(projects[i]._source.column1);
                result[projects[i]._source.project1].add(projects[j]._source.column2);
                
            
            }
            if(projects[i]._source.project2 === projects[j]._source.project2){

                if( ! result[projects[i]._source.project1] instanceof Set)
                    result[projects[i]._source.project1] = new Set();
              
                result[projects[i]._source.project1].add(projects[i]._source.column2);
                result[projects[i]._source.project1].add(projects[j]._source.column2);
             
            
            }

            
        }
        result[projects[i]._source.project1] = Array.from(result[projects[i]._source.project1]);;
    }
    
    
    console.log(`aml_investigation:${result['aml_investigation'].length}`);
    console.log(`aml_investigation_2:${result['aml_investigation_2'].length}`);
    console.log(`payment_flows:${result['payment_flows'].length}`);
    console.log(`payment_transactions:${result['payment_transactions'].length}`);
    fs.writeFileSync('output.json', JSON.stringify(result));  
});

console.log('After reading...')