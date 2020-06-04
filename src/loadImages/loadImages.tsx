import React from 'react'
// const anyImage = 'abcd_efgh_1'
// require('../images/' + anyImage + '.png')

const Card = ({ src }: any) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw db w-20">
      <img className="personal " alt="robots" src={require('../images/' + src)} />
      {/* <img className="personal " alt="robots" src={require(src)} /> */}
    </div>
  )
}

const LoadImages = () => {
  const images = [
    'abcd_efgh_1.png',
    'abcd_efgh_2.png',
    'abcd_efgh_3.png',
    'abcd_efgh_4.png',
    'abcd_efgh_5.png',
    'abcd_efgh_6.png',
    'abcd_efgh_7.png',
    'abcd_efgh_8.png',
    'abcd_efgh_9.png',
  ]
  const images2 = [
    '../images/abcd_efgh_1.png',
    '../images/abcd_efgh_2.png',
    '../images/abcd_efgh_3.png',
    '../images/abcd_efgh_4.png',
    '../images/abcd_efgh_5.png',
    '../images/abcd_efgh_6.png',
    '../images/abcd_efgh_7.png',
    '../images/abcd_efgh_8.png',
    '../images/abcd_efgh_9.png',
  ]
  return (
    <>
      {images.map((image, i) => (
        <Card key={image} src={image} />
      ))}
    </>
  )
}

export default LoadImages
