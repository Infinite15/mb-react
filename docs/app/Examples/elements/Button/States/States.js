import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class extends Component {
  render() {
    return (
      <div>
        <ComponentExample
          title='Active'
          description='A button can show it is currently the active user selection'
          examplePath='elements/Button/States/Active'
        />

        <ComponentExample
          title='Disabled'
          description='A button can show it is currently unable to be interacted with'
          examplePath='elements/Button/States/Disabled'
        />

        <ComponentExample
          title='Loading'
          description='A button can show a loading indicator'
          examplePath='elements/Button/States/Loading'
        />

      </div>
    );
  }
}
