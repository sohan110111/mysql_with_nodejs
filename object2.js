let object = {
    name: 'Rajat',
    city: 'Delhi',
    getIntro: function () {
      console.log(`${this.name}, ${this.city}`)
    },
  }
  
  let object2 = {
    name: 'Aditya',
  }
  object2.__proto__ = object
  console.log(object2.city)
  console.log(object2.name)