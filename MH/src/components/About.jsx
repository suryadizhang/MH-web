import React from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import heroPic from "../assets/hero_pic.png";

const About = () => (
  <section className="about-section py-5 bg-light text-dark">
    <Helmet>
      <title>My Hibachi | Private Chef & Catering in the Bay Area</title>
      <meta
        name="description"
        content="Book a private hibachi chef for parties, weddings, and events in the Bay Area. Entertainment and catering with authentic teppanyaki flair!"
      />
      <meta
        name="keywords"
        content="hibachi catering, private chef, teppanyaki party, Bay Area hibachi, Sacramento chef, mobile grill"
      />
      <link rel="canonical" href="https://myhibachichef.com/" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "My Hibachi",
          image: "https://myhibachichef.com/assets/hero_pic.png",
          telephone: "(408) 123-4567",
          email: "info@myhibachi.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US",
          },
          servesCuisine: ["Japanese", "Hibachi", "Teppanyaki"],
          areaServed: [
            "San Francisco",
            "San Jose",
            "Sacramento",
            "Bay Area",
          ],
          url: "https://myhibachichef.com/",
        })}
      </script>
    </Helmet>

    {/* Hero Image (LCP Target) */}
    <div>
      <img
        src={heroPic}
        alt="Private hibachi chef cooking for guests in California"
        width="1920"
        height="800"
        loading="eager"
        fetchPriority="high"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>

    {/* Headline Section */}
    <div className="container text-center my-4">
      <h1 className="display-4 fw-bold text-primary mb-3">
        Experience the Art of Japanese Hibachi
      </h1>
      <h2 className="h5 text-secondary mb-4">
        Where Culinary Mastery Meets Unforgettable Entertainment
      </h2>
    </div>

    {/* About Content */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h3 className="fw-semibold mb-3">Meet Our Chefs</h3>
          <p className="lead">
            At <strong className="text-primary">My Hibachi</strong>, our
            talented chefs are masters of the teppanyaki grill. Trained in top
            Japanese kitchens, they fuse tradition with entertainment.
          </p>
          <p>
            Whether you’re hosting a birthday, proposal, wedding, or company
            event, we bring delicious food, flair, and fire—right to your
            backyard.
          </p>

          <h3 className="fw-semibold mt-5 mb-3">The Ultimate Mobile Experience</h3>
          <p>
            We serve the San Francisco Bay Area and Sacramento with an
            unforgettable mobile hibachi experience. Expect sizzling sounds,
            stunning tricks, and top-tier hospitality.
          </p>
          <p>
            Our team brings grills, chefs, ingredients, and showmanship—just
            bring the guests!
          </p>

          <div className="text-center mt-5">
            <h2 className="fw-bold text-success mb-3">
              Ready to host a night your guests will never forget?
            </h2>
            <p className="lead">
              Book your event today with{" "}
              <strong className="text-primary">My Hibachi</strong> and make
              dinner a show.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
