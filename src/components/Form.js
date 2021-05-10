import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './display.css';


const Form = (props) =>{
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const handleSubmit = (e, getPoke ) => {
        e.preventDefault();
        getPokemon(getPoke);
        e.target[0].value = "";
    }

    const getPokemon = (getPoke) => {
        return new Promise((resolve, reject) => {
            let url = (initialUrl + getPoke)
            fetch(url)
            .then(res => res.json())
            .then(data => {
                props.onGetPoke(data);
                resolve(data);
            })
        })
    }


    return(
        <div className="mt-2">

            <div className="d-flex flex-row align-items-center justify-content-center mt-5" style={{ height: '10rem', width: '100%'}}>

                <form onSubmit={ (e) => handleSubmit(e, e.target[0].value) } className="d-flex flex-row align-items-center justify-content-center" style={{width: '40rem'}} >

                    <label className="searchText m-1" style={{letterSpacing: '.1rem'}}>Pokemon Index: </label>

                    <input className="inputField m-1" name="getPoke" placeholder="Search by Name or ID" style={{width: '15rem', height: '2.5rem', borderRadius: '10px'}} type="text"/>

                    <input className="subButton m-1 d-flex flex-row align-items-center justify-content-center" style={{letterSpacing: '.1rem', height: '2.25rem', width: '6rem', borderRadius: '5px', border: '1px solid #999', color: '#000', fontSize: '1.2rem'}} type="submit" />

                </form>
            </div>
        </div>
    );
}

export default Form;
