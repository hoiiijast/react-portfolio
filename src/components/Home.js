import "./Home.css";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import photo from "../images/photo1.jpeg";
const Home = () => {
  return (
    <div className="Main__HomeSection">
      <div className="HomeSection__Text">
        <span className="HomeSection__MainText">
          <span className="Main__Emp">This is Justin.</span>
          <br /> A web developer from the Philippines.
        </span>
        <span className="HomeSection__SubText">
          He drives businesses towards success with bespoke digital solutions
          and user-centric experiences, crafted to elevate both online and
          offline presence.
        </span>
        <div className="HomeSection__IconsContainer">
          <a href="https://github.com/hoiiijast">
            <img className="SocMed__Icons" src={github} />
          </a>
          <a href="https://www.linkedin.com/in/justin-lenard-fernando-40731a171/">
            <img className="SocMed__Icons" src={twitter} />
          </a>
          <a href="https://twitter.com/hoiiijast">
            <img className="SocMed__Icons" src={linkedin} />
          </a>
          <a href="https://www.instagram.com/hoiiijast/">
            <img className="SocMed__Icons" src={instagram} />
          </a>
        </div>
      </div>
      <div className="HomeSection__Image">
        <img className="Person__Picture1" src={photo} />
      </div>
    </div>
  );
};

export default Home;
