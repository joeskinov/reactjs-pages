import './Banner.css';
import GlobeImage from './../../assets/globe.svg';
import HandLampImage from './../../assets/hand_lamp.svg';
import Butterfly from './../../assets/butterfly.svg';
import PeopleImage from './../../assets/people.svg';
function Banner({title, isIncubator}) {
    return (
        <div className="banner-container">
            <img src={GlobeImage} className="globe-image" alt="globe" />
            {isIncubator ? 
            (<img src={HandLampImage} className="hand_lamp_img" alt="hand and lamp" />) :
            (<img src={Butterfly} className="butterfly_img " alt="Butterfly" />)
            }
            <div className="banner-title">
            <img src={PeopleImage} className="people-image" alt="people" />
            <p className="title-text" >{title}</p>
            </div>
        </div>
    )
}

export default Banner
