import React from "react";
import {Article} from "./atomes/Article";

export class Home extends React.Component {
    render() {
        //make a array of number
        let number :number[] = [];
        //for loop to make 100 number
        for (let i = 0; i < 100; i++) {
            number.push(i);
        }
        return<div className="flex-1  h-full w-full flex flex-wrap justify-center">
            <div className="flex flex-col items-center justify-center w-full h-32">
                <span className="text-4xl font-bold">Nos produits</span>
            </div>

            {number.map((value, index) => {
                return <Article />
            })
            }


        </div>;
    }
}