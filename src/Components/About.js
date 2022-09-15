import React, { Component } from "react";

class About extends Component {
  render() {
    const getMainContent = this.props.data?.items[0];
    if (getMainContent !== undefined) {
      var name = getMainContent?.name;
      var profilepic = getMainContent?.aboutImage;
      var bio = getMainContent?.bio;
      var phone = getMainContent?.phone;
      var email = getMainContent?.email;
      var resumeDownload = getMainContent?.resume;
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Yadala Raveendra Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span> <br />
                  <span>{phone}</span> <br />
                  <span>{email}</span>
                  <br />
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
