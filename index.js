// code your solution here
//test1
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun('bathe my dog');

//anonymous function use
// const button = doucument.getElementById("button");
// button.addEventListener("click", function (){
//     console.log("Yet more razzling");
// })

//test2
function mondayWork(plan = "go to the office"){
    return `This Monday, I will ${plan}.`;
}
mondayWork();
mondayWork('work from home');

//test3
function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}
