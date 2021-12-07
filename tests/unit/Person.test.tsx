import * as React from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react';
import * as renderer from 'react-test-renderer';


import Person from '../../src/components/Person/Person'

describe("Person function component", () => {
	test("Should render person with name Roberto and age 31", async () => {
		const { getByText } = render(<Person name="Roberto" age="31"/>)
		
		expect(getByText('Name: Roberto')).toBeInTheDocument()
		expect(getByText('Age: 31')).toBeInTheDocument()
	})

	test("Should render person with name Isaac and age 0", async () => {
		const { getByText } = render(<Person name="Isaac" age="-1"/>)
		
		expect(getByText('Name: Isaac')).toBeInTheDocument()
		expect(getByText('Age: 0')).toBeInTheDocument()
	})

	
	test("Should render person with name '' and age 0 if not argument is passed", async () => {
		const { getByText } = render(<Person name="" age=""/>)
		
		expect(getByText('Name:')).toBeInTheDocument()
		expect(getByText('Age: 0')).toBeInTheDocument()
	})

	
	test("Should it render comparing to snapshot", async () => {
		const tree = renderer.create(<Person name="Lucas" age="26"/>)
    			.toJSON();
  		expect(tree).toMatchSnapshot();	
	})
})
