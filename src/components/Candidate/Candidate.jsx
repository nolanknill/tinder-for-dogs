import Dog from "../Dog/Dog";
import CandidateButton from "../CandidateButton/CandidateButton";

function Candidate({ dog, rejectCandidate, matchCandidate }) {
  return (
    <section>
      <Dog 
        age={dog.age}
        distance={dog.distance}
        image={dog.image}
        name={dog.name}
        slogan={dog.slogan}
      />
      <CandidateButton 
        status="reject" 
        handleClick={rejectCandidate} 
        />
      <CandidateButton 
        handleClick={matchCandidate} 
        />
    </section>
  )
}

export default Candidate;