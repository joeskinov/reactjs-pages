import { Link } from 'react-router-dom';
import './Card.css';

function Card({
    ProjectName, 
    ProjectDescription, 
    ProjectLogo,
    CurrentFunding,
    FundingGoal,
    GiveLink,
    LearnLink,
    isGive,
}) {
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image-box">
                    <img src={ProjectLogo} className="card-image" alt="card" />
                    <p className="card-title">{ProjectDescription}</p>
                </div>
                <div className="card-btn-container">
                    {isGive && (
                        <Link className="card-btn btn--default" to={GiveLink}>
                            GIVE
                        </Link>
                    )}
                    <Link className="card-btn btn--secondary" to={{
                        pathname: LearnLink,
                    }}>
                        LEARN
                    </Link>
                </div>
                <p className="price-tag" >{CurrentFunding}/{FundingGoal}</p>
                <div className="progress-bar">
                    <div className="progress-bar-inner"></div>
                </div>
                <p className="card-percentage">83% Funded</p>
            </div>
        </div>
    )
}

export default Card
