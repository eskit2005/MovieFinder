import { useEffect,useRef } from 'react';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import './Herosection.css'

function Herosection(){
    let images=[image1,image2,image3];
    let imageSection=useRef(null);
    let count=0;
    useEffect(()=>{
        let id=setInterval(()=>{
            imageSection.current.style.backgroundImage=`url(${images[count]})`;
            count=(count+1)%images.length;
        },2000)
    },[]);

    return (
        <div className="hero-container">
            <div className="text-section">
                <span>
                    <h1><p className='ascent'>Discover</p> Search And  Save your <p className='ascent'>Favorites</p></h1>
                    <p>Easily search for movies and keep track of the ones you love. Build your personal movie collection in one place.</p>
                </span>
            </div>
            <div className="image-container">
                <div ref={imageSection} className="image-section"></div>
            </div>
        </div>
    )
}
export default Herosection;