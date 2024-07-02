// import React, {useState} from "react"

// function WordCounterForm(){

//     const [counter, setCounter] =useState(0)
//     const [word, setWord] = useState("")

//     function handleChange(e){
//         setWord(e.target.value)
//     }

//     function handleSubmit(e){
//         e.preventDefault()
//         const increment = counter + word.length
//         // console.log(increment)
//             setCounter(increment)
//             setWord("")
    
//     }




//     return(
//     <div>
//     <form onSubmit={handleSubmit}>
//         <input
//         type="text"
//         value={word}
//         onChange={handleChange}
//         />
//         <button>submit</button>
//     </form>
//     <h1>{counter}</h1>

//     </div>

//     )
// }

// export default WordCounterForm

// //DELIVERABLIES FOR LIVE CODING ASSESSMENT PHASE 2 REACT

// // Add a controlled form that includes:

// // xxxxA text input

// // xxxxxA button with the text of “Submit”

// // xxxxBelow the form: a h1 that has a counter that starts at 0

// // When you submit the form,

// // the counter should increment based on the number of letters in the word (example: when a user types cat, the counter should increment by 3)

// // the input field should also clear

// // The counter will continue to increment based on word length and will never reset back to zero. So for example: when a user types in hi and submits 3 times, the counter will be at 6.