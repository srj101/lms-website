import Count from "@/src/common/count.jsx";
import our_course_data from "@/src/data/our-course-data.js";
import Link from "next/link";
import React from "react";
import course_data_2 from "../../data/course-data-2.js";

// instructor_portfolio_data
const instructor_portfolio_data = [
  {
    id: 6,
    img: "/assets/img/bg/instruc-in-06.jpg",
    name: "SR Joy",
    total_class: "35",
    total_st: "291",
    title: "Full Stack Web Developer, Content Creator",
    sub_title: "Web Developer",
    followers: "35,600",
    following: "135",
    job_title: "Web Developer",
    phone: "+8801616346835",
    email: "salimreza6835@gmail.com",
    experiences_year: "9+ Years",
    skill_level: "Pro Level",
    language: "English",
    biography: (
      <>
        <p>
          As a full-stack web developer and content creator, I focus on
          delivering cutting-edge web solutions while also sharing valuable
          knowledge with a global audience. My work spans across web
          development, content creation, and digital strategy, empowering others
          to leverage technology for growth.
        </p>
        <p>
          I am passionate about exploring the intersection of tech, creativity,
          and business. By blending technical expertise with creativity, I
          develop innovative solutions and engaging content that resonates with
          diverse audiences. My journey involves continuous learning, teaching,
          and contributing to the tech and content creation communities.
        </p>
      </>
    ),
  },
];

// counter data
const counter_data = [
  {
    id: 1,
    icon: "fi fi-rr-user",
    count_number: 276,
    thousand: "K",
    title: "Worldwide Students",
  },
  {
    id: 2,
    icon: "fi fi-rr-document",
    count_number: 35,
    thousand: "",
    title: "Professional Courses",
  },
  {
    id: 3,
    icon: "fi fi-rr-star",
    count_number: 407,
    thousand: "K",
    title: "Beautiful Review",
  },
];

const InstructorPortfolioArea = () => {
  return (
    <>
      <section
        className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  {instructor_portfolio_data[0].img && (
                    <img
                      src={instructor_portfolio_data[0].img}
                      alt="instructor"
                    />
                  )}
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      {instructor_portfolio_data[0].name}
                    </h4>
                    <p>
                      {instructor_portfolio_data[0].title} <br />
                    </p>
                  </div>
                  <div className="instruc-follower d-flex align-items-center justify-content-center mb-25">
                    <div className="ins-followers">
                      <h4>{instructor_portfolio_data[0].followers}</h4>
                      <span>Followers</span>
                    </div>
                    <div className="ins-following">
                      <h4>{instructor_portfolio_data[0].following}</h4>
                      <span>Following</span>
                    </div>
                  </div>
                  <div className="instruc-side-btn text-center mb-40">
                    <Link className="ins-btn" href="#">
                      Follow +
                    </Link>
                  </div>
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Job Title</label>{" "}
                        <span>{instructor_portfolio_data[0].job_title}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label>{" "}
                        <span>{instructor_portfolio_data[0].phone}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Email</label>{" "}
                        <span>
                          <Link
                            href="mailto:
                          {instructor_portfolio_data[0].email}"
                          >
                            {instructor_portfolio_data[0].email}
                          </Link>
                        </span>
                      </li>
                      <li>
                        <i className="fi fi-rr-time-forward"></i>{" "}
                        <label>Experiences</label>{" "}
                        <span>
                          {instructor_portfolio_data[0].experiences_year}
                        </span>
                      </li>
                      <li>
                        <i className="fi fi-rs-time-check"></i>{" "}
                        <label>Skill Level</label> <span>Pro Level</span>
                      </li>
                      <li>
                        <i className="fi fi-br-comments"></i>{" "}
                        <label>Language</label> <span>English</span>
                      </li>
                    </ul>
                  </div>
                  <div className="c-details-social">
                    <h5 className="cd-social-title mb-25">Follow More:</h5>
                    <Link href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">Biography</h4>

                  {instructor_portfolio_data[0].biography}
                </div>
                <div className="instruc-statics mb-20">
                  <div className="row">
                    {counter_data.map((item, i) => (
                      <div key={i} className="col-xl-4 col-lg-6 col-md-4">
                        <div className="isntruc-tp-counter mb-30">
                          <h4 className="isntruc-tp-counter__title p-relative">
                            <span className="counter">
                              <Count
                                add_style={true}
                                number={item.count_number}
                                text={item.thousand}
                                style_3={true}
                              />
                            </span>
                          </h4>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="instructor-tp-course">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="instruc-biography">
                        <h2 className="ins-bio-title mb-35">Courses</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {our_course_data.slice(0, 4).map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className="tpcourse mb-40">
                          <div className="tpcourse__thumb p-relative w-img fix">
                            <Link href="/course-details">
                              <img src={item.img} alt="course-thumb" />
                            </Link>
                            <div className="tpcourse__tag">
                              <Link href="#">
                                <i className="fi fi-rr-heart"></i>
                              </Link>
                            </div>
                            <div className="tpcourse__img-icon">
                              <img src={item.icon} alt="course-avata" />
                            </div>
                          </div>
                          <div className="tpcourse__content-2">
                            <div className="tpcourse__category mb-10">
                              <ul className="tpcourse__price-list d-flex align-items-center">
                                <li>
                                  <Link
                                    className={item.ct_color}
                                    href="/course-details"
                                  >
                                    {item.course_title}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={item.cn_color}
                                    href="/course-details"
                                  >
                                    {item.course_name}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="tpcourse__ava-title mb-15">
                              <h4 className="tpcourse__title">
                                <Link href="/course-details">{item.title}</Link>
                              </h4>
                            </div>
                            <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                              <ul className="d-flex align-items-center">
                                <li>
                                  <img
                                    src="/assets/img/icon/c-meta-01.png"
                                    alt="meta-icon"
                                  />
                                  <span>{item.cls_text}</span>
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icon/c-meta-02.png"
                                    alt="meta-icon"
                                  />
                                  <span>{item.st_text}</span>
                                </li>
                              </ul>
                            </div>
                            <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                              <div className="tpcourse__rating-icon">
                                <span>4.7</span>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <p>(125)</p>
                              </div>
                              <div className="tpcourse__pricing">
                                <h5 className="price-title">$29.99</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="basic-pagination">
                    <nav>
                      <ul>
                        <li>
                          <Link href="/blog">
                            <i className="far fa-angle-left"></i>
                          </Link>
                        </li>
                        <li>
                          <span className="current">1</span>
                        </li>
                        <li>
                          <Link href="/blog">2</Link>
                        </li>
                        <li>
                          <Link href="/blog">3</Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="far fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorPortfolioArea;
