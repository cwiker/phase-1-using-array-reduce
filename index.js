const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


function totalBatteries(batteryBatches) { 
    const total = batteryBatches.reduce(function(accumulator, element) {
    return accumulator + element
}, 0)
}
totalBatteries(total);