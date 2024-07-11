
import { useState } from "react"
export default function Image() {

    let [imgsrc, setImagSrc] = useState("127512.jpg")//initialize value of the variable img src 
    const changeIMg = () => {
        alert('change image')
        if (imgsrc === '127512.jpg') {
            alert('true')
            setImagSrc('logo512.png')//function to update the value of imgsec to logo
        }
        else {
            alert('false')
            setImagSrc('127512.jpg')//funciton to update the value of img to 127512.jpg
        }
    }
    return (
        <>
            <img src={imgsrc} height="150px" width="150px" style={{ 'borderRadius': '10px' }} onClick={() => changeIMg()}></img><br></br>
            < p style={{ color: 'blue', 'fontWeight': 'bold' }}>This is paragraph</p>
        </>
    )
}