//Conductor Code
function conductor(name) {
    const arr = name.split('');
    let conductor = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '/') {
            continue;
        } else {
            const k = parseInt(arr[i], 10);
            conductor += k;
        }
    }

    while (conductor >= 10) {
        let temp = conductor;
        let k = 0;

        while (temp !== 0) {
            const rem = temp % 10;
            k += rem;
            temp = Math.floor(temp / 10);
        }

        conductor = k;
    }

    return conductor;
}
//Driver code
function driver(name) {
    let d = 0;

    for (let i = 0; i < 2; i++) {
        const ch = name.charAt(i);
        const k = parseInt(ch, 10);
        d += k;
    }

    if (d >= 10) {
        let temp = d;
        let k = 0;

        while (temp !== 0) {
            const rem = temp % 10;
            k += rem;
            temp = Math.floor(temp / 10);
        }

        d = k;
    }

    return d;
}
//nature
// Planet nature Code
function nature(n) {
    let str = "";
    
    switch (n) {
        case 1:
            str = `Planet: Sun 
*Kingship Nature, Does not like being under someone, Success comes late in life 
Dominating nature, Egoistic, Has good confidence, a little stubborn`;
            break;
        case 2:
            str = `Planet: Moon 
*Queenship Nature, Mindly attractive, Important - very emotional and sophisticated 
Creative ability, Suspecting nature, Possessive and Fluctuating nature`;
            break;
        case 3:
            str = `Planet: Jupiter 
*Self-control, Inclination toward spiritual, Knowledgeable person 
Discipline and obedient nature 
Advice to follow a vegetarian life, High moral value, Has good confidence, Gives good advice to others`;
            break;
        case 4:
            str = `Planet: Rahu  
*Short-tempered, Works against the system, Stubborn 
Manipulative nature, Highly intelligent, Good planner`;
            break;
        case 5:
            str = `Planet: Mercury 
*All-rounder, Has a large friend circle, Very calculative person 
Money-minded, High romantic 
Decent communication and a good entertainer, Good planner, Becomes a good business person`;
            break;
        case 6:
            str = `Planet: Venus 
*Loving nature and highly romantic, Creative person 
Likes movies and perfumes 
Opposite sex attraction, Fashion lover, Show off, Tries to live a luxury life`;
            break;
        case 7:
            str = `Planet: Ketu 
*Sophisticated, Likes travel, Good researcher 
Deep thinker 
Disappointment in one sector like finance, marriage, emotion, and health 
Remains disorderly`;
            break;
        case 8:
            str = `Planet: Saturn 
*Outspoken and Struggle in life, Believes in hard work 
Sad in extreme 
Money-minded, Slow starter, Has good confidence, Gives good advice to others`;
            break;
        case 9:
            str = `Planet: Mars 
*Aggression issue, Speaks harsh truth 
Less patient, Highly determinate 
Self-respect and self-esteem very important for such a person`;
            break;
    }

    return str;
}

//loshu Grid
function LoshuGrid(st) {
    const arr = Array.from({ length: 3 }, () => Array(3).fill(false));

    for (const i of st) {
        switch (i) {
            case 1:
                arr[2][1] = true;
                break;
            case 2:
                arr[0][2] = true;
                break;
            case 3:
                arr[1][0] = true;
                break;
            case 4:
                arr[0][0] = true;
                break;
            case 5:
                arr[1][1] = true;
                break;
            case 6:
                arr[2][2] = true;
                break;
            case 7:
                arr[1][2] = true;
                break;
            case 8:
                arr[2][0] = true;
                break;
            case 9:
                arr[0][1] = true;
                break;
        }
    }

    return arr;
}
// grid Checker Code
function gridchecker(arr) {
    const check = new Array(8).fill(false);

    for (let i = 0; i < 8; i++) {
        switch (i) {
            case 0:
                if (arr[0][0] && arr[0][1] && arr[0][2]) check[i] = true;
                break;
            case 1:
                if (arr[1][0] && arr[1][1] && arr[1][2]) check[i] = true;
                break;
            case 2:
                if (arr[2][0] && arr[2][1] && arr[2][2]) check[i] = true;
                break;
            case 3:
                if (arr[0][0] && arr[1][0] && arr[2][0]) check[i] = true;
                break;
            case 4:
                if (arr[0][1] && arr[1][1] && arr[2][1]) check[i] = true;
                break;
            case 5:
                if (arr[0][2] && arr[1][2] && arr[2][2]) check[i] = true;
                break;
            case 6:
                if (arr[0][0] && arr[1][1] && arr[2][2]) check[i] = true;
                break;
            case 7:
                if (arr[0][2] && arr[1][1] && arr[2][0]) check[i] = true;
                break;
        }
    }

    return check;
}
//loshu list
function loshulist(date, driver, conductor, namenumber) {
    const list = [driver, conductor, namenumber];

    for (let i = 0; i < date.length; i++) {
        const ch = date.charAt(i);
        const k = parseInt(ch, 10);

        if (ch === '0' || ch === '/') {
            continue;
        }

        list.push(k);
    }

    list.sort((a, b) => a - b);

    return list;
}
//name-number
function namenumber(name) {
    let num = 0;

    for (let i = 0; i < name.length; i++) {
        const ch = name.charAt(i);

        switch (ch) {
            case 'a':
            case 'i':
            case 'j':
            case 'q':
            case 'y':
                num += 1;
                break;
            case 'b':
            case 'k':
            case 'r':
                num += 2;
                break;
            case 'c':
            case 'g':
            case 'l':
            case 's':
                num += 3;
                break;
            case 'd':
            case 'm':
            case 't':
                num += 4;
                break;
            case 'e':
            case 'h':
            case 'n':
                num += 5;
                break;
            case 'u':
            case 'v':
            case 'w':
            case 'x':
                num += 6;
                break;
            case 'o':
            case 'z':
                num += 7;
                break;
            case 'f':
            case 'p':
                num += 8;
                break;
            default:
                num += 0;
        }
    }

    return num;
}
//loshu number
function loshunumber(a, b) {
    let str = "";

    switch (a) {
        case 1:
            if (b === 1) str = "Good in Communication but bad in Expression";
            else if (b === 2) str = "Good in Communication & good in Expression";
            else if (b === 3) str = "over talkative or very introvert";
            else if (b === 4 || b > 4) str = "conflict in Tongue and Contradict your talk";
            break;

        case 2:
            if (b === 1) str = "Emotionally Balanced and Family is Everything";
            else if (b === 2) str = "Emotionally intuitive and believe on it";
            else if (b === 3) str = "Overly sensitive and Overly Emotional . Do not Forget Thing Easily";
            else if (b === 4 || b > 4) str = "Prone to Depression , Extremely Sensitive and Emotionally";
            break;

        case 3:
            if (b === 1) str = "knowledge & learning nature , Honest and Creative , know how to deal person";
            else if (b === 2) str = "Good in Writing, inclined toward Spirituality , Show off About Knowledge , creative";
            else if (b === 3) str = "Day Dreamer , Argument with person , highly talkative";
            else if (b === 4 || b > 4) str = "overThinker, Over Emotional , Self-Obsessed , Consider Your-Self supreme ";
            break;

        case 4:
            if (b === 1) str = "practically Thinker , Creating Fixed Asset, May be Good Cooking Skill and painting skill";
            else if (b === 2) str = "Magic in your hand , Excellent observation skill and Organizational Skill, Do not like manipulative talk";
            else if (b === 3) str = "having in Struggle in professional and personal life";
            else if (b === 4 || b > 4) str = "May Choose Wrong Career . having high potential but not recognized";
            break;

        case 5:
            if (b === 1) str = "Excitement, loving nature, Suddenly anger but Easily cooldown, May be a Good Businessman";
            else if (b === 2) str = "Very lucky , high Convincing Power , high Willpower, over Explanation person";
            else if (b === 3 || b > 3) str = "over adventurous , over risk taken, like no one influence";
            break;

        case 6:
            if (b === 1) str = "look presentable , want luxury life, Responsible person, interest in music and art";
            if (b === 2) str = "creative, Attract toward opposite sex, Dominate nature, Attached with materialistic thing";
            if (b === 3 || b > 3) str = "Rude & harsh Behaviour , moody person, have insecurity , Doubtful nature, loving Nature , May have health problems";
            break;

        case 7:
            if (b === 1) str = "Dissatisfaction in any Field - family, person.  Broke heart in once a life";
            else if (b === 2) str = "Highly Intuitive power, having Problem in Marriage";
            else if (b === 3) str = "Prone to Affairs & cheating .  Indulge in Sexual activity";
            else if (b === 4 || b > 4) str = "Dissatisfaction in marriage, negative thinking";
            break;

        case 8:
            if (b === 1) str = "Multitasker , Good Decision maker , Respect Money , Slow & delayness, laziness";
            else if (b === 2) str = "Sometime instant Decision making , Not convenience easily, Always in hurry, fear of Betray, Store money in multiple places";
            else if (b === 3) str = "Stubborn & orthodox, Struggle in life, like Expensive things, greed of money";
            else if (b === 4 || b > 4) str = "Easily distract, life continuously changing, instability, May be living an unpurposeful life";

            break;

        case 9:
            if (b === 1) str = "spiritual, passionate toward work, Aggression issue but you control it, intelligent & creative";
            else if (b === 2) str = "Creative , Spiritual ,helping nature, Consider yourself as Supreme, Criticize nature";
            else if (b === 3) str = "Anger issue, Frustration issue, take hasty decisions , helping nature, like to be lonely";
            else if (b === 4 || b > 4) str = "high anger issue, not good in relationships, unbalanced nature";
            break;
    }

    return str;
}

//loshu data
function loshudata(arr) {
    const list = [];

    for (let i = 0; i < arr.length; i++) {
        switch (i) {
            case 0:
                if (arr[i]) {
                    list.push("Genius, work with a logical mindset");
                }
                break;

            case 1:
                if (arr[i]) {
                    list.push("Artistic, Money in life, Person thinks with the heart, \n the person is satisfied with life at 40, enjoys life");
                }
                break;

            case 2:
                if (arr[i]) {
                    list.push("Highly practical and analytic in life, Not Easily manipulated, having knowledge in life \n good Planner, Good in Financial matters");
                }
                break;

            case 3:
                if (arr[i]) {
                    list.push("Strong thought process, high vision life, having an organized and disciplined mind");
                }
                break;

            case 4:
                if (arr[i]) {
                    list.push("having high will power, Good Patience ");
                }
                break;

            case 5:
                if (arr[i]) {
                    list.push("Good at opportunity grabbing, Quick work done, prone to leg injury in life, less thinking and more working");
                }
                break;

            case 6:
                if (arr[i]) {
                    list.push("Extremely successful in life, Smartness, luxury, money");
                }
                break;

            case 7:
                if (arr[i]) {
                    list.push("Good in Financial management, Mental Stability, money in life, Hardworking person");
                }
                break;
        }
    }

    return list;
}
function missingnumber(arr) {
    const check = new Array(8).fill(true);

    for (let i = 0; i < 8; i++) {
        switch (i) {
            case 0:
                if (arr[0][0] || arr[0][1] || arr[0][2]) check[i] = false;
                break;
            case 1:
                if (arr[1][0] || arr[1][1] || arr[1][2]) check[i] = false;
                break;
            case 2:
                if (arr[2][0] || arr[2][1] || arr[2][2]) check[i] = false;
                break;
            case 3:
                if (arr[0][0] || arr[0][1] || arr[0][2]) check[i] = false;
                break;
            case 4:
                if (arr[0][1] || arr[1][1] || arr[2][1]) check[i] = false;
                break;
            case 5:
                if (arr[0][2] || arr[1][2] || arr[2][2]) check[i] = false;
                break;
            case 6:
                if (arr[0][0] || arr[1][1] || arr[2][2]) check[i] = false;
                break;
            case 7:
                if (arr[0][2] || arr[1][1] || arr[2][0]) check[i] = false;
                break;
        }
    }

    return check;
}
//missing data
function missingdata(arr) {
    const list = [];

    for (let i = 0; i < arr.length; i++) {
        switch (i) {
            case 0:
                if (arr[i]) {
                    list.push("Poor memory, Problems may arise after 25");
                }
                break;

            case 1:
                if (arr[i]) {
                    list.push("Lonely, Afraid, Emotionally unstable");
                }
                break;

            case 2:
                if (arr[i]) {
                    list.push("Failure & disappointment in love");
                }
                break;

            case 3:
                if (arr[i]) {
                    list.push("Confusion and stuck in temporary pleasure");
                }
                break;

            case 4:
                if (arr[i]) {
                    list.push("Depression and trying to make everyone happy");
                }
                break;

            case 5:
                if (arr[i]) {
                    list.push("Laziness");
                }
                break;

            case 6:
                if (arr[i]) {
                    list.push("Suspicious nature and trust issues");
                }
                break;

            case 7:
                if (arr[i]) {
                    list.push("Frustration and Stubbornness");
                }
                break;
        }
    }

    return list;
}
//numerology
function numerology(date, name) {
    const numerology = [];
    numerology.push(date);
    numerology.push(name);

    const driverValue = driver(date);
    numerology.push(driverValue.toString());

    const conductorValue = conductor(date);
    numerology.push(conductorValue.toString());

    numerology.push(nature(driverValue));

    name = name.toLowerCase();
    let nameresult = namenumber(name);
    let k = nameresult.toString();
    nameresult = driver(k);

    const list = loshulist(date, driverValue, conductorValue, nameresult);

    const mp = new Map();
    for (let i = 0; i < list.length; i++) {
        if (mp.has(list[i])) {
            mp.set(list[i], mp.get(list[i]) + 1);
        } else {
            mp.set(list[i], 1);
        }
    }

    for (const [key, value] of mp.entries()) {
        const temp = loshunumber(key, value);
        numerology.push(temp);
    }

    const set = new Set(list);
    const arr = LoshuGrid(set);
    const arr2 = gridchecker(arr);
    const plane = loshudata(arr2);

    for (let i = 0; i < plane.length; i++) {
        numerology.push(plane[i]);
    }

    const arr3 = missingnumber(arr);
    const missing = missingdata(arr3);

    for (let i = 0; i < missing.length; i++) {
        numerology.push(missing[i]);
    }

    return numerology;
}
function calculate() {
    // Get user inputs
    let dob = document.getElementById('dob').value;
    const name = document.getElementById('name').value;
    // Perform calculations (you can use your existing numerology function)
    dob = formatDOB(dob);
    const result = numerology(dob, name);
    typewriterEffect('result', result.join('\n'), 30);
    return result;
}
function typewriterEffect(elementId, text, speed) {
    const element = document.getElementById(elementId);
    let i = 0;

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '\n') {
                element.appendChild(document.createElement('br'));
            } else {
                element.appendChild(document.createTextNode(text.charAt(i)));
            }

            i++;
            setTimeout(type, speed);
        }
    }

    // Clear the element before starting
    element.innerHTML = '';

    // Start the typing animation
    type();
}
function formatDOB(datestring) {
    const date = new Date(datestring);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedYear = `${year}`;

    return `${formattedDay}/${formattedMonth}/${formattedYear}`;
}









