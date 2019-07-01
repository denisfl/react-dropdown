import React, { Component } from 'react';

import './styles.css';

class Item extends Component {
  constructor (props) {
    super(props)

    this.state = { isOpened: this.props.popupIsOpened }
  }

  handleClick = () => {
    console.log('click')
    this.setState({ isOpened: false })
  }

  render() {
    const { isActive, title } = this.props
    return (
      <div className={['Item', isActive ? 'is-active': null].join(' ')} onClick={this.handleClick}>{ title }</div>
    )
  }
}

export default Item;
