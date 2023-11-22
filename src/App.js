import React,{useState,useEffect} from 'react';
import './style.css';

export default function App() {
  const [fetchedData,setFetchedData] = useState([])
  async function fetchData (){
   const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
   const data= await response.json()
   setFetchedData(data)
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className='parentContainer'>
    <div className= 'mainCard'>
      { fetchedData?.results?.map((items,index)=>(
        <>
        <div>
        <img src={items.picture.large} alt='profile.jpeg'/>
        </div>
        <div>
        <h6 className="title"> First Name: {items.name.title} {items.name.first}</h6>
        <h6 className="title"> Gender: {items.gender}</h6>
        <h6 className="title"> Phone Number: {items.phone}</h6>
        </div>
        <div>
        <h6 className="title">LastName: {items.name.last}</h6>
        </div>
        </>
      ))
        
}
    </div>
    </div>
  );
}
