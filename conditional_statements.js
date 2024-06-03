function checkdatatypes(x){
    if (typeof(x) === "number"){
        console.log(x + " "+"is a number");
    }
    else if (typeof(x) ==="string"){
        console.log(`${x} is a string`);
    }
    else {
        console.log(`type of ${x} is unknown `);
    }
}

checkdatatypes(6)
checkdatatypes("6")
checkdatatypes(6)

// a program to grade people

function gradesystem(grades){
    if(grades >=80){
        console.log(`you score an A`);
    }
    else if(grades >=60 && grades <= 80){
        console.log(`you score a B`)
    }
    else if(grades >=50 && grades<= 60){
        console.log(`you score a C`);
    }
    else if(grades >=40 && grades<= 50){
        console.log(`you score a c`)
    }
    else if(grades >=30 && grades<= 40){
        console.log(`you score a D`)
    }
    else{
        console.log(`you score an F`)
    }
}

gradesystem(90)
gradesystem(50)
gradesystem(40)
gradesystem(20)




