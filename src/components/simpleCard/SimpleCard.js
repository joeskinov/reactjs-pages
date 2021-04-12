import './SimpleCard.css';

function SimpleCard({image, title}) {
    return (
        <div className="simple-card-wrapper">
            <div className="simple-card">
                <h3 className="simple-text-logo">{title}</h3>
                <img src={image} className="simple-card-image" alt="card" />
            </div>
        </div>
    )
}

export default SimpleCard
