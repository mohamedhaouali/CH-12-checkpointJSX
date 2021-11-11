import './App.css';
import './Style.css';
import Image from '../src/image1.jpg';
import video from './videos/video.mp4';



function App() {
  return (
    <div style={{
      border: "solid 1px black", maxWidth: "100vw"
    }}>

      <h1 className="title">Mohamed Haouali</h1>  {"\n"}
      <div>
        <img src={Image} alt="image1" /> {"\n"}
      </div>
      <div>
        <img src="/images/med.jpg" alt="" />
      </div>

      <video width="320" height="240" controls>

        <source src={video} type="video/mp4" />

      </video>



    </div >
  );
}

export default App;
