
const gameBoard__display = document.querySelector(".gameBoard__display")
const btn_c = document.querySelector("#btn_c")
const btn_minusPilusConvert = document.querySelector("#btn_minusPilusConvert")
const btn_interest = document.querySelector("#btn_interest")
const btn_divide = document.querySelector("#btn_divide")
const btn_7 = document.querySelector("#btn_7")
const btn_8 = document.querySelector("#btn_8")
const btn_9 = document.querySelector("#btn_9")
const btn_multiple = document.querySelector("#btn_multiple")
const btn_4 = document.querySelector("#btn_4")
const btn_5 = document.querySelector("#btn_5")
const btn_6 = document.querySelector("#btn_6")
const btn_subtract = document.querySelector("#btn_subtract")
const btn_1 = document.querySelector("#btn_1")
const btn_2 = document.querySelector("#btn_2")
const btn_3 = document.querySelector("#btn_3")
const btn_pilus = document.querySelector("#btn_pilus")
const btn_0 = document.querySelector("#btn_0")
const btn_comma = document.querySelector("#btn_comma")
const btn_equal = document.querySelector("#btn_equal")
const numBtns = [btn_0,btn_1,btn_2,btn_3,btn_4,btn_5,btn_6,btn_7,btn_8,btn_9]
let displayedMsg = 0;
let clearedState = false
let logicMemory = 0 ;
let longNumberMemory = 0;
let commaMemory = false;
let commaMemoryCount = 0;
let lastEvent = "";
let firstTime = true
writeMsgDisplay(displayedMsg);
function writeMemory() {
    logicMemory = longNumberMemory
}
function handleByLastEvent(lastEvent) {
    if (firstTime) {
        logicMemory = longNumberMemory
        longNumberMemory = 0
        firstTime = false
    } else {
        if (lastEvent == "+") {
            logicMemory = logicMemory + longNumberMemory
            longNumberMemory = 0
        }
        else if(lastEvent == "-"){
            logicMemory = logicMemory - longNumberMemory
            longNumberMemory = 0
        }
        else if(lastEvent == "/"){
            logicMemory = logicMemory / longNumberMemory
            longNumberMemory = 0
        }
        else if(lastEvent == "*"){
            logicMemory = logicMemory * longNumberMemory
            longNumberMemory = 0
        }
        else if(lastEvent == "="){
            gameBoard__display.innerHTML = logicMemory
            resetCalculator()
        }
        else{
            logicMemory = longNumberMemory
        }
    }
    console.log("Handle event look bottom");
    testEveryThing()
}
function resetCalculator() {
 displayedMsg = 0;
 clearedState = false
 logicMemory = 0 ;
 longNumberMemory = 0;
 commaMemory = false;
 commaMemoryCount = 0
 btn_c.innerHTML = "C"
 lastEvent = "";
 firstTime = true
}
function writeMsgDisplay(msg) {
    gameBoard__display.innerHTML = msg
}
function changeCbtnState() {
    btn_c.innerHTML = "AC"
}

numBtns.forEach(btn => {
        btn.addEventListener("click",function (e) {
            changeCbtnState()
            if (!commaMemory) {
            longNumberMemory = longNumberMemory*10 + parseInt(btn.innerHTML)  
            writeMsgDisplay(longNumberMemory)
            }
            else{
                commaMemoryCount++
                longNumberMemory = longNumberMemory + parseInt(btn.innerHTML)/(10*commaMemoryCount)
                writeMsgDisplay(longNumberMemory)
            }
            console.log(" Number btn click event look bottom");
            testEveryThing()
        })

});

btn_comma.addEventListener("click",function (e) {
    commaMemory = true
})

// clear btn
btn_c.addEventListener("click",function (e) {
    resetCalculator()
    writeMsgDisplay(longNumberMemory)
})

//change minus pilus
btn_minusPilusConvert.addEventListener("click",function (e) {
    longNumberMemory = -1 * longNumberMemory
    writeMsgDisplay(longNumberMemory)
})

//adding 
btn_pilus.addEventListener("click",function (e) {
    lastEvent = "+"
    // firstTime ? writeMemory() :null
    // firstTime = false
    console.log("+ event look bottom");
    testEveryThing()
    handleByLastEvent(lastEvent)
})

//btn_subtract 
btn_subtract.addEventListener("click",function (e) {
    lastEvent = "-"
    // firstTime ? writeMemory() :null
    // firstTime = false
    console.log("- event look bottom");
    testEveryThing()
    handleByLastEvent(lastEvent)
})

//btn_multiple 
btn_multiple.addEventListener("click",function (e) {
    lastEvent = "*"
    // firstTime ? writeMemory() :null
    // firstTime = false
    console.log("* event look bottom");
    testEveryThing()
    handleByLastEvent(lastEvent)
})

//btn_divide 
btn_divide.addEventListener("click",function (e) {
    lastEvent = "/"
    // firstTime ? writeMemory() :null
    // firstTime = false
    console.log("/ event look bottom");
    testEveryThing()
    handleByLastEvent(lastEvent)
})

//btn_equal
btn_equal.addEventListener("click",function (e) {
    // firstTime ? writeMemory() :null
    // firstTime = false
    handleByLastEvent(lastEvent)
    lastEvent = "="
    handleByLastEvent(lastEvent)
})





























function testEveryThing() {
    console.log("LastState",lastEvent);
    console.log("MemeoryLogic",logicMemory);
    console.log("LongNumberMemory",longNumberMemory);
}