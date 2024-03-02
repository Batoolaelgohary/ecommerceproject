import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Category from '../Category/Category';
import Loading from '../Loading/Loading';
import { baseURL } from '../BaseURL/BaseUrl';
import { Helmet } from 'react-helmet';
import CategoriesModal from '../CategoriesModal/CategoriesModal';

export default function Categories() {
  let [loading,setLoading]=useState(true)
  let [category,setCategory]=useState([])

  async function getCategory(){
    let {data} = await axios.get(`${baseURL}/api/v1/categories`)
    .then(data=>data)
    .catch(error=>error)
    setCategory(data?.data);
    setLoading(false)
  }

  useEffect(()=>{
    getCategory()
  },[])

  if(loading) return <Loading/>
  return (
    <>

<Helmet>
  <title>Categories</title>
  </Helmet>

      <div className="container pt-5 my-5">
        <div className="row g-4">
          {category?.map((category)=>{
            return <div className="col-md-3" key={category._id}>
              {/* <Category category={category}/> */}
              <CategoriesModal category={category}/>
            </div>
          }
            )}
        </div>
      </div>
    </>
  )
}
