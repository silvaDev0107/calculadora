const $controls = document.querySelector(".controls")
const $display = document.querySelector(".display")
const $result = document.querySelector(".previous");
const $btn_dark = document.querySelector(".toggle-checkbox")


const buttons = [
    "C", "/", "*", "<",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    ".", "0", "00"
]

const renderButtons = ()=>{
    buttons.forEach(btn => {
        const button = document.createElement("button");
        button.className = "btn"
        if(!isNaN(btn)){
            button.classList.add("num")
        }
        button.id = btn
        button.textContent = btn
        $controls.appendChild(button)
    })
}

// Funcionalidad de modo oscuro
$btn_dark.addEventListener("change", ()=>{
    document.body.classList.toggle("dark")
})

renderButtons();

// Añadimos funcionalidad a los botones
const $buttons = document.querySelectorAll(".btn")
$buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        if(button.id === "C"){
            $display.value = "";
            $result.textContent = ""
        }else if(button.id === "="){
            if(!($display.value === "")){
                $result.textContent = eval($display.value)
            }
            
        }
        else{
            $display.value += button.id
        }
       
    })
})

