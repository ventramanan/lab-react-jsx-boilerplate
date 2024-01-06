import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const image=imageData()
  return(
    <div>
      <h1 className='name' style={{textAlign:"center"}}>Kalvium gallery</h1>
    
    <div className='parent'>{
      image.map(element => {
        return <div>
          <img style={{width:"600px"}} src={element.img} />
        </div>
        
      })};
    </div>
  </div>
  )
}

export default App;
