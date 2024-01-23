import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import LikePostHOC from './components/HOC/LikePostHOC';
import LikeImgRender from './components/Render props/LikeImgRender';
import LikePostRender from './components/Render props/LikePostRender';


function App() {
  return (
    <div>
      <h1>Blog Post Using HOC</h1>
      <LikeImageHOC/>
      <LikePostHOC/>

     <h1>Blog Post Original</h1>
     <LikeImage/>
     <LikePost/>

    <h1>Blogs Post using Render Props</h1>
    <LikeImgRender/>
    <LikePostRender/>
    </div>
  );
}

export default App;
