import { Link } from "react-router-dom";
import Banner from "../components/banner/Banner";
import startups from './../assets/startups';

function ViewIncubator(props) {
    const allStartups = startups.all;
    const startUpId = props.match.params.incubatorId;
    const selectedStartup = allStartups.filter(stup => stup.id === startUpId)[0];
    return (
            <div className="page-wrapper">
                <div className="container page-container">
                    <Banner
                        title={'Learn high in Demand IT Skills & get crypto.'} 
                        isIncubator={true}
                    />
                    <div className="featured-wrapper">
                        <div className="container">
                           <div className="row details-view">
                                <div className="col-sm-4 details--wrapper">
                                    <img src={selectedStartup.ProjectLogo} />
                                </div>
                                <div className="col-sm-4 details--wrapper">
                                    Project Name: <h1>{selectedStartup.ProjectName}</h1>
                                    Current Funding: <h2>{selectedStartup.CurrentFunding}</h2>
                                    Funding Goal: <h2>{selectedStartup.FundingGoal}</h2>
                                    Project Description: <p>{selectedStartup.ProjectDescription}</p>
                                </div>
                                <div className="col-sm-4 details--wrapper details--btn-box">
                                    {selectedStartup.isGive &&
                                        (<Link className="card-btn btn--default details--btn" to={selectedStartup.GiveLink}>
                                                GIVE
                                        </Link>)
                                    }
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default ViewIncubator
