import React from "react";

class PortfolioSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: "http://stanfordflipside.com/images/279puppies.jpg",
          title: "Project 1",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa praesentium, suscipit, itaque maxime officiis fugit doloribus aliquam dolorum voluptatum impedit cum explicabo cupiditate, neque harum libero voluptate. Reprehenderit, eum beatae!",
          link: "google.com"
        },
        {
          image:
            "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8",
          title: "Project 2",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa praesentium, suscipit, itaque maxime officiis fugit doloribus aliquam dolorum voluptatum impedit cum explicabo cupiditate, neque harum libero voluptate. Reprehenderit, eum beatae!",
          link: "google.com"
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <h4>My projects</h4> <br />
        <div>
          {this.state.projects.map(project => {
            return (
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={project.image} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    {project.title}
                    <i class="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href={project.link}>This is a link</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    {project.title}
                    <i class="material-icons right">close</i>
                  </span>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PortfolioSection;