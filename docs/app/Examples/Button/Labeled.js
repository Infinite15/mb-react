import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Button className='labeled'>
        <Button>
          <i className='heart icon' /> Like
        </Button>
        // TODO: See PR #46 - button needs to render as a div
        <a className='ui basic label'>
          3,000
        </a>
      </Button>
    );
  }
}
