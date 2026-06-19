document.querySelector("#calculateBtn")
.addEventListener("click", calculatePercentage);

document.querySelector("#resetBtn")
.addEventListener("click", resetForm);

function calculatePercentage(){

    let cgpa =
        parseFloat(document.querySelector("#cgpa").value);

    let grade =
        document.querySelector("#grade").value;

    if(isNaN(cgpa) || grade===""){
        alert("Please enter CGPA and select Grade.");
        return;
    }

    let percentage = 0;

    switch(grade){

        case "O":
            percentage = (20 * cgpa) - 100;
            break;

        case "A+":
            percentage = (12 * cgpa) - 25;
            break;

        case "A":
            percentage = (10 * cgpa) - 7.5;
            break;

        case "B+":
            percentage = (5 * cgpa) + 26.25;
            break;

        case "B":
            percentage = (10 * cgpa) - 2.5;
            break;

        case "C":
            percentage = (10 * cgpa) - 2.5;
            break;

        case "D":
            percentage = (6.6 * cgpa) + 13.6;
            break;
    }

    document.querySelector("#result").innerHTML =
        "Percentage = " + percentage.toFixed(2) + "%";
}

function resetForm(){

    document.querySelector("#cgpa").value = "";

    document.querySelector("#grade").selectedIndex = 0;

    document.querySelector("#result").innerHTML =
        "Result will appear here";
}