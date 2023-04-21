import React from 'react'


const User = {
    name: 'David',
    age: '10 years',
    food: 'bread and eggs'
};
function Info() {
  return (
    <div>
        <h2>my name is {User.name}</h2>
        <h6>I'm {User.age} old. <br /> My best food is {User.food}</h6>
    </div>
  )
}

export default Info