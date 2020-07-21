import React, { Component } from 'react'
export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                      Backend Software developer with a passion for non-profits. Working with inner city youth has fueled me to inspire and lead my community. My experience in enterprise sales has amplified my communication skills. I'm goal orientated, bilingual, looking to make tech more accessible to inner city communities.
                      </p>
                      <p>
                      Mastered the art of remote learning during a pandemic. All while being a full time father to a toddler! 👨‍👦
                      </p>
                      <p>
                      Before programing I was in sales, specializing in Latin American territories. By analyzing and identifying potential risks in these territories I discovered my passion of problem solving. I was already in the tech field, however I was not involved in the the creation processes. Thus led me to Turing School of Software and Design. 
                      </p>
                      <p>
                      Turing is a 7-month, in-person, intensive programming school. Throughout the program, I learned new programming languages, tools, and technologies quickly. Most of my programming experience is in Ruby on Rails, however I've also used Elxir, HTML/CSS, and Javascript.
                      </p>
                      <p>
                      Outside of coding, I enjoy seeing my son experience new experiences, watching anime, boxing, and exploring my native city's nightlife.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="colorlib-about" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">Protfolio</span>
                      <h2 className="colorlib-heading">MY CODING PROJECTS</h2>
                    </div>
                  </div>
                  <div>
                  . 
                  </div>
                <div className="row row-pt-md">
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                            <i className="icon-weather-stormy" />
                          </span>
                      <div className="desc">
                        <h3>
                          <a href="https://github.com/danmoran-pro/whether_sweater">
                          Whether Sweater
                          </a>
                        </h3>
                        <p>
                        This is a REST API that consumes GoogleMaps, HikingProject, OpenWeatherMap, Unsplash, and Zomato APIs. It was assigned as the Final Mod 3 Solo Project for Turing School of Software and Design. Required to be compeleted in less than a week. 
                        </p>
                        <p>
                        Expose an API that aggregates data from multiple external APIs while requiring authentication token as well for CRUD functionality
                        </p>
                        <p>
                          Tech stack includes Ruby, Rails, RSpec, PostgreSQL, Heroku.
                          <p>
                          <br />
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/danmoran-pro/whether_sweater"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github Repo Link
                            </a>
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                            <i className="icon-youtube" />
                          </span>
                      <div className="desc">
                        <h3>
                          <a href="https://github.com/danmoran-pro/brownfield-of-dreams">
                          Brownfield of Dreams
                          </a>
                        </h3>
                        <p>
                        This is a Ruby on Rails application used to organize YouTube content used for online learning. Each tutorial is a playlist of video segments. Within the application an admin is able to create tags for each tutorial in the database. 
                        </p>
                        <p>
                        A visitor or registered user can then filter tutorials based on these tags, have the ability to see all of the content on the application.
                        </p>
                        <p>
                        A visitor is limited in only viewing all the content on the application, however a registered user has additional functionality such as bookmarking any of the segments in a tutorial page.
                        </p>
                        <p>
                          Tech stack includes Ruby, Rails, RSpec, PostgreSQL, Github OAuth, Heroku.
                          <p>
                          <br />
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/danmoran-pro/brownfield-of-dreams"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github Repo Link
                            </a>
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                            <i className="icon-shop" />
                          </span>
                      <div className="desc">
                        <h3>
                          <a href="https://github.com/danmoran-pro/monster_shop_1911_final">
                           Monster Shop
                          </a>
                        </h3>
                        <p>
                          This is an e-commerce Ruby on Rails application with CRUD functionality. It was a brownfield 3-person group project with continued construction to complete a full functioning e-commerce application.
                          project.
                        </p>
                        <p>
                          Additionally the solo portion of this project added on discount functionality for a merchant's item.
                        </p>
                        <p>
                          Tech stack includes Ruby, Rails, RSpec, PostgreSQL, HTML/CSS, Heroku.
                          <p>
                          <br />
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/danmoran-pro/monster_shop_1911_final"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github Repo Link
                            </a>
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    );
  }
}