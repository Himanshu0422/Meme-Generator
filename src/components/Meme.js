import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    function Meme(){
        const memes = memesData.data.memes;
        const random = Math.floor(Math.random() * memes.length);
        const url = memes[random].url;
        console.log(url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={Meme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}