function Match({ image, name }) {
  return (
    <section>
      <img src={image} alt={`Portrait of ${name}`} />
      <h3>{name}</h3>
    </section>
  )
}

export default Match;