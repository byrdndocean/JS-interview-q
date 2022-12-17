// let shoesAvailable = new Promise((resolve, reject) => {
//     let inStock = true;

//     if(inStock) {
//         // Promise is fulfilled
//         resolve("Store has shoes in stock")
//     } else {
//         reject("Store does not have shoes in stock")
//     }
// })

// let sufficientFunds = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Yay! Enough money in the bank"), 1000)
//     })
// }

// let transaction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Transaction went through"), 1000)
//     })
// }

// Promise.all([shoesAvailable, sufficientFunds(), transaction()])
//     .then((values) => console.log(values))

//////////////////////////////////////////////////////////////////////////////////////

// shoesAvailable
//     .then((response) => {
//         console.log(response);
//         return sufficientFunds();
//     })
//     .then((response) => {
//         console.log(response);
//         return transaction();
//     })
//     .then((response) => console.log("Finished!" + response))
//     .catch((err) => console.log(err))



/////////////////////////////////////////////////////////////

// const asyncFunction = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         alert("From asyncFunction");
//         resolve();
//     }, 1000)
//     })
// }

// asyncFunction()
//     .then(() => alert("Wait for asyncFunction!"))



//////////////////////////////////////////////////////////////////////


function doTheThing() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: {
                key: 'value',
            },
            success: function (data) {
                resolve(data)
            },
            error: function (error) {
                reject(error)
            },
        })
    })
}

doTheThing()
    .then((data) => {
        console.log(data) // This will run after
        doSomethingElse() // doTheThing() completes
    })
    .catch((error) => {
        console.log(error)
    })
