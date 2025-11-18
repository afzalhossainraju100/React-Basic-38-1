import React, { Suspense } from 'react'
import Countries from './Component/countries/Countries.jsx'

import './App.css'

const countriesPromise = fetch ('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {


  return (
    <>

      <h1>React World on the Go... </h1>
      <Suspense fallback={ <p>Loading... ...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

    </>
  )
}

export default App
