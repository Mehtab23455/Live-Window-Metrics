import React, {useState, useEffect, useDebugValue} from "react"; 


function MySecondComponent(){
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener removed")
    }
  },[]);
  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  },[width, height]);

  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return(<>
  <p>Window width: {width}px</p>
  <p>Window height: {height}px</p></>);

}

export default MySecondComponent