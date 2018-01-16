function placeAnOrder(orderNum){
    console.log("Customer order: ", orderNum);

    cookAndDeliverFood(function (){
        console.log("Delivered food order: ", orderNum);
    });
}

//simulate a 5 second operation
function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

//simulate users web requests
placeAnOrder(1);
setTimeout(placeAnOrder, 500, 2);
setTimeout(placeAnOrder, 1000, 3);
setTimeout(placeAnOrder, 1500, 4);
setTimeout(placeAnOrder, 2000, 5);
setTimeout(placeAnOrder, 2500, 6);
setTimeout(placeAnOrder, 3000, 7);
setTimeout(placeAnOrder, 5000, 8);
setTimeout(placeAnOrder, 8000, 9);

/*placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);
placeAnOrder(8);*/
