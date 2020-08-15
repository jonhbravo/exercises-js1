const numberOfStudents = 10;

const numberOfMentors = 3;

const total = numberOfStudents + numberOfMentors;

const percentageOfStudents = Math.round((100 * numberOfStudents) / total);

const percentageOfMentors = Math.round((100 * numberOfMentors) / total); 


console.log("Percentage mentors: " + percentageOfStudents + "%");

console.log("Percentage students: " + percentageOfMentors + "%");