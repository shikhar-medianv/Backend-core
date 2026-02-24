function First() {
    console.log("First")
}

function Second() {
    setTimeout(()=>{
        console.log("Second")
    },2000)
}

function Third() {
    console.log("Third")
}

First()
Second()
Third()

// OutPut => First \n  Third \n Second
 