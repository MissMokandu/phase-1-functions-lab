function distanceFromHqInBlocks(pickup,hq){
    return Math.abs(hq - pickup);
}

function distanceFromHqInFeet(pickup,hq){
    return distanceFromHqInBlocks(pickup,hq)*264;
}
function calculateFarePrices(pickup,hq){
    const distance= distanceFromHqInFeet(pickup,hq);
    if (distance <=400){
        return 0;
    } else if (distance >400 && <= 2000) {
        return (distance - 400)*0.02
    } else if (distance > 2000 && < 2500) {
        return 25
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
    
}