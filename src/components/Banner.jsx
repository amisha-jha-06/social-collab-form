import bannerImage from '../images/LandingPage-Unit.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  )
}

export default Banner