function ms() {
    let time = Date.now()
    return time
}
function ss() {
    let time = Date.now()/6
    return time
}
function mcs() {
    let time = Date.now()*1000
    return time
}

module.exports = { ms, ss, mcs }
