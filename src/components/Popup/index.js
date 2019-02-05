import React, { Component } from 'react';
import { isBottom, isRight } from './helpers'
import './styles.css';

class Popup extends Component {
  constructor(props) {
    super(props)

    this.popup = null

    this.setPopupRef = element => {
      this.popup = element
    }

    this.state = {
      isOpened: false,
      styles: null
    }
  }

  componentDidMount() {
    this.setStyles()
  }

  closePopup = () => {
    this.setState({ isOpened: false })
  }

  setStyles = () => {
    this.setState({ styles: this.getPosition() })
  }

  getPosition = () => {
    const position = {}
    const elPosition = this.popup.getBoundingClientRect()
    const area = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    if (isBottom(area, elPosition)) {
      position.top = 'unset'
      position.bottom = '100%'
    }

    if (isRight(area, elPosition)) {
      position.left = 'unset'
      position.right = 0
    }

    return position
  }

  render() {
    const { isOpened, children, closePopup } = this.props

    if (!isOpened) return null

    return (
      <div className="Popup" style={this.state.styles} ref={this.setPopupRef}>
        <button className="Popup-closeButton" onClick={ closePopup }>&times;</button>

        { children }
      </div>
    );
  }
}

export default Popup;
