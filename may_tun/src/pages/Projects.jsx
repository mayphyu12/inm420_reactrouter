
import projectsimg from '../assets/images/project.jpg';
import grain from '../assets/images/grainproject.png';
import meat from '../assets/images/meatproject.png';
import cookie from '../assets/images/cookieproject.png';
import bread from '../assets/images/breadproject.png';
export default function Projects() {
    return (
      <main>
        <img src={projectsimg} className="project-banner" alt="Projects" />  
        <h2>Our Food Projects</h2>
        <div className="container project-container">
            <ul>
                <li>Production Grain Project</li>
                <li> <img src={grain} className="" alt="Grain Project" />  </li>
                <li>Export Meat Project</li>
                <li> <img src={meat} className="" alt="Meat Project" />  </li>
                <li>Distributing Cookies and Crakers</li>
                <li> <img src={cookie} className="" alt="Cookie Project" />  </li>
                <li>Making Bread</li>
                <li> <img src={bread} className="" alt="Bread Project" />  </li>
            </ul>
        </div>
        
      </main>
    );
  }

  