import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { baseURL } from '../BaseURL/BaseUrl'
import { Helmet } from 'react-helmet'
import BrandsModal from '../Modal/BrandsModal'

export default function Brands() {

  let [loading,setLoading]=useState(true)
  let [brands,setBrands]=useState([])

  async function getBrands(){
    let {data} =await axios.get(`${baseURL}/api/v1/brands`)
    .then(data=>data)
    .catch(error=>error)
    setBrands(data?.data)
    setLoading(false)
  }

  useEffect(()=>{
    getBrands()
  },[])

  if(loading) return <Loading/>
  return (
    <>
    
    <Helmet>
  <title>Brands</title>
  </Helmet>

      <div className="container pt-5 my-5">
        <div className="row">
          {brands?.map((brand)=>{
            return <BrandsModal brand={brand} key={brands._id}/>
          }
            )}
        </div>
      </div>
    </>
  )
}
