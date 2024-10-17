import React from 'react'
import  {Oval} from 'react-loader-spinner'

const Loadersmall = () => {
  return (
    <Oval   // Type of spinner
    height="20"
    width="20"
    color="#379777"
    ariaLabel="tail-spin-loading"
    radius="3"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    
/>
  )
}

export default Loadersmall