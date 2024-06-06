import { useEffect, useState } from "react"
import getWeather from "./api/weatherapi"
import WeatherCard from "./components/WeatherCard"
import Search from "./components/Search.jsx"
import './assets/css/index.css'
import { useForm} from "./Hooks/useForm"

function App() {
  
  const[weather, setWeather] = useState(null)
  const[city, setCity] = useState()

  useEffect(()=>{
    const apiWeather = async () => {
    setWeather(await getWeather(city))}

    apiWeather()
  },[city])
  
  const [values,handleInputChange, reset] = useForm ({searchCity:""})

  
  return (
    <>
    <div className="container">
      <h1>ESTADO METEOROLOGICO</h1>
      <hr />
      <div className="row">
      <Search
        values={values}
        handleInputChange={handleInputChange}
        reset={reset}
        city={city}
        setCity={setCity}
        />
      </div>
      <div className="row">
        <div className="col text-center"> 
        {
          weather ?
          <WeatherCard weather={weather}/>:
          <h2>Buscando...</h2>
        }   
    </div>
    </div>
    </div>
    </>
  )
}

export default App