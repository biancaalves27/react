    document.addEventListener("DOMContentLoaded", function() {
        const executar = document.querySelector(".texto");
        const buttons = document.querySelectorAll(".buttons button");
    
        buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;
    
            if (value === "=") {
            try {
                executar.value = eval(executar.value);
            } catch (error) {
                executar.value = "Erro";
            }
            } else if (value === "C") {
            executar.value = "";
            } else {
            executar.value += value;
            }
        });
        });
    
        document.addEventListener("keydown", function(event) {
        const key = event.key;
    
        if (/[0-9+\-*/.=]/.test(key)) {
            if (key === "=") {
            try {
                executar.value = eval(executar.value);
            } catch (error) {
                executar.value = "Erro";
            }
            } else if (key === "Enter") {
            try {
                executar.value = eval(executar.value);
            } catch (error) {
                executar.value = "Erro";
            }
            } else if (key === "c" || key === "C") {
            executar.value = "";
            } else {
            executar.value += key;
            }
        }
        });
    });