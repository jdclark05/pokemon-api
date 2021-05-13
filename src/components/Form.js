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
        <div className="formContainer">

            <div className=" formContainer2 d-flex flex-row align-items-center justify-content-center">

                <form className="actualForm d-flex flex-row align-items-center justify-content-center" onSubmit={ (e) => handleSubmit(e, e.target[0].value) } >

                    <label className="searchText">Pokemon Index: </label>

                    <input className="inputField" name="getPoke" placeholder="Enter Name or ID" type="text"/>

                    <input className="subButton d-flex flex-row align-items-center justify-content-center" type="submit" />

                </form>
            </div>
        </div>
    );
}

export default Form;
