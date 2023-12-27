// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <div className="main-container">
      <div className={className}>
        <div className="container">
          <h1 className="main-heading"> {headerText} </h1>
          <p className="main-para"> {description} </p>
          <button className="btn"> Know More </button>
        </div>
      </div>
    </div>
  )
}
export default BannerCardItem
