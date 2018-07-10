import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Menu"
      description="A menu."
      examplePath="components/Menu/Types/MenuExample"
    />
    <ShorthandExample examplePath="components/Menu/Types/MenuExampleShorthand" />
    <ComponentExample
      description="Menu item text can be defined with the content prop."
      examplePath="components/Menu/Types/MenuExampleContent"
    />
  </ExampleSection>
)

export default Types
