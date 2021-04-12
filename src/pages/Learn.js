import Banner from "../components/banner/Banner";
import CardsContainer from "../components/cardsContainer/CardsContainer";
import SimpleCard from "../components/simpleCard/SimpleCard";

function Learn() {
    const coursesCards = [
        {
            image: '/orovault.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        },
        {
            image: '/mangoswap.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        },
        {
            image: '/minoritytank.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        },
        {
            image: '/MVC.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        },
        {
            image: '/orovault.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        }
    ]

    const featuredCards = [
        {
            image: '/orovault.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        },
        {
            image: '/mangoswap.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        },
        {
            image: '/MTTLogo.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        },
        {
            image: '/orovault.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        },
        {
            image: '/orovault.png',
            textLogo: 'Intro to Blockchain',
            title: 'blockchain, cryptocurrency fundamentals',
            isGive: false,
            earn: 30,
            completeRatio: '8.3/10 Modules',
        }
    ]
    const categories = [
        {
            image: '/engineering.svg',
            title: 'Engineering',
        },
        {
            image: '/science.svg',
            title: 'Science',
        },
        {
            image: '/innovation.svg',
            title: 'Innovation',
        },
        {
            image: '/programming.svg',
            title: 'Programming',
        },
    ];
    
    return (
            <div className="page-wrapper">
                <div className="container page-container">
                    <Banner 
                        title={'Learn high in Demand IT Skills & get crypto'} 
                        isIncubator={false}
                    />
                    <CardsContainer title='My Courses' cards={coursesCards} />
                    <CardsContainer title='Featured Courses' cards={featuredCards} />
                    <div className="featured-wrapper">
                        <div className="container cards-container">
                            <h1 className="cards-container-title">By Category</h1>
                            <div className="cards-wrapper">
                                {categories.map((category) => (
                                    <SimpleCard title={category.title} image={category.image} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Learn
