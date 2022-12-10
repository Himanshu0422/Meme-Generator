import React from "react"

export default function Meme() {

    const [meme, setmeme] = React.useState({
        toptext: "",
        bottomtext: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })
    const [allmemeimages, setallmemeimages] = React.useState([]);

    React.useEffect(()=>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setallmemeimages(data.data.memes)
        }
        getMemes()
    }, [])

    function Meme(){
        const random = Math.floor(Math.random() * allmemeimages.length);
        const url = allmemeimages[random].url;
        setmeme(prevmeme => ({
            ...prevmeme,
            randomImage: url
        }));  
    }

    function handleChange(event){
        const {name, value} = event.target
        setmeme(prevmeme =>{
            return{
                ...prevmeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="toptext"
                    value={meme.toptext}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomtext"
                    value={meme.bottomtext}
                />
                <button 
                    className="form--button"
                    onClick={Meme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="memediv">
                <img src={meme.randomImage} alt="" className="meme--image"/>
                <h2 className="meme--text top">{meme.toptext}</h2>
                <h2 className="meme--text bottom">{meme.bottomtext}</h2>
            </div>
        </main>
    )
}