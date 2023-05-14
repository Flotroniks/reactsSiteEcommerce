import React from "react";
import {Article} from "./atomes/Article";
import Button from "./atomes/Button";

export class Delivery extends React.Component {
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

        return<div className="flex-1 flex flex-row">
            <div className="w-4/6 flex flex-col  space-y-20">


                <div className="flex flex-col items-center ">

                    <div className="flex flex-col items-start h-full">
                        <span className="font-bold text-3xl ">Adresse de Livraison</span>
                        <div className="flex flex-col justify-between items-start w-full space-y-2">
                            <input type="text" placeholder="Adresse"
                                   className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                            <input type="text" placeholder="Code postal"
                                    className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                            <input type="text" placeholder="Ville"
                                    className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center ">

                    <div className="flex flex-col items-start h-full">
                        <span className="font-bold text-3xl ">Adresse de facturation</span>
                        <div className="flex flex-col justify-between items-start  w-full space-y-2">
                            <input type="text" placeholder="Adresse"
                                    className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                            <input type="text" placeholder="Code postal"
                                    className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                            <input type="text" placeholder="Ville"
                                    className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col items-center ">

                        <div className="flex flex-col items-start h-full">
                            <span className="font-bold text-3xl ">Moyen de paiement</span>
                            <div className="flex flex-col justify-between items-start  w-full space-y-2">
                                <input type="text" placeholder="Numéro de carte"
                                             className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                                <input type="text" placeholder="Date d'expiration"
                                             className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                                <input type="text" placeholder="Cryptogramme"
                                             className="h-8 w-96 rounded-lg border-none px-2 mx-2 bg-blue-50"/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="w-2/6 flex flex-col  space-y-10">

                <div className="flex flex-col items-center ">

                    <div className="flex flex-col items-start h-full">
                        <span className="font-bold text-3xl ">Récapitulatif</span>
                        <div className="flex flex-row justify-between items-start  w-full space-y-2">
                            <span className="text-2xl">Total : {totalPrice ?? 0}€</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center ">

                    <div className="flex flex-col items-start h-full">

                        <div className="my-10 text-2xl font-bold bg-white text-black border-2 border-primary py-4 px-8 w-full h-10 flex justify-center items-center rounded transition hover:text-black hover:bg-primary duration-300 hover:cursor-pointer"
                             onClick={
                                 () => {
                                     //alert the user that the order is confirmed
                                        alert("Votre commande a bien été prise en compte");
                                        //clear the cart
                                        localStorage.setItem("cart", "[]");

                                     //go to the delivery page
                                     window.location.href = "/";
                                 }
                             }
                        >
                            Payer
                        </div>
                    </div>
                </div>

            </div>

            </div>;
    }
}