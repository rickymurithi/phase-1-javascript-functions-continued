// code
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun())

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork())

function wrapAdjective(nester = '*') {
    return function (hook = 'special') {
        return `You are ${nester}${hook}${nester}!`
    }
}
console.log(wrapAdjective())