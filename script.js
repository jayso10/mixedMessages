let number = Math.floor(Math.random()* 13);
//console.log(number);

const messageGenerator = number => {
    switch(number){
        case 1:
            return "Aries \nYou love being Number One";
            break;
        case 2:
            return "Taurus \nYou're likely to take a six-hour bath";
            break;
        case 3:
            return "Gemini \nYou're Spontaneous,playful and adorably erratic";
            break;
        case 4:
            return "Cancer \nYou are highly intuitive";
            break;
        case 5:
            return "Leo \nYou are passionate,loyal and infamously dramatic";
            break;
        case 6:
            return "Virgo \nYou are logical,practical and systematic in your way of life";
            break;
        case 7:
            return "Libra \nBalance, Harmony and Justice defines Libra Energy";
            break;
        case 8:
            return "Scorpio \nYou are an elusive and mysterious person";
            break;
        case 9:
            return "Sagittarius \nYou know no bounds";
            break;
        case 10:
            return "Capricon \nYou are patient and dedicated";
            break;
        case 11:
            return "Aquarius \nYou are innovative,progressive and shameless";
            break;
        case 12:
            return "Pisces \nYou are intuitive, sensitive and empathetic";
            break;
        default:
            return "You don't exist \nYou are an alien";
            break;
    }
}

console.log(messageGenerator(number));