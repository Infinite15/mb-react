import React from 'react'

import Checkbox from 'src/modules/Checkbox/Checkbox'
import FormField from 'src/collections/Form/FormField'
import Radio from 'src/addons/Radio/Radio'
import * as common from 'test/specs/commonTests'

describe('FormField', () => {
  common.isConformant(FormField)
  common.implementsWidthProp(FormField, { propKey: 'width', canEqual: false })
  common.propKeyOnlyToClassName(FormField, 'error')
  common.propKeyOnlyToClassName(FormField, 'disabled')
  common.propKeyOnlyToClassName(FormField, 'inline')
  common.propKeyOnlyToClassName(FormField, 'required', { label: '' })
  common.rendersChildren(FormField)

  describe('html controls', () => {
    it('adds an HTML element child of the same type', () => {
      const controls = ['button', 'input', 'select', 'textarea']

      controls.forEach((control) => {
        shallow(<FormField control={control} />)
          .should.have.descendants(control)
      })
    })
  })

  describe('label', () => {
    it('is not added as a child by default', () => {
      shallow(<FormField />)
        .should.not.have.descendants('label')
    })
    it('is added as a child', () => {
      const wrapper = shallow(<FormField label='First Name' />)
      wrapper
        .should.have.descendants('label')

      wrapper
        .find('label')
        .should.contain.text('First Name')
    })
    it('wraps checkbox inputs', () => {
      const label = shallow(<FormField control='input' type='checkbox' label='Check this box' />)
        .find('label')

      label.childAt(0).should.have.tagName('input')
      label.should.contain.text('Check this box')
    })
    it('wraps radio inputs', () => {
      const label = shallow(<FormField control='input' type='radio' label='Check this box' />)
        .find('label')

      label.childAt(0).should.have.tagName('input')
      label.should.contain.text('Check this box')
    })
    it('is passed to Checkbox controls', () => {
      shallow(<FormField control={Checkbox} label='Passed to the Checkbox' />)
        .find('Checkbox')
        .should.have.prop('label', 'Passed to the Checkbox')
    })
    it('is passed to Radio controls', () => {
      shallow(<FormField control={Radio} label='Passed to the Radio' />)
        .find('Radio')
        .should.have.prop('label', 'Passed to the Radio')
    })
    it('is passed to custom control components with a "label" propType', () => {
      const HandlesLabel = () => null
      HandlesLabel.propTypes = { label: () => null }

      shallow(<FormField control={HandlesLabel} label='Passed to the HandlesLabel' />)
        .find('HandlesLabel')
        .should.have.prop('label', 'Passed to the HandlesLabel')
    })
    it('is not passed to custom control components without a "label" propType', () => {
      const DoesNotHandleLabel = () => null

      shallow(<FormField control={DoesNotHandleLabel} label='Passed to the DoesNotHandleLabel' />)
        .find('DoesNotHandleLabel')
        .should.not.have.prop('label', 'Passed to the DoesNotHandleLabel')
    })
  })
})
