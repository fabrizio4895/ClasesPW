import { useState, useEffect } from "react";

function EjemploFetch() {
  const [countries, setCountries] = useState( [] )

  useEffect( () => {
    fetch('https://restcountries.com/v2/all')
    .then((res) => res.json())
    .then( (res) => setCountries( res ))
    .finally( () => {
      console.log("ya terminamos")
    })
  }, [] )
  
  return (
    <div>
      {countries &&
        countries.map((country, index) => (
          <img key={index} src={country.flags.png} alt='flag' width={100} />
        ))}
    </div>
  );
}

export default EjemploFetch;