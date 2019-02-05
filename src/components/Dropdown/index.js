import React, { Component } from 'react';
import Popup from '../Popup';
import './styles.css';

class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.dropdown = null

    this.setDropdownRef = element => {
      this.dropdown = element
    }

    this.state = {
      isOpened: false,
      currentId: 0
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
    window.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
    window.removeEventListener('click', this.handleClick)
  }

  toggleDropdown = () => {
    const currentDropdownState = this.state.isOpened

    this.setState({ isOpened: !currentDropdownState })
  }

  closePopup = () => {
    this.setState({ isOpened: false })
  }

  handleClick = (evt) => {
    if (!this.dropdown.contains(evt.target)) {
      this.setState({ isOpened: false })
    }
  }

  onKeyUp = (evt) => {
    if (evt.keyCode === 27) {
      this.setState({ isOpened: false })
    }
  }

  classes = () => {
    return ['Dropdown',this.state.isOpened ? 'is-opened' : ''].join(' ')
  }

  render() {
    return (
      <div className={ this.classes() } ref={this.setDropdownRef}>
        <button className="Dropdown-toggleButton" onClick={ this.toggleDropdown }>Menu</button>

        {this.state.isOpened &&
          <Popup isOpened={this.state.isOpened} closePopup={this.closePopup}>
            { this.props.children }
          </Popup>
        }
      </div>
    );
  }
}

export default Dropdown;
