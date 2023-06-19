"use client"; // This is a client component

import React, {useEffect, useState} from "react";

const MultipartForm = () => {
    const [make, setMake] = useState("Audi");
    const [colour, setColour] = useState("Blue");
    const [code, setCode] = useState("");

    const changeMake = (e) => {
        setMake(e.target.value);
    }

    const changeColour = (e) => {
        setColour(e.target.value);
    }

    const changeCode = (e) => {
        console.log("changeCode: ", e.target.value);
        setCode(e.target.value);
    }

    return (
        <form className="text-xl">
            <div className="mb-4">
                <label htmlFor="make">Make: </label>
                <select id="make" name="make" onChange={changeMake}>
                    <option value="Audi">Audi</option>
                    <option value="Bmw">Bmw</option>
                    <option value="Vauxhal">Vauxhal</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="colour">Colour: </label>
                <select id="colour" name="colour" onChange={changeColour}>
                    <option value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="Black">Black</option>
                    <option value="Orange">Orange</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="code">Code: </label>
                <input
                    type="text"
                    id="code"
                    name="code"
                    onChange={changeCode}
                />
            </div>
            <div>
                <p className="mb-2">I have a {make} and the colour is a {colour}</p>
                {colour === "Red" && <p className="mb-2">The car is red! Nice!!</p>}
                {code !== "" && <p className="mb-2">Ref: {code}</p>}
            </div>
        </form>
    );
};

export default MultipartForm;