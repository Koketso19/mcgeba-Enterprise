import React from 'react';



function HomePage() {
  return (
    <>
      <div className="nav-toggle" id="nav-toggle">
        <i className="uil uil-bars"></i>
      </div>

      <aside className="sidebar" id="sidebar">
        <nav className="nav">
          <div className="nav-logo">
            <a href="#" className="nav-logo-text">M</a>
          </div>

          <div className="nav-menu">
            <div className="menu">
              <ul className="nav-list">
                {["Home", "About", "Services", "Work", "", ""].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a href={`#${item.toLowerCase()}`} className={`nav-link ${item === "Home" ? "active-link" : ""}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="btn-share">
            <i className="uil uil-share-alt social-share"></i>
          </div>

          <div className="nav-close" id="nav-close">
            <i className="uil uil-times"></i>
          </div>
        </nav>
      </aside>

      <main className="main">
        <section className="home" id="home">
          <div className="home-container container grid">
            <div className="home-social">
              <span className="home-social-follow">Follow Me</span>
              <div className="home-social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="home-social-link">
                  <i className="uil uil-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="home-social-link">
                  <i className="uil uil-instagram"></i>
                </a>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="home-social-link">
                  <i className="uil uil-twitter"></i>
                </a>
              </div>
            </div>

            <img src="https://i.postimg.cc/3NgvPcZD/home-img.png" alt="Home" className="home-img" />

            <div className="home-data">
              <h1 className="home-title">Welcome to McGEBA Enterprise &amp; Projects</h1>
              <h3 className="home-subtitle">Your Trusted Partner in Business Excellence</h3>
              <p className="home-description">
              At Enterprise &amp; Projects, we are committed to delivering outstanding project management and professional services 
        rooted in integrity, innovation, and expertise. Led by Director Ditebogo Zulu, supported by our talented team including professional chef Arabang Dipitsi, 
        we strive to exceed expectations and bring your vision to life.
              </p>
              <a href="#about" className="button">
                <i className="uil uil-user button-icon"></i>
                More About me!
              </a>
            </div>

            <div className="my-info">
              <div className="info-item">
                <i className="uil uil-facebook-messenger info-icon"></i>
                <div>
                  <h3 className="info-title">Messenger</h3>
                  <span className="info-subtitle">0601027505 </span>
                </div>
              </div>

              <div className="info-item">
                <i className="uil uil-whatsapp info-icon"></i>
                <div>
                  <h3 className="info-title">Whatsapp</h3>
                  <span className="info-subtitle">0601027505 </span>
                </div>
              </div>

              <div className="info-item">
                <i className="uil uil-envelope-edit info-icon"></i>
                <div>
                  <h3 className="info-title">Email</h3>
                  <span className="info-subtitle">Info@mcgeba.co.za</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section-title" data-heading="My Intro">Meet Our Visionary Leader</h2>

          <div className="about-container container grid">
            <img src="dire.jpg" alt="About" className="about-img" />

            <div className="about-data">
              <h3 className="about-heading">Hi, I'm Ditebo ZULU, based in Gauteng</h3>
              <p className="about-description">
              Ditebogo Zulu is the driving force behind Enterprise & Projects (Pty) Ltd, a dynamic company rooted in community upliftment and service excellence. As Director, Ditebogo brings a bold vision to life — combining skills development, professional cleaning services, and culinary innovation to empower individuals and deliver top-tier services.

Under his leadership, the company has grown into a trusted name in Pretoria and beyond, transforming lives through training, creating job opportunities, and raising the bar in hospitality and hygiene standards. His passion for growth, quality, and impact is the heartbeat of every project we deliver.
              </p>
              <h3 className="about-heading">zbongizulu@gmail.com</h3>
              <div className="about-info">
                <div className="about-box">
                  <i className="uil uil-award about-icon"></i>
                  <h3 className="about-title">Contact</h3>
                  <span className="about-subtitle">0601027505</span>
                </div>
                <div className="about-box">
                  <i className="uil uil-suitcase-alt about-icon"></i>
                  <h3 className="about-title">Email</h3>
                  <span className="about-subtitle">zbongizulu@gmail.com</span>
                </div>
                <div className="about-box">
                  <i className="uil uil-headphones-alt about-icon"></i>
                  <h3 className="about-title">Support</h3>
                  <span className="about-subtitle">Online 24/7</span>
                </div>
              </div>

              <a href="#contact" className="button">
                <i className="uil uil-navigator button-icon"></i>
                Contact me
              </a>
            </div>
          </div>
        </section>
        <section className="about section" id="about">
          <h2 className="section-title" data-heading="My Intro">Meet Our Culinary Expert</h2>

          <div className="about-container container grid">
            <img src="./chef2.jpg" alt="About" className="about-img" />

            <div className="about-data">
              <h3 className="about-heading">Hi, I'm Chef, Arabang Dipitsi</h3>
              <p className="about-description">
              At the heart of our culinary and restaurant services is Chef Arabang Dipitsi, a passionate and highly skilled professional chef dedicated to creating exceptional dining experiences. With a deep love for food, creativity, and detail, Chef Arabang leads our kitchen with precision and flair.

From training aspiring chefs in our skills development programs to crafting high-quality meals for events and clients, she brings flavor, discipline, and elegance to everything she touches. Her commitment to excellence makes her an invaluable asset to Enterprise & Projects (Pty) Ltd — where food is not just served, but celebrated.
              </p>

              <div className="about-info">
                <div className="about-box">
                  <i className="uil uil-award about-icon"></i>
                  <h3 className="about-title">Experience</h3>
                  <span className="about-subtitle">10 + Years</span>
                </div>
                <div className="about-box">
                  <i className="uil uil-suitcase-alt about-icon"></i>
                  <h3 className="about-title">Completed</h3>
                  <span className="about-subtitle">60 + Projects</span>
                </div>
                <div className="about-box">
                  <i className="uil uil-headphones-alt about-icon"></i>
                  <h3 className="about-title">Support</h3>
                  <span className="about-subtitle">Online 24/7</span>
                </div>
              </div>

             
            </div>
          </div>
        </section>

        
        
        <section className="services section" id="services">
  <h2 className="section-title" data-heading="Services">Our Services</h2>

  <div className="services-container container grid">
    {/* Service 1 */}
    <div className="services-content">
      <div>
        <i className="uil uil-web-grid services-icon"></i>
        <h3 className="services-title">
        Culinary<br /> Services
        </h3>
      </div>

      <span className="services-button">
        View More <i className="uil uil-arrow-right services-button-icon"></i>
      </span>

      <div className="services-modal">
        <div className="services-modal-content">
          <i className="uil uil-times services-modal-close"></i>
          <h3 className="services-modal-title">Web Designer</h3>
          <p className="services-modal-description">
            I offer services with more than 3 years of experience with quality work to clients and companies
          </p>
          <ul className="services-modal-services grid">
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">User Interface Development</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Web Page Development</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Interactive UX/UI Creations</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Company Brand Positioning</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Design and Mockup of products for companies</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Service 2 */}
    <div className="services-content">
      <div>
        <i className="uil uil-arrow services-icon"></i>
        <h3 className="services-title">
        Cleaning <br /> Services
        </h3>
      </div>

      <span className="services-button">
        View More <i className="uil uil-arrow-right services-button-icon"></i>
      </span>

      <div className="services-modal">
        <div className="services-modal-content">
          <i className="uil uil-times services-modal-close"></i>
          <h3 className="services-modal-title">UI/UX Designer</h3>
          <p className="services-modal-description">
            I offer services with more than 5 years of experience with quality work to clients and companies
          </p>
          <ul className="services-modal-services grid">
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Usability Testing</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">User Research</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Interaction Design</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Responsive Design</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Branding & Style Guides</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Accessibility</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">A/B Testing</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Service 3 */}
    <div className="services-content">
      <div>
        <i className="uil uil-edit services-icon"></i>
        <h3 className="services-title">
        Skills <br /> Development
        </h3>
      </div>

      <span className="services-button">
        View More <i className="uil uil-arrow-right services-button-icon"></i>
      </span>

      <div className="services-modal">
        <div className="services-modal-content">
          <i className="uil uil-times services-modal-close"></i>
          <h3 className="services-modal-title">Branding Designer</h3>
          <p className="services-modal-description">
            I offer services with more than 2 years of experience with quality work to clients and companies
          </p>
          <ul className="services-modal-services grid">
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Competitive Analysis</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Accessibility Design</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Project Management</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Iteration and Refinement</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Presenting Designs</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">User Research</p>
            </li>
            <li className="services-modal-service">
              <i className="uil uil-check-circle services-modal-icon"></i>
              <p className="services-modal-info">Surveys & Questionnaires</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="work section" id="work">
  <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>

  <div className="work-filters">
    <span className="work-item active-work" data-filter="all">All</span>
    <span className="work-item" data-filter=".web">Web</span>
    <span className="work-item" data-filter=".app">App</span>
    <span className="work-item" data-filter=".design">Design</span>
  </div>

  <div className="work-container container grid">
    {[
      {
        img: "./food1.png",
        title: "food",
        category: "web",
        date: "22 Apr 2025",
        tech: "html css",
        role: "frontend",
        link: "#",
        detailsTitle: "The services we provide for design",
        description: "Two smartphones displaying a sleek, dark-themed dashboard interface",
      },
      {
        img: "./food2.jpg",
        title: "food",
        category: "app",
        date: "15 Apr 2025",
        tech: "html css",
        role: "frontend",
        link: "#",
        detailsTitle: "Mobile App Lanfing Design & App Maintain",
        description: "A stylish burger restaurant mobile app interface displayed on two smartphones",
      },
      {
        img: "./food3.jpg",
        title: "food",
        category: "design",
        date: "10 Apr 2025",
        tech: "html css",
        role: "frontend",
        link: "#",
        detailsTitle: "Logo Design Creativity & Application",
        description: "Three smartphone screens displaying a beautifully designed travel booking application interface",
      },
      {
        img: "./food4.jpg",
        title: "food",
        category: "app",
        date: "4 Apr 2025",
        tech: "html css",
        role: "frontend",
        link: "#",
        detailsTitle: "Mobile App Landing Design & Services",
        description: "Modern workout website interface design featuring a bold and energetic visual layout",
      },
      {
        img: "./food6.jpg",
        title: "food",
        category: "web",
        date: "28 Mar 2025",
        tech: "html css",
        role: "frontend",
        link: "#",
        detailsTitle: "Design for Technology & Services",
        description: "An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases",
      },
      {
        img: "./food7.jpg",
        title: "food",
        category: "design",
        date: "20 Mar 2025",
        tech: "html css",
        role: "frontend",
        link: "#",
        detailsTitle: "App for Technology & Services",
        description: "An app design that is clean and modern, making food browsing and ordering easy",
      },
    ].map((work, index) => (
      <div key={index} className={`work-card mix ${work.category}`}>
        <img src={work.img} alt="" className="work-img" />
        <h3 className="work-title">{work.title}</h3>
        <span className="work-button">
          Demo <i className="uil uil-arrow-right work-button-icon"></i>
        </span>

        <div className="portfolio-item-details">
          <h3 className="details-title">{work.detailsTitle}</h3>
          <p className="details-description">{work.description}</p>
          <ul className="details-info">
            <li>Created - <span>{work.date}</span></li>
            <li>Technologies - <span>{work.tech}</span></li>
            <li>Role - <span>{work.role}</span></li>
            <li>View - <span><a href={work.link}>www.domain.com</a></span></li>
          </ul>
        </div>
      </div>
    ))}
  </div>

  <div className="portfolio-popup">
    <div className="portfolio-popup-inner">
      <div className="portfolio-popup-content grid">
        <span className="portfolio-popup-close">
          <i className="uil uil-times"></i>
        </span>
        <div className="pp-thumbnail">
          <img src="https://i.postimg.cc/sXLjnC5p/work-2.png" alt="" className="portfolio-popup-img" />
        </div>

        <div className="portfolio-popup-info">
          <div className="portfolio-popup-subtitle">Featured - <span>Design</span></div>
          <div className="portfolio-popup-body">
            <h3 className="details-title">App for Technology & Services</h3>
            <p className="details-description">A stylish burger restaurant mobile app interface displayed on two smartphones</p>

            <ul className="details-info">
              <li>Created - <span>15 Apr 2025</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href="#">www.domain.com</a></span></li>
            </ul>

           
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>


      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Koketso Legoabe</h1>
            <span className="footer-subtitle">Software Developer</span>
          </div>

          <ul className="footer-links">
            <li>
              <a href="#services" className="footer-links"></a>
            </li>
            website Developmented by Koketso Legoabe
            <li>
              <a href="#work" className="footer-links"></a>
            </li>
            <li>
              <a href="#contact" className="footer-links"><p>Email: koke23897@gmail.com. | Phone: +27 676278758</p></a>
            </li>
          </ul>

          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <i className="uil uil-twitter"></i>
            </a>
          </div>
        </div>

        <p className="footer-copy">
         <a href="" target="_blank" rel="noopener noreferrer"></a>. 
        </p>
      </div>
   
        
      </main>
    </>
  );
}

export default HomePage;
