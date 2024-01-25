const parseEnv = () => {
    const variables = process.argv.slice(2);
    if(variables.length === 0) return  console.log('You dont have any variables');
    let result = [];
    variables.forEach((el) => {
        if(el.slice(0, 4) === 'RSS_'){
            result.push(el)
        };
    })
    if(result.length=== 0) return  console.log('You dont have variables with prefix RSS_');
    console.log(result.join('; '));
};

parseEnv();