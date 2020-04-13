let code = {
    a: "._",
    b: "_...",
    c: "_._.",
    d: "_..",
    e: ".",
    f: ".._.",
    g: "__.",
    h: "....",
    i: "..",
    j: ".___",
    l: "._..",
    m: "__",
    n: "_.",
    o: "___",
    p: ".__.",
    q: "__._",
    r: "._.",
    s: "...",
    t: "_",
    u: ".._",
    v: "..._",
    w: ".__",
    x: "_.._",
    y: "_.__",
    z: "__..",
    "1": ".____",
    "2": "..___",
    "3": "...__",
    "4": "...._",
    "5": ".....",
    "6": "_....",
    "7": "__...",
    "8": "___..",
    "9": "____.",
    "0": "_____",
    characters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" , "o", "p" , "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
};

$(document).ready(function(){
    $("#field").keyup(fait);
    $("#point").on("click", point);
    $("#dash").on("click", dash);
    $("#space").on("click", space);
    $("#spacespace").on("click", spacespace);
});

function fait(){
    let text = $("#field").val();
    let arrayText = text.split(" ");
    let phrase = "";
    arrayText.forEach((word)=>{
        let letter = "";
        if (word === "/"){
            letter = " ";
        }else {
            code.characters.forEach((element) => {
                if (word === code[element]) {
                    letter = element;
                }
            });
        }
        phrase += letter;
    });
    //replace the text
    $("#text").text(phrase);
}
function point(){
    $('#field').val($('#field').val() + '.');
    fait();
}
function dash(){
    $('#field').val($('#field').val() + '_');
    fait();
}
function space(){
    $('#field').val($('#field').val() + ' ');
    fait();
}
function spacespace(){
    $('#field').val($('#field').val() + '/');
    fait();
}
