import React, { Component } from 'react'

export default class Search extends Component {
  state = {
    images: []
  }

  render() {
    return (
      <div>
        <input type="text"/>
        <input type="submit" value="Submit"/>
      </div>
    )
  }
}
