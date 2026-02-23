import "./App.css"; 
import ProfileCard from "./components/profilecard"; 

function App() {
  return (
    <ProfileCard
      name="Camila Angarita"
      description="Estudiante de la tecnologia en desarrollo de sofware en la uniminuto."
      followers="312"
      projects="48"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      verified={true}
    />
  );
}

export default App;