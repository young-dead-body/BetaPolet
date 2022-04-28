function myFunction() {
let n = new Map;
var cde = new Array;
var buf = new Array;
var bufS = new String;
var bufSR = new Array;
var alf =["/", ".", ",", "_","q", "w", "e", "r","t", "y", "u", "i","o", "p", "a", "s", "d", "f", "g","h", "j", "k", "l", "z", "x", "c","v", "b", "n", "m"];
var alfR = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "/", ".", ",", "_"];
var chisla = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var exp=new String;
    exp = document.getElementById("in").innerText;

function simbl(str) {
    switch (str) {
        case "[": return 1;
        case "=": return 2;
        case ":": return 3;
        case "+": return 4;
        case " ": return 5;
        default: return 0;
    }
}
var cicle = 0;
function slovo(str, alb) {
    let ch;
    let stop;
    let arr = new String;
    for (var i = 0; i < str.length; i++) {
        if (simbl(str[i]) != 0) {
            bufS = bufS + simbl(str[i]);
            exp = str.substr(i + 1, str.length);
            break;
        }
        ch = str[i];
        for (let j = 0; j < alb.length; j++) {
            if (ch == alb[j] || ch == chisla[j])
                arr = arr + ch;
        }
    }
    cicle = simbl(str[i]);
    return arr;
}
var s = 0
f = 0;
var prov;

while (cicle != 4) {
    prov = slovo(exp, alf);
    console.log(prov);
    if (prov != '') {
        buf[s] = prov;
        s++;
    }
}
for (let ci = 0; ci < bufS.length; ci++) {
    if (bufS[ci] != 5) {
        bufSR[ci + f] = bufS[ci];
    } else f--;
}
var text= new String;
console.log("___________");
/*for (const am of buf) {
    console.log(am);
}
for (const ar of bufSR) {
    console.log(ar);
}*/
    for (const ar of bufS) {
        console.log(ar);}
 //for(let s=0;s<buf.length;s++){
 //text =`{"prev": { "name": ${buf[t]}, "param": 234.1}}`;
 //var stroka = JSON.stringify(test)
//console.log(cde);
   // exp = document.getElementById("in").innerText;
    text+=`{"${buf[0]}": {`
    for(var w=1;bufS[w]!="4";w++) {
        switch(bufS[w]) {
            case "1":{  text += `}, "${buf[w]}": {`; break;}
            case "2": { if(bufS[w+1]=="1" || bufS[w+1]=="3"){ text +=`: ${buf[w]} `} else {text +=`: ${buf[w]} ,`}; break;}
           // case "3": {text +=`}}`; break;}
            case "5": {text +=` "${buf[w]}" `;break;}
            default: text +=`}}`;
        }
    }
    console.log(text);
    document.getElementById("out").innerText = text;
    };
myFunction();
