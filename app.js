const submitBtn = document.querySelector(".submitBtn");
const inputs = document.querySelectorAll(".pas");

console.log(inputs);

const passNotMatch = document.querySelector(".passNotMatch");


submitBtn.addEventListener('click', function(){
    let pass = "";
    let confirmPass = "";
    inputs.forEach(input => {
        if (input.id === "password") {
            pass = input.value;
        } else if (input.id === "confirm_password") {
            confirmPass = input.value;
        }
    });

    if (pass !== "" && confirmPass !== "") {
        if (pass === confirmPass) {
            passNotMatch.textContent = "";
        } else {
            passNotMatch.textContent = "*Password does not match";
        }
    } else {
        passNotMatch.textContent = "Enter Password";
        
    }
});