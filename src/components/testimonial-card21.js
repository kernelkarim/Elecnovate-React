import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card21.css'

const TestimonialCard21 = (props) => {
  return (
    <div
      className={`testimonial-card21-testimonial-card ${props.rootClassName} `}
    >
      <div className="testimonial-card21-testimonial">
        <svg viewBox="0 0 1024 1024" className="testimonial-card21-icon">
          <path
            d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
            className=""
          ></path>
        </svg>
        <h3 className="testimonial-card21-text">{props.quote}</h3>
      </div>
      <img
        alt={props.profileAlt}
        src={props.profileSrc}
        className="testimonial-card21-image"
      />
    </div>
  )
}

TestimonialCard21.defaultProps = {
  name: 'John Doe',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  rootClassName: '',
  profileSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&w=200',
  profileAlt: 'profile',
}

TestimonialCard21.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  profileSrc: PropTypes.string,
  profileAlt: PropTypes.string,
}

export default TestimonialCard21
