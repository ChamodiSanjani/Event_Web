// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main>
    <section className="intro" style={{ backgroundImage: 'url(https://www.excellsecurity.com.au/wp-content/uploads/2017/10/3-Tips-for-Effective-Crowd-Control.jpg)' }}>
      <div className="overlay">
        <div className="container">
          <h1>Magical Event Planner</h1>
          <p>Easily create and manage your events magically in one place <br /> |Weddings| |Parties| |Gatherings| |Any other Indoor Outdoor Events|</p>
        </div>
      </div>
    </section>

    <section className="navigation gallery">
      <div className="container">
        <h2 className="explore-more-title">Make Your Events Magical with Us</h2>
        <div className="images">
          <div className="image-container">
            <img src="https://i.pinimg.com/736x/3c/0b/24/3c0b24f85f95481e64f48bf3f365c4b1.jpg" alt="Gallery Image 1" />
            <Link to="/data-collection" className="button-overlay">Event Collection</Link>
          </div>
          <div className="image-container">
            <img src="https://img.freepik.com/premium-photo/wedding-reception-with-lights-table-with-lights-flowers_1090087-93768.jpg" alt="Gallery Image 2" />
            <Link to="/create-new-event" className="button-overlay">Create New Event</Link> {/* Updated link */}
          </div>
          <div className="image-container">
            <img src="https://i.pinimg.com/550x/d4/1a/c7/d41ac756e479e000c97742ecc47d8fa3.jpg" alt="Gallery Image 3" />
            <Link to="/my-events" className="button-overlay">My Events</Link>
          </div>
          <div className="image-container">
            <img src="https://content.jdmagicbox.com/v2/comp/delhi/b8/011pxx11.xx11.210621161154.z3b8/catalogue/gfx-events-sant-nagar-east-of-kailash-delhi-wedding-planners-uafhpvf3om.jpg" alt="Gallery Image 4" />
            <Link to="/reviews" className="button-overlay">Reviews</Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
