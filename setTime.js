setTimeout(() => {
    console.log('Here - I am after 2 seconds')
}, 2000);

const timer = setInterval(() => {
    console.log('I will keep on coming back until you clear me')
}, 2000);
clearInterval(timer)
console.log('Hello')
setTimeout(() => {
  console.log('lovely')
}, 0)
console.log('reader')