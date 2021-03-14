let excuses = [
    "לא היה כתוב בהנחיות", 
    "נפל לי האינטרנט בבית", 
    "יש לי בחילות",
    "אין לי מקום אחר בבית",
    "המנוי שלי פג תוקף",
    "במבחן הקודם לא עשו לי בעיות עם זה",
    "לא שמעתי בגלל האטמים",
    "מה אני אמור לעשות עכשיו 3 שעות?",
    "הציפור הפריעה לי"
];

let i = 0;
function moreExcuse () {
    document.getElementById('excuseContent').innerText = excuses[i];
    i++;
    if (i == excuses.length) {
        i = 0;
    }

    document.getElementById('next').innerText = "עוד תירוץ!";
}

