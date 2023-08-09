import { useState } from 'react';
import './App.css';

function App() {
  const [results, setResult] = useState([]);
  const [value, setValue] = useState("");

  const fetchImages = () => {

    // setValue(e.target.value)
    console.log("hii");
    console.log(value);
    fetch(`https://api.unsplash.com/search/photos?client_id=-wMfwmU-NULeey7ucsQ821_Cr0cA5lx-WzR90WEN7do&query=${value}&orientation=squarish`)
    .then(res => res.json())
    .then(data => {
      console.log("here", data.results)
      setResult(data.results)
    }
    );
  }

  return (
    <>

      {/* <div className="header">
        <h1>PicSearch</h1>

        <form onSubmit={()=> fetchImages()}>
          <div className="inp">
            <h2>Search</h2>
            <input type="text" className=""
              value={value}
              onChange={(e)=> setValue(e.target.value)}
              placeholder="Browse Images.." />
            <button className="" type="submit" onSubmit={()=> fetchImages()}><i className="fa fa-search"></i></button>
          </div>
        </form>

      </div>

      <div className="images">
        {
          results.map((images)=>{
            return <img src={images.urls.regular} key={images.id} className="im"  />
          })
        }
      </div> */}

      <div className="App">
        <div className="myDiv">
          <span>Search</span>
          <input
            style={{ width: "60%" }}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => fetchImages()}>Send</button>
        </div>

        <div className="gallery">
          {
            results.map((item) => {
              return <img className="item" key={item.id} src={item.urls.regular} />
            })
          }
        </div>
      </div>
      </>
      );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [results, setResult] = useState([]);
  const [value, setValue] = useState("");

  const fetchImages = (event) => {

    event.preventDefault();
    // setValue(e.target.value)
    console.log("hii");
    console.log(value);
    fetch(`https://api.unsplash.com/search/photos?client_id=-wMfwmU-NULeey7ucsQ821_Cr0cA5lx-WzR90WEN7do&query=${value}&orientation=squarish&per_page=12`)
      .then(res => res.json())
      .then(data => {
        console.log("here", data.results)
        setResult(data.results)
      }
      );
  }

  return (
    <>

      <div className="header">
        {/* <h1>PicSearch</h1> */}

        <form onSubmit={fetchImages}>
          <div className="inp mt-1">
            <span>PicSearch</span>
            <div className='d-flex sbox'>
            <span>Search</span>
            <input type="text" className=""
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Browse Images.." />
            <button className="" type="submit" ><i className="fa fa-search"></i></button>
          </div>
          </div>
        </form>

      </div>

      {/* <div className="gallery">
        {
          results.map((images)=>{
            return <img src={images.urls.regular} key={images.id} className="im"  />
          })
        }
        </div> */}

      <div className="container-fluid mt-2">
        <div className="row g-3">
          {/* <div className="col">
            {
              results.map((images) => {
                return <img src={images.urls.regular} alt="" key={images.id} className="img-fluid" />
                
              })
            }
          </div> */}
           {results.map((image) => (
            <div className="col-md-3" key={image.id}>
              <img src={image.urls.regular} alt="" className="img-fluid" />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="App">
        <div className="myDiv">
          <span>Search</span>
          <input
            style={{ width: "60%" }}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => fetchImages()}>Send</button>
        </div>

        <div className="gallery">
          {
            results.map((item) => {
              return <img className="item" key={item.id} src={item.urls.regular} />
            })
          }
        </div>
      </div> */}
    </>
  );
}

export default App;
