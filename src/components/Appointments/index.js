// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentsList: [],
    isActive: false,
  }

  onClickFilter = () => {
    const {isActive} = this.state
    this.setState({
      isActive: !isActive,
    })
  }

  getFilteredAppointmentsList = () => {
    const {appointmentsList, isActive} = this.state

    if (isActive) {
      return appointmentsList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return appointmentsList
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  Addappointment = event => {
    event.preventDefault()

    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  isRender = () => {
    const {appointmentsList} = this.state
    const filteredAppointmentsList = this.getFilteredAppointmentsList()

    return filteredAppointmentsList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointments={eachAppointment}
        toggleIsStarred={this.toggleIsStarred}
      />
    ))
  }

  render() {
    const {title, date, appointmentsList} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="sub-container">
            <div className="form-container">
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.Addappointment}>
                <label htmlFor="title" className="appointment-title">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  className="input-element"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChangeTitle}
                />
                <br />
                <label htmlFor="date" className="appointment-title">
                  Date
                </label>
                <br />
                <input
                  type="date"
                  id="date"
                  placeholder="Date"
                  className="input-element"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <br />
                <button
                  type="submit"
                  className="button"
                  onClick={this.getStarappointments}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="button-container">
            <h1 className="sub-heading">Appointments</h1>
            <button
              className="star-button"
              type="button"
              onClick={this.onClickFilter}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-container">{this.isRender()}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments
