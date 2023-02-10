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
                "'Stanley, this is me being serious. In fact, this is my serious room. It's where I come to be serious' - The Narrator, The Stanley Parable",
                "'Send the crew to help immediately! Giant alien spiders are no joke' - FTL: Faster than Light",
                "'You can't cut back on funding, you will regret this!' - Sim City 2000",
                "'Nothing is behind me, everything ahead of me, as is ever so on the road' - Jack Kerouac",
                "'Calculus, the electrical battery, the telephone, the steam enginer, the radio - all these groundbreaking innovations were hit upon by multipe inventors working in parallel with no knowledge of one another' - Steven Johnson",
                "'Most human beings have an almost infinite capacity for taking things for granted' - Aldous Huxley, Brave New World",
                "'Besides love and sympathy, animals exhibit other qualities connected with the social instincts which in us would be called moral' - Charles Darwin",
                "'I like the cold weather. It means you get work done' - Noam Chomsky",
                "'Knowing you have a good backup long snapper allows you to sleep good at night' - Bill Belichick",
                "'Developer, answers please?' - The Beginner's Guide",
                "'I won't change my mind because I'm an American. I won't change my mind on anything, regardless of the facts that are set out before me. I'm dug in, and I'll never change' - Mac, It's Always Sunny in Philadelphia",
                "'I belive virtually everything I read, and I think that is what makes me more of a selective human than someone who doesn't believe anything' - Spinal Tap",
                "'No good can come of criminals with access to hat-making machinery' - West of Loathing",
                "'Life is too short to play or listen to Free Bird' - Isaac Brock",
                "'I find it funny how people from Boston and New York hate each other because of pro teams' - Julian Casablancas",
                "'There's nothing I would retire for, so I won't retire' - James Earl Jones",
                "'We will make electricity so cheap that only the rich will burn candles' - Thomas Edison",
                "'Any sufficiently advanced technology is indistinguishable fro magic' - Arthur C. Clarke",
                "'Our scientific power has outrun our spiritual power. We have guided missiles and misguided men' - Martin Luther King Jr",
                "'Let's get on our knees and pray. I don't know to whom. Is there a patron saint of ballistics yet?' - Adam Savage, Mythbusters",
                "'If you can walk away from a landing, it's a good landing. If you use the airplane the next day, it's an outstanding landing' - Chuck Yaeger",
                "'Leave the atom alone' - E.Y. Harburg",
                "'If you do not change direction, you may end up where you were heading' - Lao Tzu",
                "'The meek shall inherit the Eatch, but not its mineral rights' - J. Paul Getty",
                "'Congratulations! You're my first patient ever' - Medic, Starcraft",
                "'Did ya hear the one about the guy who couldn't afford personalized plates so he went and change his name to j3L-2404?' - Marge Gunderson, Fargo",
                

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
