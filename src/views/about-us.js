import React from 'react'

import { Helmet } from 'react-helmet'

import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-us - Elecnovate</title>
        <meta property="og:title" content="About-us - Elecnovate" />
      </Helmet>
      <div className="about-us-sec1">
        <div className="about-us-about-us-container">
          <h1 className="about-us-text">Keep it simple</h1>
          <p className="about-us-about-us-description">
            <span>Where creative innovation meets great design solutions.</span>
            <br></br>
            <span>
              At Elecnovate, we&apos;re not just a team of designers; we&apos;re
              a collective passionate about redefining the design services
              landscape. Our journey begins with a simple belief: every pixel,
              every line, and every color has the potential to tell an
              interesting story.
            </span>
            <br></br>
            <br></br>
            <span>
              Built on this principle, Elecnovate offers a spectrum of creative
              solutions including:
            </span>
            <br></br>
            <span>1. Graphics Design</span>
            <br></br>
            <span>2. Branding</span>
            <br></br>
            <span>3. User Interface &amp; User Experience Design</span>
            <br></br>
            <span>4. Website design &amp; development</span>
            <br></br>
            <span>5. Social media design</span>
            <br></br>
            <br></br>
            <span>
              Through our core partnerships, we have fostered a culture where
              imagination knows no bounds and innovation thrives.
            </span>
            <br></br>
            <span>
              By seamlessly combining art and technology, we create an immersive
              visual experience that engages and captivates audiences. Our
              approach is not only about creating aesthetically pleasing designs
              but also about weaving stories that meet depth with authenticity
              and emotion.
            </span>
            <br></br>
            <span>
              At Elecnovate, perfection is not the goal; it&apos;s the standard.
              We are committed to exceeding expectations and setting new
              benchmarks in creativity and quality. Whether it&apos;s building a
              brand identity, designing an intuitive user interface, or creating
              compelling content, every project is characterized by attention to
              detail and an unwavering dedication to excellence.
            </span>
            <br></br>
            <span>
              As we continue to grow and develop, our commitment to our
              customers remains strong. We understand that design is more than
              just aesthetics; it&apos;s about creating a memorable experience.
              Join us on our journey one pixel at a time as we move forward into
              the future of design. Together, let&apos;s create something
              amazing.
            </span>
          </p>
          <button className="about-us-button button">Get Started</button>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxncmFwaGljJTIwZGVzaWdufGVufDB8fHx8MTcwOTQ0Mjc1NXww&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="about-us-image"
        />
      </div>
    </div>
  )
}

export default AboutUs