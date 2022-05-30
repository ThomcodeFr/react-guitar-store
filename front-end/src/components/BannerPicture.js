import guitarist from '../assets/img/guitarist.png'
import '../assets/css/bannerStyle.css'

function bannerPicture() {
  return (
    <div className="bannerStyle">
      <img src={guitarist} alt="Picture guitarist" />
    </div>
  )
}

export default bannerPicture
