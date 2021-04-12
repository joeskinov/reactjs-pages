import Banner from "../components/banner/Banner";
import StartUpCard from './../components/card/StartUpCard';
import startups from './../assets/startups';

function Incubator() {
    const featuredCards = startups.featured;
    const upcomingCards = startups.upcoming;
    return (
            <div className="page-wrapper">
                <div className="container page-container">
                    <Banner
                        title={'Invest directly into minority innovations.'} 
                        isIncubator={true}
                    />
                    <div className="featured-wrapper">
                        <div className="container cards-container">
                            <h1 className="cards-container-title">Featured Startups</h1>
                            <div className="cards-wrapper">
                                {featuredCards.map((card) => (
                                    <StartUpCard 
                                        key={card.id} 
                                        ProjectName={card.ProjectName}
                                        ProjectDescription={card.ProjectDescription}
                                        ProjectLogo={card.ProjectLogo}
                                        CurrentFunding={card.CurrentFunding}
                                        FundingGoal={card.FundingGoal}
                                        GiveLink={card.GiveLink}
                                        LearnLink={card.LearnLink}
                                        isGive={card.isGive}
                                    />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="featured-wrapper">
                        <div className="container cards-container">
                            <h1 className="cards-container-title">Upcoming Startups</h1>
                            <div className="cards-wrapper">
                                {upcomingCards.map((card) => (
                                    <StartUpCard 
                                        key={card.id} 
                                        ProjectName={card.ProjectName}
                                        ProjectDescription={card.ProjectDescription}
                                        ProjectLogo={card.ProjectLogo}
                                        CurrentFunding={card.CurrentFunding}
                                        FundingGoal={card.FundingGoal}
                                        GiveLink={card.GiveLink}
                                        LearnLink={card.LearnLink}
                                    />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="container buttons-container" >
                        <button className="btn--default btn--large">Advice a Startup</button>
                        <button className="btn--default btn--large">Join Minority Ventures Cohort</button>
                        <button className="btn--default btn--large">{`Help <Code/>`}</button>
                    </div>
                </div>
            </div>
        )
}

export default Incubator
