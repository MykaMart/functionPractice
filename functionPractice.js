// 1.

let product;

for (let i = 0; i <= 10; i++) {
 	product = i * 9;
 	console.log(product);
}

// 1. Bonus

let table

for (let i = 0; i <= 10; i++) {
 	for (m = 1; m <= 10; m++){
 		if (i > 0) {
		table = i * m
		console.log(i, "*", m, "=", table)
		}
 	}
 }

// 2.

const assignGrade = (numScore) => {

 	if (numScore >= 90) {
 		let letScore = "A";
 		console.log("For", numScore, "you got an", letScore)
 	} else if (numScore >= 80) {
 		let letScore = "B";
 		console.log("For", numScore, "you got a", letScore)
 	} else if (numScore >= 70) {
 		let letScore = "C";
 		console.log("For", numScore, "you got a", letScore)
 	} else if (numScore >= 60) {
 		let letScore = "D";
 		console.log("For", numScore, "you got a", letScore)
 	} else {
 		let letScore = "F";
 		console.log("For", numScore, "you got an", letScore)
 	}
 };

 // 3.

for (let s = 60; s <= 100; s++) {
	assignGrade(s);
}















