import React, { Component } from 'react'
import { Button, Divider, Embed } from 'semantic-ui-react'

export default class EmbedExampleActive extends Component {
  state = {}

  handleClick = () => this.setState({ active: true })

  render() {
    const { active } = this.state

    return (
      <div>
        <Embed
          active={active}
          icon='arrow circle down'
          placeholder='http://semantic-ui.com/images/image-16by9.png'
          source='youtube'
          sourceId='90Omh7_I8vI'
        />

        <Divider hidden />

        <Button
          content='Activate'
          icon='bomb'
          labelPosition='left'
          onClick={this.handleClick}
        />
      </div>
    )
  }
}
