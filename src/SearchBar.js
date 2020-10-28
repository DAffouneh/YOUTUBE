import {useState} from 'react';
import Search from './search.png'
const SearchBar =(props)=>
{
    const[term,setTerm]=useState("Tap to search...");
    const changeHandel =(event)=>
    {
        setTerm(event.target.value);

    }
    const clickHandel=(event)=>{
        event.preventDefault();
        props.clickSearchHandeler(term);

    }

    return (
        <div style={{display:'flex', flexDirection:'row'}}> 
            <input type="text" placeholder={term} onChange={changeHandel} ></input>
            <div onClick={clickHandel}>
            <img src={Search} alt="search" style={{
                height:'10px',
                width:'10px'
            }}></img>

            </div>
        </div>
    );

    

}
export default SearchBar;