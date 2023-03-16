// DOM elements
const currentTodos = document.querySelector("#currentTodos")
const finishedTodos = document.querySelector("#finishedTodos")
const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput")
const clearButton = document.querySelector("#clearButton")

console.log(currentTodos, finishedTodos, todoForm, todoInput, clearButton) // check if any of your variables are null

// clear all child elements out of a given DOM element
const clearElement = element => {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

todoForm.addEventListener("submit", e => {      // great example of JS scope closure
    // stop the form from refreshing the page
    e.preventDefault()
    console.log("the form was submitted!")  // stubbing out and testing as you go
    console.log(todoInput.value)    // double check that you're able to access the text field from the form
    // create a new li
    const newTodoLi = document.createElement("li")  // "make new feature"
    const finishTodoButton = document.createElement("button")
    // set the li's inner text to be what the user typed
    newTodoLi.innerText = todoInput.value
    // set properties of button
    finishTodoButton.innerText = "Finish"
    finishTodoButton.addEventListener("click", () => {
        // remove newTodoLi from current todos
        currentTodos.removeChild(newTodoLi)
        // remove button from the newTodoLi
        newTodoLi.removeChild(finishTodoButton)
        // cross out finished todo with css
        newTodoLi.style.textDecoration = "line-through"
        // append newTodoLi to finished Todos
        finishedTodos.appendChild(newTodoLi)

    })
    // append the todo to the current todos & append the button to the newTodoLi
    newTodoLi.append(finishTodoButton)
    currentTodos.append(newTodoLi)
    // clear out the text of the input
    todoInput.value = ""
})


clearButton.addEventListener("click", () => {
    console.log("the clear button was clicked!")    // console logging to double check that things are working properly
    // clears out both todo lists
    clearElement(currentTodos)
    clearElement(finishedTodos)
})



// const submitButton = document.querySelector("#submitButton")
// const clearButton = document.querySelector("#clearButton")
// const finishedTodos = document.querySelector("#finishedTodoList")
// const formInput = document.querySelector("#formInput")
// const currentList = document.querySelector("#currentTodoList")
// const todoItem = document.querySelector("#userInput").value

// console.log(submitButton)

// submitButton.addEventListener("click", () => {
//     console.log(todoItem)
//     const li = document.createElement("li")
//     li.innerText = todoItem
//     currentList.append(li)

// document.querySelector("#formInput").addEventListener("submit", function(e) {
    
//         e.preventDefault()
//     })
// })

// document.querySelector("#clearButton").addEventListener("click", function(e) {
//     e.preventDefault()
//     const userInput = document.querySelector("#userInput")
//     userInput.value = ""
// })