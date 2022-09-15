import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    const getMainContent = this.props.data?.items;
    if (getMainContent !== undefined) {


      var projects = getMainContent.map(function (projects) {
        var projectImage =projects.projectImage;
        return (
          <div key={projects.volvoCarsCorporation} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.volvoCarsCorporation} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <center>
                      <h5>{projects.volvoCarsCorporation}</h5>
                    </center>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
          {/* <ul>
  
  <Link to="./GoogleMap"> Google Map</Link>
</ul> */}
        </div>
      </section>
    );
  }
}

export default Portfolio;
