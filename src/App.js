import { useState } from "react";
import Matches from "./components/Matches/Matches";
import Candidate from "./components/Candidate/Candidate";
import dogsJson from "./data/dogs.json";

function App() {
  const [matches, setMatches] = useState([]);
  const [dogs, setDogs] = useState(dogsJson);

  const rejectCandidate = (id) => {
    const updatedCandidates = [...dogs].filter(dog => dog.id !== id);
    
    setDogs(updatedCandidates);
  }

  const matchCandidate = (id) => {
    const matchedDog = dogs.find(dog => dog.id === id);
    const updatedMatches = [matchedDog, ...matches];

    setMatches(updatedMatches);
    
    rejectCandidate(id);
  }

  const candidateDog = dogs[0];

  return (
    <main>
      <Matches matches={matches} />

      {candidateDog 
        ? <Candidate 
            dog={candidateDog}
            rejectCandidate={() => rejectCandidate(candidateDog.id)}  
            matchCandidate={() => matchCandidate(candidateDog.id)}
            />
        :
          <p>There are no potential matches near you...</p>
      }
    </main>
  );
}

export default App;
