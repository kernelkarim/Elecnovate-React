import React from 'react'

import PropTypes from 'prop-types'

import './feature-card15.css'

const FeatureCard15 = (props) => {
  return (
    <div className={`feature-card15-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card15-text">{props.title}</h2>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card15-image"
      />
    </div>
  )
}

FeatureCard15.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  title: 'Lorem ipsum',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=300',
}

FeatureCard15.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default FeatureCard15
