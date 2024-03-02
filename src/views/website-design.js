import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard12 from '../components/feature-card12'
import TestimonialCard11 from '../components/testimonial-card11'
import './website-design.css'

const WebsiteDesign = (props) => {
  return (
    <div className="website-design-container">
      <Helmet>
        <title>Website-Design - Elecnovate</title>
        <meta property="og:title" content="Website-Design - Elecnovate" />
      </Helmet>
      <div className="website-design-hero">
        <div className="website-design-container01">
          <h1 className="website-design-text">Web Design</h1>
          <span className="website-design-text01">
            <span>
              Navigate the digital landscape with exceptional website design.
              Each website is not just a digital presence but a crafted
              experience. Explore my portfolio to see how I merge aesthetics
              with functionality, creating online spaces that leave a lasting
              impression.
            </span>
            <br></br>
            <br></br>
          </span>
          <div className="website-design-btn-group">
            <button className="website-design-button button">
              Get Started
            </button>
            <button className="website-design-button1 button">
              Learn More
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;w=1200"
          className="website-design-image"
        />
      </div>
      <div className="website-design-features">
        <h1 className="website-design-text05">CREATE SOMETHING GREAT</h1>
        <span className="website-design-text06">
          <span className="website-design-text07">
            At the core of our business is development. We are delivering
            efficient, scalable, and thoroughly tested solutions.
          </span>
          <br></br>
          <span>Empowering Your Vision with Cutting-Edge Solutions.</span>
          <br></br>
          <br></br>
        </span>
        <button className="website-design-button2 button">Learn More</button>
        <div className="website-design-container02">
          <FeatureCard12
            title="Wordpress"
            imageAlt="Wordpress Design Services"
            imageSrc="/Home/wordpress-icon.svg"
            rootClassName="rootClassName"
          ></FeatureCard12>
          <FeatureCard12
            title="Shopify"
            imageSrc="/Home/shopify-icon.svg"
            rootClassName="rootClassName1"
          ></FeatureCard12>
          <FeatureCard12
            title="Wix"
            imageSrc="/Home/wix-company-icon.svg"
            rootClassName="rootClassName2"
          ></FeatureCard12>
          <FeatureCard12
            title="Figma"
            imageSrc="/Home/squarespace-icon.svg"
            rootClassName="rootClassName3"
          ></FeatureCard12>
          <FeatureCard12
            title="Adobe XD"
            imageSrc="/Home/adobe-xd-icon.svg"
            rootClassName="rootClassName7"
          ></FeatureCard12>
          <FeatureCard12
            title="HTML"
            imageSrc="/Home/figma-icon.svg"
            rootClassName="rootClassName6"
          ></FeatureCard12>
          <FeatureCard12
            title="HTML"
            imageSrc="/Home/html-icon.svg"
            rootClassName="rootClassName5"
          ></FeatureCard12>
          <FeatureCard12
            title="CSS"
            imageSrc="/Home/css-icon.svg"
            rootClassName="rootClassName4"
          ></FeatureCard12>
        </div>
      </div>
      <div className="website-design-testimonial">
        <div className="website-design-container03">
          <h1 className="website-design-text12">
            <span>We believe in collaboration and innovation</span>
            <br></br>
          </h1>
          <span className="website-design-text15">
            Versatile web design and development services committed to
            transforming your concepts into captivating online realities.
            Let&apos;s bring your ideas to life!
          </span>
          <div className="website-design-container04">
            <TestimonialCard11
              role="Create your brand identity"
              quote="Our custom website design services go beyond aesthetics; it's about capturing the essence of your brand. We carefully craft visually appealing layouts, appropriate color schemes, typography and images, ensuring that every element reflects your brand identity, values ​​and goals. With us, your website becomes a seamless extension of your brand story."
              pictureAlt="Create your brand identity"
              pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></TestimonialCard11>
            <TestimonialCard11
              role="Cross-device optimization"
              quote="In today's multi-device world, effective design is not a problem. We ensure that your website looks and works smoothly on all devices and screen sizes - from desktop to smartphone. With our intuitive design approach, your audience enjoys a consistent and engaging experience that improves accessibility and user satisfaction. "
              pictureAlt="Cross-device optimization"
              pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName8"
            ></TestimonialCard11>
            <TestimonialCard11
              role="Improve user experience"
              quote="The success of your website depends on the user experience. Our UX design practice focuses on creating intuitive navigation, clearly defining calls to action, and eliminating friction points in the user journey. Every interaction is carefully designed to ensure a smooth and enjoyable travel experience for your visitors."
              pictureAlt="Improve user experience"
              pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName5"
            ></TestimonialCard11>
            <TestimonialCard11
              role="Creating Intuitive Interfaces"
              quote="UI design meets aesthetics and functionality. We specialize in designing visual interfaces that are not only easy on the eyes, but also intuitive to navigate. From buttons to forms, menus to sliders, every element is carefully designed to maximize usability and increase machine engagement."
              pictureAlt="Creating Intuitive Interfaces"
              rootClassName="rootClassName"
            ></TestimonialCard11>
            <TestimonialCard11
              role="Structure Content for Transparency"
              quote="Information architecture is the backbone of a user-friendly website. We organize your content and structure in a logical and intuitive way. Through sitemaps, wireframes, and content hierarchies, we provide effortless navigation and information retrieval for your audience."
              pictureAlt="Structure Content for Transparency"
              rootClassName="rootClassName7"
            ></TestimonialCard11>
            <TestimonialCard11
              role="Improve Visual Appeal"
              quote="Graphics are the lifeblood of your website. Our graphic design services create custom graphics, logos, illustrations and other visual elements that are engaging and inspiring. Every detail is carefully designed to enhance your brand, communicate effectively and leave a lasting impression."
              pictureAlt="Improve Visual Appeal"
              rootClassName="rootClassName4"
            ></TestimonialCard11>
            <TestimonialCard11
              role="Content Integration"
              quote="Content is king, and we make sure it rules on your website. From text to multimedia elements, we help you create and integrate effective content that resonates with your audience. Your website content should not only be informative, but should also match your design and messaging strategy."
              pictureAlt="Content Integration"
              pictureSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></TestimonialCard11>
            <TestimonialCard11
              role="Increase Search Visibility"
              quote="With our SEO expertise, your website is more than just; bloom We implement SEO best practices to optimize your website for search engines, increase visibility and rank in search results. We ensure that your website attracts the right audience through keyword research, on-page optimization and technical improvements."
              pictureAlt="Increase Search Visibility"
              pictureSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName6"
            ></TestimonialCard11>
            <TestimonialCard11
              role="Reliable Service and Support"
              quote="Tempus egestas sed sed risus pretium quam vulputate dignissim. Ipsum consequat nisl vel pretium lectus quam id leo in. In pellentesque massa placerat duis ultricies lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Etiam sit amet nisl purus in mollis."
              pictureAlt="Reliable Service and Support"
              pictureSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></TestimonialCard11>
          </div>
        </div>
      </div>
      <div className="website-design-gallery">
        <div className="website-design-container05">
          <div className="website-design-container06">
            <h1 className="website-design-text16">Ecommerce</h1>
            <span className="website-design-text17">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
        <div className="website-design-container07">
          <div className="website-design-container08">
            <h1 className="website-design-text18">Blog</h1>
            <span className="website-design-text19">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="website-design-container09">
          <div className="website-design-container10">
            <h1 className="website-design-text21">Portfolio</h1>
            <span className="website-design-text22">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="website-design-container11">
          <div className="website-design-container12">
            <h1 className="website-design-text24">
              <span className="website-design-text25">Landing Page</span>
              <br></br>
              <br className="website-design-text27"></br>
            </h1>
            <span className="website-design-text28">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="website-design-container13">
          <div className="website-design-container14">
            <h1 className="website-design-text30">
              Content Management System (CMS) Integration
            </h1>
            <span className="website-design-text31">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="website-design-container15">
          <div className="website-design-container16">
            <h1 className="website-design-text33">Project Title</h1>
            <span className="website-design-text34">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteDesign