import React from 'react'

import PropTypes from 'prop-types'

import './feature-card12.css'

const FeatureCard12 = (props) => {
  return (
    <div className={`feature-card12-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card12-text">{props.title}</h2>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card12-image"
      />
    </div>
  )
}

FeatureCard12.defaultProps = {
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  title: 'Lorem ipsum',
  imageAlt: 'image',
}

FeatureCard12.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default FeatureCard12