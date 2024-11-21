// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointments, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointments
  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const formatDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const onClickstar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-list">
      <div className="appointment-container">
        <div>
          <p className="title">{title}</p>
          <p className="date">Date: {formatDate}</p>
        </div>
        <button
          onClick={onClickstar}
          data-testid="star"
          className="Button"
          type="button"
        >
          <img src={starImageUrl} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
