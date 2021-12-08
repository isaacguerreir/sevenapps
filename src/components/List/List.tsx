import * as React from 'react'
import { useState, useEffect } from 'react'
import useFetch from 'use-http'

import Person from '../Person/Person'

const List = () => {
	const [ list, setList ] = useState([])
	const { get, post, response, loading, error } = useFetch('https://random-persons.herokuapp.com')

	useEffect(() => {  loadInitialUsers() }, [])

	async function loadInitialUsers() {
    		const initialUsers = await get('/users')
    		if (response.ok) setList(initialUsers.data)
	}

	return (
		<div>
			{error && 'Error!'}
      			{loading && 'Loading...'}
			{list.length > 0 && list.map((user, key) => <Person key={key} name={user.name} age={user.age} />)}
		</div>
	)
}

export default List 
