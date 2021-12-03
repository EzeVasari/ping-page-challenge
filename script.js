const d = document,
    $input = d.querySelector("input[type=email]"),
    $btn = d.querySelector(".btn-input"),
    $textError = d.querySelector(".text-error"),
    regexEmail = /(^$|^.*@.*\..*$)/;

$btn.addEventListener("click", checkEmail);
$input.addEventListener("keydown", checkEmail);

function checkEmail() {
    if ($input.value == "" || !regexEmail.test($input.value)) {
        $input.classList.add("border-error");
        $textError.classList.remove("none");
    } else {
        $input.classList.remove("border-error");
        $textError.classList.add("none");
    }
}