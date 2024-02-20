import React from 'react'
import c0 from './image/img1.jpeg'
import c1 from './image/img2.jpeg'
import c2 from './image/img3.jpeg'
import c3 from './image/img4.jpeg'
import c4 from './image/img5.jpeg'
import c5 from './image/img6.jpeg'
import c6 from './image/img7.jpeg'
import c7 from './image/img8.jpeg'


const Imgmap = () => {
 const imageFiles =  [
        c1,
        c2,
        c3,
        c4,
        c5,
        c6,
        c7,
        c0,
        
        
       
    ];
    return(
    

    <div style={{display:"flex", flexDirection: "row", gap: "2rem"}}>
    {
    imageFiles.map((imageFileName, Index)=>(
        <img
        key={Index}
        src={imageFileName}
        alt={`Company${Index+1}`}
        style={{
            width: "120px",
            height: "120px",
            objectFit: "contain",
            borderRadius: "10px",
            backgroundColor: "white",
            padding: "1px",
        }}
        />
    ))}
</div>
)}


export default Imgmap;