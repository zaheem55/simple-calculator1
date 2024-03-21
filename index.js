#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first name", type: "number", name: "firstnamber" },
    { message: "Ener second name", type: "number", name: "secondnumber" },
    {
        message: "Selet one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multipliction", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnamber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnamber - answer.secondnumber);
}
else if (answer.operator === "Multiplicaion") {
    console.log(answer.firstnamber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnamber % answer.secondnumber);
}
else {
    console.log("please select a valid operator");
}
