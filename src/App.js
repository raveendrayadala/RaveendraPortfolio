import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

const accessToken = "01QOmG1T7-_TzPTQKJctZsiCHD7lr4cQj_oi5CuO1n0";
const spaceId = "n083r2zq3wa3";
const query = `
{
  mainCollection {
    items {
      name
      occupation
      imageHero
      bio
      description
      email
      phone
      resume
      website
      resume
      aboutImage
    }
  }
  socialCollection {
    items {
      name
      url
      className
    }
  }
  educationCollection {
    items {
      school
      degree
      graduated
      description
    }
  }
  workCollection {
    items {
      title
      description
      years
      technologies
      company
    }
  }
  skillsCollection {
    items {
      name
      level
    }
  }
  projectsCollection {
    items {
      projectImage
      url
      volvoCarsCorporation
    }
  }
  testimonialsCollection {
    items {
      text
      user
    }
  }
}
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  componentDidMount() {
    {
      fetch(
        `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            query,
          }),
        }
      )
        .then((res) => res.json())
        .then((response) => {
          const data = response?.data;
          console.log(data);
          this.setState({
            loading: false,
            resumeData: data ? data : [],
          });
        })
        .catch((error) => {
          this.setState({
            loading: false,
            error: error.message
          });
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData} />
        <About data={this.state.resumeData?.mainCollection} />
        <Resume data={this.state.resumeData} />
        <Portfolio data={this.state.resumeData?.projectsCollection} />
        <Testimonials data={this.state.resumeData?.testimonialsCollection} />
        <Contact data={this.state.resumeData?.mainCollection} />
        <Footer data={this.state.resumeData.main} />
        {/* <HomeC /> */}

        {/* <Router>
<Route path="/home" exact strict render={ ()=>{ return(<h1>welcome to homepage </h1>); }}/>
<Route path="/about" exact strict render={ ()=>{ return(<h1>welcome to about page </h1>); }}/>
</Router> */}
      </div>
    );
  }
}

export default App;
