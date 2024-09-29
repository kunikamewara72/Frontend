import React,{useState,useEffect} from 'react';
import "./Home.css";
import axios from "axios";
const Home=()=>{
    const[data,setData]=useState([]);

    useEffect(()=>{
        getUsers();
        
    },[])
    const getUsers=async()=>{
const response =await axios.get("http://localhost:5000/users")
if(response.status===200){
    setData(response.data);
}
    };
    console.log("data=>",data);
    return(
<div>
<h2>Welcome to my Home</h2>
</div>

    );


};
export default Home;