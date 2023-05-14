import React from "react";
import {Article} from "./atomes/Article";
import Button from "./atomes/Button";

export class Cart extends React.Component {
    render() {
        //read the cart from localstorage
        let cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = "[]";
        }
        let cartArray = JSON.parse(cart);
        let totalPrice = 0;
        for (let i = 0; i < cartArray.length; i++) {
            totalPrice += 134;
        }

        return<div className="flex-1  flex flex-row">
            <div className="w-4/6 flex flex-row justify-center space-y-20">
                <div className="my-16"/>
                {/*if the number is > 0 then show a item card*/}
                {cartArray.length > 0 &&
                <div style={{height: "125px", width: "90%"}} className="flex flex-row items-center border-2 rounded-lg">
                    <img src="/chaise1.jpg"  style={{height: "125px", width: "125px"}} className=" rounded-lg"/>
                    <div className="flex flex-col items-start h-full">
                        <span className="font-bold text-3xl ">Chaise Nordique Noir</span>
                        <div className="flex flex-row justify-between items-start w-full">
                        <span className="text-2xl">Quantité : {cartArray.length}</span>
                        <span className="text-2xl">134€</span>
                        </div>
                        <div className="bg-white text-black   py-2 px-4 flex justify-center items-center   hover:text-red-500 hover:cursor-pointer select-none"
                             onClick={
                                 () => {
                                     //remove the item from the cart
                                     cartArray.pop();
                                     localStorage.setItem("cart", JSON.stringify(cartArray));
                                     //update the number of item in the cart
                                     let number = document.getElementById("number");
                                     if (number != null) {
                                         number.innerHTML = cartArray.length;
                                     }
                                     //update the total price
                                        this.forceUpdate();
                                 }
                             }
                        >
                            Supprimer
                        </div>
                    </div>
                    {/*remove the item from the cart*/}




                </div>
                }


            </div>
            <div className="w-2/6flex flex-col items-center space-y-20">
                <div className="m-16"/>
                <div className="h-72 w-72 flex flex-col items-center border-2 border-primary">
                    <span className="w-full border-b-2 border-primary font-bold text-2xl flex justify-evenly items-baseline">
                        Récapitulatif
                        <span className="font-normal text-xs my-2 ">
                             Prix TTC
                        </span>
                    </span>
                    <span className="w-full  border-b-2 border-primary text-1xl flex justify-between items-center">
                        Total des articles
                        <span className="totalPrice m-2 ">
                             {totalPrice}€
                        </span>
                    </span>
                    <span className=" w-full border-b-2 border-primary text-1xl flex items-center justify-between">
                        Frais de livraison
                        <span  className="m-2 font-bold">
                             Gratuit
                        </span>
                    </span>
                    <span className="w-full  border-b-2 border-primary text-2xl font-bold flex justify-between items-center">
                        Total
                        <span className="totalPrice m-2 ">
                             {totalPrice}€
                        </span>
                    </span>

                    <div className="my-10 bg-white text-black border-2 border-primary py-2 px-4 w-5/6 h-10 flex justify-center items-center rounded transition hover:text-black hover:bg-primary duration-300 hover:cursor-pointer"
                         onClick={
                             () => {
                                 //go to the delivery page
                                    window.location.href = "/livraison";
                             }
                         }
                    >
                       Choisir ma livraison
                    </div>
                </div>

            </div>



            </div>;
    }
}