function Dog({ age, distance, image, name, slogan}) {
  return (
    <div>
        <img src={image} alt={`Portrait of ${name}`} />
        <span>Potential Match</span>
        <span>{distance}</span>
        <h3>{name}, {age} years</h3>
        <p>{slogan}</p>
    </div>  
  )
}

export default Dog