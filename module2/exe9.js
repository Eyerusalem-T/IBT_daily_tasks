//synchronous code and assynchronous code 
console.log("1-take order");

setTimeout(() => {
    console.log("3-food is ready");
}, 2000);

console.log("2-this one is ready");


//promise 
let y = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello world");
    }, 2000);
});
console.log(y)

//then , catch and finally
getOeder(7)
    .then(order => { // ".then" is accept the promise data and return the data , if the promise is resolved
        console.log(order.total);
    })
    .catch(error => { // ".catch" is accept the promise data and return the data , if the promise is rejected
        console.error(error.message);
    })
    .finally(() => { // ".finally" is always executed after the promise is resolved or rejected
        hideSpinner();
    })

//promise chaning
getUser(1)
    .then(user => getOrders(user.id))
    .then(orders => orders[0])
    .then(first => console.log(first.total))
    .catch(error => console.error(error.message));


// async and await 
async function getOrderTotal(orderId) {
    try {
        const user = await getUser(1);
        const orders = await getOrders(user.id);
        const firstOrder = orders[0];
        const total = firstOrder.total;
        render(total); //render the total on the page add yaregewal 
    } catch (error) {
        console.error(error.message);
    }
}

//API : It allows different software systems to communicate with each other. APIs can be used to access data, services, or functionality provided by another application or service.

