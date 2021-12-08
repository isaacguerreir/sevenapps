import  * as React from 'react'

interface PersonProps {
	name: string,
	age: number,
	key?: any
}

interface DataAssembled {
	Name: string,
	Age: number
}

const checkIfValid = (condition : boolean, value : any, outOfCase : any) => {
	if (!condition) console.warn("The props for Person are incorrect.") 
	return condition ? value : outOfCase
}

const validateProps = ({name, age} : PersonProps) : DataAssembled => {
	const Name : string = checkIfValid(name && name.length > 0, name, '')
	const Age : number = checkIfValid(age >= 0, age, 0)
	
	return { Name, Age }
}



const Person = (props: PersonProps) => {
	const { Name, Age } = validateProps(props);
	return (
		<div>
			<div>Name: {Name}</div>
			<div>Age: {Age}</div>
		</div>
	)	
}

export default Person
