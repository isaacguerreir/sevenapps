import  * as React from 'react'
import { User } from '../../interfaces/User.interface'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

interface Props {
	key?: any
}
type PersonProps = Props & User

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

const CustomCard = styled(Card)({
	margin: '1rem 0'
})

const Person = (props: PersonProps) => {
	const { Name, Age } = validateProps(props);
	return (
		<Grid xs={12} md={12}>
			<CustomCard variant="outlined">
					<CardContent>
						<Typography variant="h5" component="div">Name: {Name}</Typography>
						<Typography variant="h5" component="div">Age: {Name}</Typography>
					</CardContent>
			</CustomCard>
		</Grid>
	)	
}

export default Person
