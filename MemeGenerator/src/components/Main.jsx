import React from "react"

export default function Main() {


    const [meme, setMeme]= React.useState({
        topText:" one does not simply",
        bottomText: "walk into Mordor",
        imageUrl: "https://i.imgflip.com/30b1gx.jpg"
    })  

    const [memeArray, setMemeArray]= React.useState([])

    function handleChange(event){
        const {value , name}= event.currentTarget;
        
        setMeme(prevmeme=>({
            ...prevmeme,
            [name]: value
        })
    ) 
    }
    
    function getRandomMeme(){
        const randomMeme= memeArray[Math.floor(Math.random()*memeArray.length)].url
        setMeme(prevmeme=> ({
            ...prevmeme,
            imageUrl: randomMeme
        })
    )
    }
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(data=> setMemeArray(data.data.memes))

    },[])

    return (
        <main>
                    <div className="input-box"> 
                        <label>Top Text
                        <br></br>
                        <input 
                            type="text"
                            placeholder="one does not simply"
                            name="topText"
                            onChange={handleChange}
                            />
                        </label>
        
                    
                        <label >Bottom Text
                            <br></br>
                        <input type="text"
                            placeholder="walk into Mordor"
                            name="bottomText"
                            onChange={handleChange}
                            
                        />
                        </label>
                    </div>
                    <button onClick={getRandomMeme}> Get a new Meme Image  🎆</button>

                    <div className="meme">
                        <span className="top">{meme.topText}</span>
                        <img src={meme.imageUrl}></img>
                        <span className="bottom">{meme.bottomText}</span>
                    </div>
        </main>
    )
}