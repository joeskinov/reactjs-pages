import './Card.css';

function Card({image, textLogo, title, isGive, earn, completeRatio}) {
    return (
        <div className="card-wrapper">
            <div className="card">
                {earn &&
                (
                <div className="earn-flag">
                    <span className="earn-pin"></span>
                    <div className="earn-text">Earn ${earn}</div>
                </div>
                )}
                <div className="card-image-box">
                    {textLogo ? (
                        <h3 className="text-logo">{textLogo}</h3>
                    ): (<img src={image} className="card-image" alt="card" />)}
                    <p className="card-title">{title && title}</p>
                </div>
                <div className="card-btn-container">
                    {isGive && (
                        <button className="card-btn btn--default">GIVE</button>
                    )}
                    <button className="card-btn btn--secondary">LEARN</button>
                </div>
                {completeRatio &&
                (
                    <p className="price-tag" >{completeRatio}</p>
                )}
                <div className="progress-bar">
                    <div className="progress-bar-inner"></div>
                </div>
                <p className="card-percentage">83% Funded</p>
            </div>
        </div>
    )
}

export default Card
