"Use strict";

module.exports = new function ()
{
    const input = process.argv.slice(2);
    let output = {}

    input.forEach(arg => {
        let item=(arg.split('='));
        let key = item[0];
        let value = item[1];
        
        output [ key ] = value;

        // console.log(`KEY : ${key}\nVALUE : ${value}\n\n`);
        
    });

    return output;
}
