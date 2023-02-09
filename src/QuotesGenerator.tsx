import React from "react";
import  { Link } from "react-router-dom"
import "./App.css"


const quotes = ["'Practice? We're talking about practice?' - Allen Iverson",
                "'Larry Bird is not walking through that door, fans' - Rick Pitino",
                "'Where is everybody?' - Enrico Fermi",
                "'If the highest aim of a captain were to preserve his ship, he would keep it in port forever' - Thomas Aquinas",
                "'The sea is only the embodiment of a supernatural and wonderful existence' - Jules Verne",
                "'Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic' - Frank Herbert, Dune",
                "'You have no respect for excessive authority or obselete traditions' - Joseph Heller, Catch-22",
                "'No one involved in computers would ever say that a certain amont of memory is enough for all time' - Bill Gates",
                "'I watch a lot of baseball on radio' - Gerald Ford",
                "'God gets you to the plate but once you're there you're on your own' - Ted Williams",
                "'If it isn't bolted down, bring it home' - Grace Hopper",
                "'What a newspaper prints is news - but not always the truth!' - Agatha Christie, Hercule Poirot: The Complete Short Stories",
                "'Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in' - Isaac Asmiov, Foundation",
                "'I've been imitated so well I've heard people copy my mistakes' - Jimi Hendrix",
                "'Gondor calls for aid!' - Peter Jackson, Lord of the Rings: Return of the King",
                "'Stanley, this is me being serious. In fact, this is my serious room. It's where I come to be serious' - Kevan Brighting, The Stanley Parable",
                "'Send the crew to help immediately! Alien spiders are no joke' - FTL: Faster than Light",
                "'You can't cut back on funding, you will regret this!' - Sim City 2000",
                "'Nothing is behind me, everything ahead of me, as is ever so on the road' - Jack Kerouac"
                ]

const QuotesGenerator = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomNumber].toString()
    return (
        <div className="quote">
            { quote }
        </div>
    )
}

export default QuotesGenerator;
