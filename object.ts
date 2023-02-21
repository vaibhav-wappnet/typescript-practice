let agentData1 = {
	agentName: "Reyna",
	agentType: "Duelist",
	age: 40,
};
console.log(agentData1);

// Creating interface for specifying the default data type
interface userTypes {
	agentName: string;
	agentType: string;
	age: number;
	getName: () => string;
}

let agentData2: userTypes = {
	agentName: "Omen",
	agentType: "Controller",
	age: 1000,
	getName: () => {
		return "Omen";
	},
};

console.log(agentData2);
console.log(agentData2.getName());
