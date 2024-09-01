const car = {
    brand:  "Audi",
    modelYear: 2000,
    model: "A3",
    currentMileage: 8000,
    bigServiceMileage: 6000
    }
    const message = "You own a {brand} {model} that has been driven for {currentMileage} km"
    console.log(message)
    if (car.currentMileage > car.bigServiceMileage){
    
        console.log("Time for big service")
    }