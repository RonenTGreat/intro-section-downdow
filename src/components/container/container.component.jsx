import "./container.styles.css"

import heroDesktop from "../../assets/images/image-hero-desktop.png"

import heroMobile from "../../assets/images/image-hero-mobile.png"

import databiz from "../../assets/images/client-databiz.svg";

import audiophile from "../../assets/images/client-audiophile.svg";

import meet from "../../assets/images/client-meet.svg";

import maker from "../../assets/images/client-maker.svg";

const Container  = () => {
  return ( 
    <main className="container">
      <section className="main-section">
        <picture>
          <source media="(max-width:425px)" srcSet={heroMobile} />
          <img src={heroDesktop} className="body-img" alt="web3 iamge" />
        </picture>

        <div className="content">
          <h1 className="content__heading">Make remote work</h1>

          <p className="content__paragraph">
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>

          <button className="content__btn">Learn more</button>


          <div className="content__images">
            <img src={databiz} alt="databiz" />
            <img src={audiophile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />

          </div>
        </div>


      </section>
    </main>
   );
}
 
export default Container;