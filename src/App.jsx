function App() {
  const name = 'Star Gazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          
          <img src="images/group.svg" alt="Star Gazers Group"/>
          <h1>Meet the <i style={{color: "steelblue", backgroundColor: "yellowgreen"}}>{name}</i></h1>
          <h1>Meet the StarGazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('hi there')}>click me</button>
        </hgroup>
      </article>
     
    </div>
  )
}
export default App
