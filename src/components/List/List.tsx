import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components";
import Grid from '@mui/material/Grid';

import Person from '../Person/Person'
import { User } from '../../interfaces/User.interface'

interface ListProps {
	filterBy: string,
	list?: Array<User>, 
	loading?: boolean,
	quantity?: number
}

const List = ({ filterBy, list, loading, quantity } : ListProps) => {


	function filter(list) {
		return list.filter((user) => `${user.name} ${user.age}`.includes(filterBy))
	}

	function limit(list) {
		return list.slice(0, quantity)
	}

	function render(list) {
		return list.map((user, key) => <Person key={key} name={user.name} age={user.age} />)
	}

	return (
		<Grid container xs={6} md={6}>
			{ loading && 'Loading...'}
			{list.length > 0 && render(limit(filter(list)))}
		</Grid>
	)
}

export default List 
