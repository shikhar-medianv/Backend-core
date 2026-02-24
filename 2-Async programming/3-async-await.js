// Async/Await 

async function fakeStoreCarts() {
  try {
    let res = await fetch("https://fakestoreapi.com/carts")
    let data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}


fakeStoreCarts()  
