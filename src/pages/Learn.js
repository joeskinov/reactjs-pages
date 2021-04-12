import Banner from "../components/banner/Banner";
import CourseCard from "../components/card/CourseCard";
import SimpleCard from "../components/simpleCard/SimpleCard";
import courses from './../assets/courses.json';

function Learn() {
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
                    <div className="featured-wrapper">
                        <div className="container cards-container">
                            <h1 className="cards-container-title">My Courses</h1>
                            <div className="cards-wrapper">
                                {courses.map((card) => (
                                    <CourseCard
                                        key={card.id}
                                        CourseTitle={card.CourseTitle}
                                        CourseDescription={card.CourseDescription}
                                        EarnAmount={card.EarnAmount}
                                        LearnLink={card.LearnLink}
                                        LessonsDone={card.LessonsDone}
                                        LessonsCompleted={card.LessonsCompleted}
                                    />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="featured-wrapper">
                        <div className="container cards-container">
                            <h1 className="cards-container-title">Featured Courses</h1>
                            <div className="cards-wrapper">
                                {courses.map((card) => (
                                    <CourseCard
                                        key={card.id}
                                        CourseTitle={card.CourseTitle}
                                        CourseDescription={card.CourseDescription}
                                        EarnAmount={card.EarnAmount}
                                        LearnLink={card.LearnLink}
                                        LessonsDone={card.LessonsDone}
                                        LessonsCompleted={card.LessonsCompleted}
                                    />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
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
