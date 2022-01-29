const anagram = (str1, str2) => {
    let ar1 = str1.replace(' ', '').toLowerCase().split('').sort().join('');
    let ar2 = str2.replace(' ', '').toLowerCase().split('').sort().join('');

    return ar1 === ar2;
};

module.exports = anagram;

// créer 2 tableaux de caractères 
// comparer les tableaux

// retirer les espaces
// mettre en lowercase
// faire un sort pour avoir la string
// faire un join pour ravoir une string
// comparer les 2 



//Nicolas/Angela
//Angela/Elodie
//Elodie/Claire
//Claire/Nicolas
