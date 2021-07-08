
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../store/index';
import {data} from '../action'

function Home() {
    const state = useSelector(state => state)
    console.log(state.name)
    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(data())
    },[])
    
    // console.log()
    return (
        <div>
            {state.name ?  state.name.map((v,i)=>{
                return(
                    <div key={i}>
                         <h1>{v.alpha2Code}</h1>
                    </div>
                )
            }):null}           
            <button>UPDATE</button>
        </div>
    )
}
export default Home