module.exports = class {
    foobar(number) {
        if(number % 3 ===    0 && number % 5 ===    0) return "foobar"
        if(number % 3 ===    0) return "foo"
        if(number % 5 ===    0) return "bar"
        return number.toString()
    }
}