const palindrome = (text) => {
    const cleanText = text.toLowerCase().replace(/[^\wèéòàùì]/gi, '');
    return cleanText === cleanText.split('').reverse().join('');
}; 

palindrome(`Mamie ! j'ai raté l'avion ?`);
module.exports = palindrome;


//Nicolas/Angela
//Angela/Elodie
//Elodie/Claire
//Claire/Nicolas