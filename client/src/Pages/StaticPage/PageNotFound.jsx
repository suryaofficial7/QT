import React, { lazy, Suspense } from 'react'
const PageLoader = lazy(()=>import('../../Components/PageLoader'))
const pageNotFound =  lazy(()=>import("../../assets/Imgs/pageNotFound.jpeg"))

const PageNotFound = () => {
  return (
    <div>
        <Suspense fallback={<PageLoader/>}>
        <img src={pageNotFound} className='rounded-r-full floating w-[80%] md:w-[40vw] m-auto mix-blend-darken' alt="" />
        </Suspense>
    </div>
  )
}

export default PageNotFound