import './App.css';
import {Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Registration from './components/Registration';
// import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1 style={{color:'white' ,marginBottom:'10px'}}>USER MANAGEMENT SYSTEM</h1>
      <BrowserRouter>
      <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            </ul>
      <Routes>
        <Route path='/register' element={<Registration/>}/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/passwordreset' element={<Password/>}/>
        <Route path='/profile' element={<Registration/>}/> */}
      </Routes>
      </BrowserRouter>
      hlo

      <Registration/>
      <Header/>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Posts = () => {
//   const [images, setImages] = useState([]);
//   const [storyElements, setStoryElements] = useState([]);
//   const [links, setLinks] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = event.target.files;
//     if (files.length + images.length > 9) {
//       alert('You can upload maximum of 9 images.');
//       return;
//     }
//     const newImages = Array.from(files);
//     const newStoryElements = newImages.map(() => ({ text: '' }));
//     setImages([...images, ...newImages]);
//     setStoryElements([...storyElements, ...newStoryElements]);
//   };

//   const handleTextChange = (event, index) => {
//     const newStoryElements = [...storyElements];
//     newStoryElements[index] = { ...newStoryElements[index], text: event.target.value };
//     setStoryElements(newStoryElements);
//   };

//   const handleLinkAdd = (event) => {
//     const input = event.target.value.trim();
//     if (input && links.length < 3) {
//       setLinks([...links, input]);
//       event.target.value = '';
//     }
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     images.forEach((image, index) => {
//       formData.append(`images[${index}]`, image);
//       formData.append(`text[${index}]`, storyElements[index].text);
//     });
//     formData.append('links', JSON.stringify(links));

//     try {
//       const response = await axios.post('/api/stories', formData);
//       console.log('Story created:', response.data);
//     } catch (error) {
//       console.error('Error creating story:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Create your story</h1>
//       <div>
//         <label htmlFor="image-upload">Upload images:</label>
//         <input
//           id="image-upload"
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleImageUpload}
//         />
//       </div>
//       <div>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
//             <div>
//               <label htmlFor={`text-input-${index}`}>Add text:</label>
//               <input
//                 id={`text-input-${index}`}
//                 type="text"
//                 value={storyElements[index].text}
//                 onChange={(event) => handleTextChange(event, index)}
//               />
//             </div>
//             {storyElements[index].text && (
//               <div className="text-overlay">{storyElements[index].text}</div>
//             )}
//             {links.map((link, linkIndex) => (
//               <a key={linkIndex} href={link} className="link-overlay">{link}</a>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div>
//         <label htmlFor="link-input">Add affiliate links (maximum of 3):</label>
//         <input
//           id="link-input"
//           type="text"
//           multiple
//           onBlur={handleLinkAdd}
//         />
//       </div>
//       <button onClick={handleSubmit}>Create Story</button>
//     </div>
//   );
// };

// export default Posts;

import React, { useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [images, setImages] = useState([]);
  const [storyElements, setStoryElements] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length + images.length > 9) {
      alert('You can upload maximum of 9 images.');
      return;
    }
    const newImages = Array.from(files);
    const newStoryElements = newImages.map(() => ({ text: '', links: [] }));
    setImages([...images, ...newImages]);
    setStoryElements([...storyElements, ...newStoryElements]);
  };

  const handleTextChange = (event, index) => {
    const newStoryElements = [...storyElements];
    const input = event.target.value.trim();
    if (input && newStoryElements[index].links.length < 3) {
      newStoryElements[index].links.push(input);
    }
    newStoryElements[index].text = input;
    setStoryElements(newStoryElements);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
      formData.append(`text[${index}]`, storyElements[index].text);
      formData.append(`links[${index}]`, JSON.stringify(storyElements[index].links));
    });

    try {
      const response = await axios.post('/api/stories', formData);
      console.log('Story created:', response.data);
    } catch (error) {
      console.error('Error creating story:', error);
    }
  };

  return (
    <div>
      <h1>Create your story</h1>
      <div>
        <label htmlFor="image-upload">Upload images:</label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
      </div>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
            <div className="overlay">
              {storyElements[index].links.map((link, linkIndex) => (
                <div key={linkIndex} className="link-symbol" title={link}></div>
              ))}
            </div>
            <div>
              <label htmlFor={`text-input-${index}`}>Add text:</label>
              <input
                id={`text-input-${index}`}
                type="text"
                value={storyElements[index].text}
                onChange={(event) => handleTextChange(event, index)}
              />
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Create Story</button>
    </div>
  );
};

export default Posts;
