function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = [];
    for(let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        const roundedGrade = Math.ceil(grade / 5) * 5;
        if(grade < 38 || roundedGrade - grade >= 3) {
            roundedGrades.push(grade);
        } else {
            roundedGrades.push(roundedGrade);
        }
    }
    return roundedGrades;
}