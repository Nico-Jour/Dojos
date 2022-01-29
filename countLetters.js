const countLetters = (str) => {
    const ar1 = str.split('');
    let result = {};

    ar1.map( char => { 
        console.log (result[char]);
        if( !result[char] ) {
            result[char] = 1 ;
        }else{
            result[char] += 1 ;
            console.log ("else");
        }
    });
        
    return result;
}




console.log( countLetters (`Maman j'ai raté l'avion`));

module.exports = countLetters;

//Nicolas/Angela
//Angela/Elodie
//Elodie/Claire
//Claire/Nicolas