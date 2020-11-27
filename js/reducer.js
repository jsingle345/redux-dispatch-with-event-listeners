// add code snippets from README

let state
let container = document.querySelector('#container')
const reducer = (state = {count: 0}, action) => {

    switch(action.type){
        case "INCREASE_COUNT": 
            return {count: state.count + 1}
        case "DECREASE_COUNT":
            return {count: state.count - 1}
        default: 
            return state
    }
}

function dispatch(action){
    state = reducer(state, action)
    render()
}


function render(){
    

    container.innerText = state.count
}

dispatch({type: "lettuce"})

let button = document.querySelector('#button')

button.addEventListener('click', () => {
    dispatch({type: "INCREASE_COUNT"})
})

let decrease = document.createElement('button')

decrease.innerText = "decrease"
decrease.addEventListener('click', () => {
    dispatch({ type: "DECREASE_COUNT"})
})

document.body.append(decrease)