import image from "./image/full.png"
import Event from "./event.jsx";
import Navbar from "../navbar.jsx";
function EventsPage() {
  const myStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    
  };
  return <div style={myStyle}>
    <Navbar/>
    <Event />
  </div>
}

export default EventsPage;
