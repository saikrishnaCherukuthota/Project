let anualIcom = document.getElementById("input1");
let extraIncom = document.getElementById("input2");
let ageGroup = document.getElementById("input3");
let ded = document.getElementById("input4");

let w1 = document.getElementById("warning1");
let w2 = document.getElementById("warning2");
let w3 = document.getElementById("warning3");
let w4 = document.getElementById("warning4");

function membership(val) {
    let numList = "1234567890";
    for (let j of numList) {
        if (j === val) {
            return true;
        }
    }
    return false;
}

let incom1, incom2, age, deduction, tax;

let submit = document.getElementById("buttonSubmit");

anualIcom.addEventListener("keyup", function(event) {
    if (membership(event.key)) {
        incom1 = anualIcom.value;
        w1.classList.add("d-none");
    } else {
        w1.classList.remove("d-none");
    }

});

extraIncom.addEventListener("keyup", function(event) {
    if (membership(event.key)) {
        incom2 = extraIncom.value;
        w2.classList.add("d-none");
    } else {
        w2.classList.remove("d-none");
    }

});

ded.addEventListener("keyup", function(event) {
    if (membership(event.key)) {
        deduction = ded.value;
        w4.classList.add("d-none");
    } else {
        w4.classList.remove("d-none");
    }

});

ageGroup.addEventListener("change", function(event) {
    if (event.target.value === "0") {
        w3.classList.remove("d-none");

    } else {
        age = ageGroup.value;
        w3.classList.add("d-none");
    }
    console.log(event.target.value)

});

submit.addEventListener("click", () => {
    let amount = document.getElementById("amount");
    let total = parseInt(incom1) + parseInt(incom2) - parseInt(deduction);






    if (total < 800000) {
        total = total;
        amount.textContent = total;
    } else {
        if (age === "1") {
            tax = total * (0.3);

        } else if (age === "2") {
            tax = total * (0.4);
        } else if (age === "3") {
            tax = total * (0.1);
        }
        console.log(total, tax);
        amount.textContent = total - tax;

    }


});