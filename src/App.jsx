import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'unknown'}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    <div className='container'>
      <img className='container__img' src="https://i.redd.it/o6cwlzg3exk41.png" alt="image_header" />
      <h1 className='container__h1'>Rick and Morty app</h1>
      <form className='container__form' onSubmit={handleSubmit}>
        <input className='container__input' ref={inputSearch} type="text" placeholder='Please enter a number between 1 and 126' />
        <button className='container__button'>Search</button>
      </form>
      {
        hasError
          ? <h2 className='Error__h2'>❌ Hey! you must provide an id from 1 to 126 😭</h2>
          : (
            <>
            <div className="container__locationInfo">  
                <LocationInfo
                  location={location}
                />
            </div>
              <div className='container__residentCard'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )

      }
    </div>
  )
}

export default App
