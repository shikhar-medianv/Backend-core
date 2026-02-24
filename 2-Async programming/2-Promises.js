// Promises

function getRandomDogImage() {
    return new Promise((res, rej) => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                if (!res.ok) {
                    rej("Network response was not ok")
                }
                return res.json()
            })
            .then(data => {
                res(data.message)
            })
            .catch(error => {
                rej(error);
            });
    });
}

// Using the custom promise
getRandomDogImage()
    .then(imageUrl => console.log(imageUrl))
    .catch(err => console.log("Error:", err));