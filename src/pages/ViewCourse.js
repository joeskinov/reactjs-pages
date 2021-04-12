import { Link } from "react-router-dom";
import Banner from "../components/banner/Banner";
import courses from "./../assets/courses.json";

function ViewCourse(props) {
  const allCourses = courses;
  const courseId = props.match.params.courseId;
  const selectedCourse = allCourses.filter((c) => c.id === courseId)[0];
  return (
    <div className="page-wrapper">
      <div className="container page-container">
        <Banner
          title={"Invest directly into minority innovations."}
          isIncubator={false}
        />
        <div className="featured-wrapper">
          <div className="container">
            <div className="row details-view">
              <div className="col-sm-4 details--wrapper">
                Course Title: <h1>{selectedCourse.CourseTitle}</h1>
                Leasons Done: <h2>{selectedCourse.LessonsDone}</h2>
                Total N° of Leassons: <h2>{selectedCourse.LessonsCompleted}</h2>
                Course Description: <p>{selectedCourse.CourseDescription}</p>
              </div>
              <div className="col-sm-8 details--wrapper">
                <div class="col-sm-12">
                  <div class="tab_in_sec">
                    <div
                      class="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title">
                            <a
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                              class="active"
                            >
                              Leasson 1
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          class="panel-collapse collapse in"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                        >
                          <div class="panel-body">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.{" "}
                            </p>
                            <Link className="card-btn btn--secondary" to="#">
                                Play <i className="fa fa-play"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {
                          [2,3,4,5,6,7,8,9,10].map((v, i) => (
                            <div key={i} class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Leason {v}
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseTwo"
                              class="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingTwo"
                            >
                              <div class="panel-body">
                                <p>
                                  Lorem ipsum dolor sit amet,
                                </p>
                              </div>
                            </div>
                          </div>
                          ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCourse;
