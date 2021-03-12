let excuses = [
    "הכלב אכל את שיעורי הבית שלי", 
    "נפל לי האינטרנט בבית", 
    "היה לי קלקול קיבה"
];

let i = 0;
function moreExcuse () {
    document.getElementById('excuseContent').innerText = excuses[i];
    i++;
    if (i == excuses.length) {
        i = 0;
    }
}

