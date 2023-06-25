const promise = new Promise((resolve, reject) => {
    let value = true
    if (value) {
      resolve('hey value is true')
    } else {
      reject('there was an error, value is false')
    }
  })
  
  promise
    .then((x) => {
      console.log(x)
    })
    .catch((err) => console.log(err))