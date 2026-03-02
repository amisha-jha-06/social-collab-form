import bannerImage from '../images/Web (1).jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  )
}

export default Banner