var digit = {
    exec: function (str, pos) {
        var chr = str.charAt(pos);
            return { simbol: chr, end: pos + 1};
    }
};
console.log(digit.exec("abcde", 0));

function Pattern(exec) {
    this.exec = exec;
}

function txt(text) {
    return new Pattern(function (str, pos) {
        if (str.substr(pos, text.length) == text)
            return  `[ text ]
 text: ${text}
 end: ${pos + text.length}`;
    });
}
console.log(txt("abcde").exec("abcde", 0));
