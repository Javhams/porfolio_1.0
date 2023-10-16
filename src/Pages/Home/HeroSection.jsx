export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Javier</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FRONT END WEB </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Talented web development professional highly experienced with a 
          wide range of programming languages and design tools. 
            <br /> Skilled at producing clean, secure code based on individual client's needs.
            <br /> Focused on delighting customers with innovative, user-friendly designs.
            <br />
            <br />
            Motivated and passionate Front-End web developer. Former experience in dynamic, fast-paced
            enviroments. Self-motivated with the ability to learn quickly and a deep interest in data
            management and UI design.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
        
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
