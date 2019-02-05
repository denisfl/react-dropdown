import React, { Component } from 'react'
import Item from '../Item'
import './styles.css'

class List extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentId: 0,
      lastId: 0
    }
  }

  static getDerivedStateFromProps(_props, state) {
    return {
      currentId: state.currentId || state.lastId
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
  }

  onKeyUp = (evt) => {
    switch (evt.keyCode) {
      case 38:
        return this.goPrev()
      case 40:
        return this.goNext()
      case 13:
        return this.saveId()
      default:
    }
  }

  goPrev = () => this.setState((prevState) => {
    const newId = prevState.currentId - 1

    return {
      currentId: newId > 0 ? newId : 0
    }
  })

  goNext = () => this.setState((prevState) => {
    const { list } = this.props
    const newId = prevState.currentId + 1

    return {
      currentId: list.length <= newId ? list.length - 1 : newId
    }
  })

  saveId = () => this.setState({ lastId:  this.state.currentId })

  render() {
    const { currentId } = this.state
    const { list } = this.props

    const currentItem = list[currentId]

    return (
      <div className="List">
        {list.map((key) => (
          <Item title={key}
                key={key}
                index={key}
                isActive={ key === currentItem ? true : false }
          />)
        )}
      </div>
    );
  }
}

export default List;
