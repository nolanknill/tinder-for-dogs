function CandidateButton({ handleClick, status}) {
  return (
      <button
        className={`candidate-button {status === "reject" ? "candidate-button--reject" : ""}`}
        onClick={handleClick}
      >
        {status === "reject" ? "💩" : "🦴"}
      </button>
  )
}

export default CandidateButton;