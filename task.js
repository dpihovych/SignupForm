let znak = prompt("Введіть арефметичну дію: ")

function f1x(a, b) {
    if (znak === "+" || znak === "-" || znak === "*" || znak === "/") {
        return f2();
    }
}

function f2() {
    console.log("f2")
}

f1()