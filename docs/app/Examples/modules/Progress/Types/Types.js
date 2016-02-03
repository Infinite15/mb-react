import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class ProgressTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Progress'
          description='A standard progress bar.'
          examplePath='modules/Progress/Types/Standard'
        />
      </ExampleSection>
    );
  }
}
