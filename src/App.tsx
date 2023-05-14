import React from 'react';
import './App.css';
import {Article} from "./atomes/Article";
import {Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {Detail} from "./detail";
import {Cart} from "./cart";
import {Delivery} from "./delivery";
import {Login} from "./login";
type User = {
    email: string;
    Username: string;
    password: string;
}
function App() {
    //read the cart from localstorage

    //update the total price



    return (
        <div className="flex flex-col w-screen h-screen ">
            <div className="h-16 bg-primary text-black flex items-center justify-between px-8">
                <img
                    src="/meubleshop.png"
                    className="h-20 w-20 cursor-pointer"
                onClick={() => {
                    window.location.href = "/"
                }}/>
                <input type="text" placeholder="Search"
                       className="h-8 w-96 rounded-lg border-none px-2 mx-2"/>
                <div className="flex items-center">
                    <div onClick={() => {
                        window.location.href = "/login";
                    }}
                        className="p-2 cursor-pointer">Login</div>
                    <div className="relative cursor-pointer"
                        onClick={() => {
                            window.location.href = "/panier";
                        }}
                    >
                        <div id="number"
                            className="number absolute top-2 right-4 h-5 w-5 bg-white rounded-full text-black text-center text-xs font-bold flex justify-center items-center">
                            0
                        </div>
                        Panier
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/article" element={<Detail/>}/>
                <Route path="/panier" element={<Cart/>}/>
                <Route path="/livraison" element={<Delivery/>}/>
                <Route path="/login" element={<Login/>}/>

            </Routes>



        </div>


  );
}

export default App;
