//type narrowing is a process of refining the type of a variable within a conditional block. It allows us to perform different operations based on the type of the variable.
function getOrder(kind :string|number){
    if(typeof kind === 'string'){
        return `Preparing the order ${kind}`;//In this case, we are checking if the type of 'kind' is a string. If it is, we can safely use it as a string and return the appropriate message.

    }
    return `Preparing the order ${kind}`;//If the type of 'kind' is not a string, we assume it is a number and return the message accordingly. This is an example of type narrowing, where we refine the type of 'kind' based on the condition we check.
}
//console.log(getOrder('Pizza'));
//console.log(getOrder(123));

//How to find truthness of a value
function orderTrack(status?:string|number){
    if(typeof status === 'string'){
        return `Your order is being prepared. ${status}`;
    }else if(typeof status === 'number'){
        return `Your order is being prepared. ${status}`;
    }else{
        return `Your order is being prepared. But we don't have the status information. ${status}`;
    }
}
// console.log(orderTrack('Out for delivery'));
// console.log(orderTrack(123));
// console.log(orderTrack());
//exhaustiveness checking is a technique used to ensure that all possible cases of a union type are handled in a conditional statement. It helps to catch any missing cases and provides better type safety. In the above example, we have handled both string and number cases for the 'status' variable, and we also have a fallback case for when 'status' is undefined. This ensures that we have covered all possible scenarios for the 'status' variable.
function processOrder(order: string | number | boolean) {
    if (typeof order === 'string') {
        return `Processing string order: ${order}`;
    } else if (typeof order === 'number') {
        return `Processing number order: ${order}`;
    } else if (typeof order === 'boolean') {
        return `Processing boolean order: ${order}`;
    } else {
        // This case should never happen due to the type definition, but we can still handle it for safety.
        return `Unknown order type: ${order}`;
    }
}
// console.log(processOrder('Pizza'));
// console.log(processOrder(123));
// console.log(processOrder(true));
// console.log(processOrder());
//safetygueard is a technique used to ensure that a variable is of a specific type before performing operations on it. It helps to prevent runtime errors by checking the type of the variable at runtime. In the above example, we have used type guards to check the type of the 'order' variable before processing it. This ensures that we are handling each case correctly and prevents any potential errors that may arise from trying to process an unsupported type.
class Order {
    serve(){
           return 'Serving the order';
    }
}
class specialOrder {
    serve(){
        return 'Serving the special order';
    }
} 
function processSpecialOrder(order: Order | specialOrder) {
                if (order instanceof Order) {
                    return order.serve();
                } else if (order instanceof specialOrder) {
                    return order.serve();
                } else {
                    return 'Unknown order type';
                }  

}    
console.log(processSpecialOrder(new Order()));
console.log(processSpecialOrder(new specialOrder()));
