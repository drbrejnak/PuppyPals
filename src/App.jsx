import './App.css'
import { puppyList } from './data'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)

  return (
    <>
      <div className='roster'>
        {
          puppies.map((puppy) => {
            return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
        {featPupId && (
          <div className='individual'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
    </>
  )
}

export default App
