var countdown = document.getElementById("countdown")
const QuestionsArray = [
    {
        id: 1,
        question: "what is your name",
        Option1: "ali",
        Option2: "zain",
        Option3: "ahmed",
        Option4: "farhan",
        ans: "A"
    },
    {
        id: 2,
        question: "What is your current passion project? (2)",
        Option1: "A",
        Option2: "B",
        Option3: "C",
        Option4: "D",
        ans: "A"
    },
    {
        id: 3,
        question: "What is your current passion project? (3)",
        Option1: "A",
        Option2: "B",
        Option3: "C",
        Option4: "D",
        ans: "A"
    },
    {
        id: 4,
        question: "What is your current passion project? (4)",
        Option1: "A",
        Option2: "B",
        Option3: "C",
        Option4: "D",
        ans: "A"
    },
    {
        id: 5,
        question: "What is your current passion project? (5)",
        Option1: "A",
        Option2: "B",
        Option3: "C",
        Option4: "D",
        ans: "A"
    },
    {
        id: 6,
        question: "What is your current passion project? (6)",
        Option1: "A",
        Option2: "B",
        Option3: "C",
        Option4: "D",
    },
]

let QuizBox = document.getElementById("QuizBox")
let previous = document.getElementById("previous")
let next = document.getElementById("next")
var id = 0

const test = () => {
    QuizBox.innerHTML = `
<h4 id="question">${QuestionsArray[id].question}</h4>
<div class="option-box g-3 row m-0">

                <input type="radio" class="btn-check" name="radio btns"  value="${QuestionsArray[id].Option1}" id="option1">
                <label for="option1" class="btn btn-outline-success col-sm-6">${QuestionsArray[id].Option1}</label>

                <input type="radio" class="btn-check" name="radio btns" value="${QuestionsArray[id].Option2}" id="option2">
                <label for="option2" class="btn btn-outline-success col-sm-6">${QuestionsArray[id].Option2}</label>

                <input type="radio" class="btn-check" name="radio btns" value="${QuestionsArray[id].Option3}" id="option3">
                <label for="option3" class="btn btn-outline-success col-sm-6">${QuestionsArray[id].Option3}</label>

                <input type="radio" class="btn-check" name="radio btns" value="${QuestionsArray[id].Option4}" id="option4">
                <label for="option4" class="btn btn-outline-success col-sm-6">${QuestionsArray[id].Option4}</label>

`

    // const  count =()=>{

    //   var timeLeft = 15
    //    const timer =()=>{
    //      setInterval(()=>{
    //       if(timeLeft<= "0"){
    //         clearInterval(timer)
    //         countdown.innerHTML = 0
    //       }
    //       else{
    //         timeLeft--
    //         countdown.innerHTML = timeLeft
    //       }
    //       console.log("timeup")
    //   },1000)}

    //   timer()
    //   }

    //   count()
}



test()
var result = document.getElementById("result")

next.addEventListener("click", () => {
    id++
    test()
    var selected = document.querySelector(`input[name="radio btns"]:checked`.value)
    console.log(selected)
    
})

previous.addEventListener("click", () => {
    id--
    test()
    timer()
})




// var btn = document.getElementById("btn")
// var radioButton = document.querySelectorAll(`input[name="radio"]`)

// btn.addEventListener("click", () => {
//   let selectedSize;
//   for (const radioButton of radioButtons) {
//       if (radioButton.checked) {
//           selectedSize = radioButton.value;
//           break;
//       }
//   }
//   // show the output:
//   output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
// });