import {Component} from 'react'
import './index.css'

class UserDetails extends Component {
  state = {
    name: '',
    email: '',
  }

  onSubmitting = event => {
    event.preventDefault()
    const {name, email} = this.state
    if (name.trim() === '') alert('Enter name')
    else if (email.trim() === '') alert('Enter email')
    else {
      localStorage.setItem('userDetails', JSON.stringify({name, email}))
      this.setState({name: '', email: ''})
      const {history} = this.props
      history.replace('/shows')
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  render() {
    const {name, email} = this.state
    return (
      <div className="user-details-container">
        <img
          src="https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?w=740&t=st=1692803706~exp=1692804306~hmac=d0cbd870f34180ab099bc360845f27b87cd53ea5d3576f1e176a52ac86613228"
          alt="login"
          className="login-user-img"
        />
        <form onSubmit={this.onSubmitting}>
          <h1 className="user-details-heading">User Details</h1>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Name"
            value={name}
            onChange={this.onChangeName}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Email"
            value={email}
            onChange={this.onChangeEmail}
          />
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default UserDetails
