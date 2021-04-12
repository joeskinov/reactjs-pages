import { Link } from 'react-router-dom';
import './Card.css';

function CourseCard({CourseTitle, CourseDescription, LearnLink, EarnAmount, LessonsDone, LessonsCompleted}) {
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="earn-flag">
                    <span className="earn-pin"></span>
                    <div className="earn-text">Earn ${EarnAmount}</div>
                </div>
                <div className="card-image-box">
                    <h3 className="text-logo">{CourseTitle}</h3>
                    <p className="card-title">{CourseDescription}</p>
                </div>
                <div className="card-btn-container">
                    <Link className="card-btn btn--secondary" to={{
                            pathname: LearnLink,
                    }}>
                        LEARN
                    </Link>
                </div>
                <p className="price-tag" >{LessonsDone}/{LessonsCompleted} Modules</p>
                <div className="progress-bar">
                    <div className="progress-bar-inner"></div>
                </div>
                <p className="card-percentage">83% Funded</p>
            </div>
        </div>
    )
}

export default CourseCard
