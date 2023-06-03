function ms() {
    return Date.now()
}
function ss() {
    return Date.now()/6
}
function mcs() {
    return Date.now()*1000
}

module.exports = { ms, ss, mcs }