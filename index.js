const fs = require("fs");
const readline = require("readline");
const cl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let questions = [
	'Task\n',
	'How to clone\n',
	'How to run\n',
	'Dependencies\n',
	'Author\n'
]

cl.question(questions[0], (answer0) => {
	cl.question(questions[1], (answer1) => {
		cl.question(questions[2], (answer2) => {
			cl.question(questions[3], (answer3) => {
				cl.question(questions[4], (answer4) => {
					
					let readme = `# ${questions[0]} ### ${answer0}\n\n ## ${questions[1]} ${answer1}\n\n ### ${questions[2]} **${answer2}**\n\n ### ${questions[3]} >${answer3}\n\n ### ${questions[4]} >${answer4}`;

					fs.writeFile('readme.md', readme, error => {
						if (error) {
							console.log(error)
							process.exit(0);
						}
						console.log('your readme file has been generated sucessfully');
						process.exit(0);
					});

				})
			})
		})	
	})
})