import React from 'react'
import './style.css'
import Button from '../common/buttons/index'
export default function index({
    title,
    subtitle,
    description,
    button,
    backgroundImage,
    backgroundColor,
}) {
  return (
    <div 
    className={`feel-special photo-section ${backgroundImage} ${backgroundColor}`}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: `${backgroundColor}`,
    }}
    >
    <div className="max-width">
      <div className="photo-section-child">
        <div className="photo-section-top dynamic-margin">
          <div className="photo-section-heading">
           {title}
          </div>
          <div className="photo-section-subheading">
            {subtitle}
          </div>
        </div>
        <div className="photo-section-bottom dynamic-margin">
          <div className="photo-section-description">
            {description}
          </div>
          {button && <Button {...button} />}
          <div className="photo-section-button">
            <Button buttonText="Explore rewards" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
