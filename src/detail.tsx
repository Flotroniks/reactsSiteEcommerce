import React from "react";
import {Article} from "./atomes/Article";
import Button from "./atomes/Button";

export class Detail extends React.Component {
    render() {
        //make a array of number
        let cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = "[]";
        }
        let cartArray = JSON.parse(cart);
        let number = document.getElementById("number");
        if (number != null) {
            number.innerHTML = cartArray.length;
        }

        return<div className="flex-1  flex flex-row">
            <div className="flex-1 flex flex-row justify-center">
                <div className="flex flex-col m-3 space-y-2 ">
                    <img src="/chaise1.jpg"  className=" rounded-lg w-20 h-20 hover:cursor-pointer"/>
                    <img src="/chaise1.jpg"  className=" rounded-lg w-20 h-20 hover:cursor-pointer"/>
                    <img src="/chaise1.jpg"  className=" rounded-lg w-20 h-20 hover:cursor-pointer"/>
                </div>
               <div className="flex flex-col  w-4/6">

                       <img src="/chaise1.jpg"  className=" rounded-lg w-2/3"/>
                   <div className="w-1/3"/>

               </div>

            </div>
            <div className="flex-1 flex flex-col items-center space-y-20">
                <span className="font-bold text-4xl ">Chaise Nordique Noir</span>
                <span className=" text-justify mx-8">Sadipscing et at aliquyam esse eirmod sit. Clita aliquyam amet vero assum. In dolor
                gubergren diam ipsum et. Lorem amet sanctus dolore amet kasd ea ullamcorper erat nonumy
                elitr amet in. Accusam et et lorem gubergren sit invidunt molestie nulla. Nam no stet lorem
                illum luptatum nisl diam at kasd nonumy. Justo velit clita dolore liber lorem consequat sed
                soluta amet ipsum consetetur duo invidunt eirmod at gubergren wisi in. Est ut sanctus tempor
                diam et molestie eos sit molestie et aliquyam sea consetetur minim est tempor. Magna nam
                lorem dolor et diam gubergren consetetur magna ut</span>
                <div className="bg-white text-black border-2 border-primary py-2 px-4 w-80 h-10 flex justify-center items-center rounded transition hover:text-black hover:bg-primary duration-300 hover:cursor-pointer"
                onClick={
                    () => {
                        //add to cart using local storage
                        let cart = localStorage.getItem("cart");
                        if (cart == null) {
                            cart = "[]";
                        }
                        let cartArray = JSON.parse(cart);
                        cartArray.push(1);
                        localStorage.setItem("cart", JSON.stringify(cartArray));
                        //update the number of item in the cart
                        let number = document.getElementById("number");
                        if (number != null) {
                            number.innerHTML = cartArray.length;
                        }
                    }
                }
                >
                    Ajouter au panier
                </div>



            </div>



            </div>;
    }
}