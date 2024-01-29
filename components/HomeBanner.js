import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();
  const handleSingIn = ()=>{
    navigate('/register')
  }
  return (
    <>
      <div className="home-banner">
        <div className="home-text">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="home-get-started">
            <input type="email" placeholder="Email address" minLength={5} maxLength={50}></input>
            <button className="btn btn-danger" onClick={handleSingIn}>Get started</button>
          </div>
        </div>
        <div className="blur"></div>
        <img
          className="concord-img vlv-creative"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        ></img>
      </div>
    </>
  );
};

export default HomeBanner;
