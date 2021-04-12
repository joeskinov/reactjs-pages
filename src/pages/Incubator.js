import Banner from "../components/banner/Banner";
import CardsContainer from "../components/cardsContainer/CardsContainer";

function Incubator() {
    const featuredCards = [
        {
            image: '/orovault.png',
            title: 'changing the way you gold forever',
            isGive: true,
            completeRatio: '$83,000/$100,000',
        },
        {
            image: '/mangoswap.png',
            isGive: true,
            completeRatio: '$83,000/$100,000',
        },
        {
            image: '/minoritytank.png',
            isGive: true,
            completeRatio: '$83,000/$100,000',
        },
        {
            image: '/MVC.png',
            isGive: true,
            completeRatio: '$83,000/$100,000',
        },
        {
            image: '/orovault.png',
            title: 'changing the way you gold forever',
            isGive: true,
            completeRatio: '$83,000/$100,000',
        }
    ]

    const upcomingCards = [
        {
            image: '/orovault.png',
            title: 'changing the way you gold forever',
            isGive: false,
            completeRatio: '$83,000/$100,000',
        },
        {
            image: '/mangoswap.png',
            isGive: false,
            completeRatio: '$83,000/$100,000',
        },
        {
            image: '/MTTLogo.png',
            isGive: false,
            completeRatio: '$83,000/$100,000',
        },
        {
            image: '/orovault.png',
            title: 'changing the way you gold forever',
            isGive: false,
            completeRatio: '$83,000/$100,000',
        },
        {
            image: '/orovault.png',
            title: 'changing the way you gold forever',
            isGive: false,
            completeRatio: '$83,000/$100,000',
        }
    ]
    return (
            <div className="page-wrapper">
                <div className="container page-container">
                    <Banner
                        title={'Invest directly into minority innovations.'} 
                        isIncubator={true}
                    />
                    <CardsContainer title='Featured Startups' cards={featuredCards} />
                    <CardsContainer title='Upcoming Startups' cards={upcomingCards} />
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
