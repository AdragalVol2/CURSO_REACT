
import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";


const App = () => (
  <>
    <VideoList title='Curso de React'>
      <VideoItem
        title='Componentes'
        duration={2760}
        uploadDate={new Date(2022, 1, 25)}
        description='Componentes en React'
      >
      </VideoItem>
      <VideoItem
        title='useState'
        duration={3145}
        uploadDate={new Date(2022, 2, 3)}
        description='Cómo utilizar estados en React'
      >
      </VideoItem>
    </VideoList>
    <VideoList title='Curso de Node'>
      <VideoItem
        title='Intro a Node JS'
        duration={2760}
        uploadDate={new Date(2022, 1, 25)}
        description='Introducción al backend con Node'
      >
      </VideoItem>
    </VideoList>
    <VideoList title='Curso de Next JS'></VideoList>
  </>
);

export default App;