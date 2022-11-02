import MatchList from "../MatchList/MatchList";

function Matches({ matches }) {
  return (
    <section>
      <h2>Your Matches</h2><span>{matches.length}</span>

      
      {matches.length 
        ? <MatchList matches={matches} /> 
        : <p>You have no matches yet...</p>}

    </section>
  )
}

export default Matches;