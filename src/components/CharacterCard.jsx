import React from "react";
import ButtonOne from "./ButtonOne";
import { Link } from "react-router-dom";

import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";

export function CharacterCard() {


	return (
		<div className="flex justify-center h-full mb-12 items-center" >
            <div className="border rounded-xl  p-3 pt-0 w-[50%] ">
                <img src="src/Images/fada.png" alt=""
                    className="w-52 mt-2 p-0" />
                <h2 className="text-2xl text-center">Fairy</h2>
                <Link to="/">
                    <ButtonOne buttonText={'Select'}/>
                </Link>

            </div>
		</div>
	);
}   
