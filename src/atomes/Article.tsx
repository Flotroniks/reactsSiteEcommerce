import React from "react";
import '../App.css';

export class Article extends React.Component {
    render() {
        return<div
            onClick={() => {
                window.location.href = "/article"
            }}
            style={{height: "540px", width: "384px"}}
            className="m-2 p-1 cursor-pointer flex flex-col justify-center items-center rounded-lg">
            <img src="/chaise1.jpg"  style={{height: "384px", width: "384px"}} className=" rounded-lg"/>
            <h3 className="font-bold text-2xl">Chaise Nordique Noir</h3>
            <p className="overflow-hidden text-ellipsis line-clamp-3 text-justify">
                Sadipscing et at aliquyam esse eirmod sit. Clita aliquyam amet vero assum. In dolor
                gubergren diam ipsum et. Lorem amet sanctus dolore amet kasd ea ullamcorper erat nonumy
                elitr amet in. Accusam et et lorem gubergren sit invidunt molestie nulla. Nam no stet lorem
                illum luptatum nisl diam at kasd nonumy. Justo velit clita dolore liber lorem consequat sed
                soluta amet ipsum consetetur duo invidunt eirmod at gubergren wisi in. Est ut sanctus tempor
                diam et molestie eos sit molestie et aliquyam sea consetetur minim est tempor. Magna nam
                lorem dolor et diam gubergren consetetur magna ut
            </p>
            <div className=" mx-3 flex flex-row  w-full justify-between mx-8">
                <p className="mx-8 text-2xl">134€</p>
                <p className="">⭐⭐⭐⭐⭐</p>
            </div>
        </div>;
    }
}