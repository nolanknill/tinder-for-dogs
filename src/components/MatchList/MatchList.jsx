import Match from "../Match/Match";

function MatchList({ matches }) {
  return (
    <ul>
      {matches.map(match => (
        <Match image={match.image} name={match.name} />
      ))}
    </ul>
  )
}

export default MatchList;