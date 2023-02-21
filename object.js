"use strict";
let agentData1 = {
    agentName: "Reyna",
    agentType: "Duelist",
    age: 40,
};
console.log(agentData1);
let agentData2 = {
    agentName: "Omen",
    agentType: "Controller",
    age: 1000,
    getName: () => {
        return "Omen";
    },
};
console.log(agentData2);
console.log(agentData2.getName());
