function customParser(str) {
    return /^\d+.?\d+$/.test(str.trim()) ? +parseInt(str) : NaN;
}

console.log(customParser("10.322 "));