function checkage(age){
    if(age>=18){
        console.log("elgible for vote");

    }else{
    console.log("Sorry, not elgible");
    }
}
    checkage(12);


function checkGrade(score){
    let grade;
    if(score>=90){
        grade = 'A';

    }else if(score>=80){
        grade = 'B';
    }else if (score>=70){
        grade = 'C';
    }else {
        grade = 'D';
    }
    console.log(grade);
}

checkGrade(95);
checkGrade(30);

