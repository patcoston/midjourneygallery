import React, { useState } from 'react'
import images from './images'

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const imagesPerPage = 5

  const handleNext = () => {
    if (currentIndex + imagesPerPage >= images.length) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + imagesPerPage)
    }
    window.scrollTo(0, 0)
  }

  const handlePrevious = () => {
    if (currentIndex - imagesPerPage < 0) {
      setCurrentIndex(images.length - (images.length % imagesPerPage))
    } else {
      setCurrentIndex(currentIndex - imagesPerPage)
    }
    window.scrollTo(0, 0)
  }

  const Buttons = () => {
    return (
      <div>
        <button onClick={handlePrevious}>&lt;&lt; PREV</button>
        <button onClick={handleNext}>NEXT &gt;&gt;</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Midjourney Gallery with Prompts</h1>
      <Buttons />
      {images
        .slice(currentIndex, currentIndex + imagesPerPage)
        .map((image, index) => (
          <div key={index}>
            <div>{`Image ${currentIndex + index + 1} of ${images.length}`}</div>
            <img src={`images/${image.image}`} />
            <div>{image.prompt}</div>
          </div>
        ))}
      <Buttons />
    </div>
  )
}

export default Gallery
