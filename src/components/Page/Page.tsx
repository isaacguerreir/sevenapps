import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import List from '../List/List'
import useFetch from 'use-http'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
	
const Page = () => {
	const [ list, setList ] = useState([])
	const [ quantity, setQuantity ] = useState(20)
	const [ filter, setFilter ] = useState('')
	const { get, post, response, loading, error } = useFetch('https://random-persons.herokuapp.com')
	const ref = useRef(null);

	useEffect(() => {  loadInitialUsers() }, [])

	useEffect(() => {
		const options = {
      			root: null,
      			rootMargin: "20px",
      			threshold: 1.0
    		};
		const observer = new IntersectionObserver((entities) => {
      			const target = entities[0];
      			if (target.isIntersecting && quantity < list.length){
      				setQuantity(quantity + 10)
			}
    		}, options);

		if (ref.current){
      			observer.observe(ref.current);
    		}	
	})

	async function loadInitialUsers() {
    		const initialUsers = await get('/users')
    		if (response.ok) setList(initialUsers.data)
	}
	
	return (
			<Box sx={{ flexGrow: 1 }}>
      				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField sx={{ height: 50, margin: '1rem 0'}} id="filled-basic" label="Filter by" variant="standard" value={filter} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFilter(event.target.value )}}/>
					</Grid>
					<Grid item xs={12}>
						<List filterBy={filter} list={list} loading={loading} quantity={quantity}/>
					</Grid>
				</Grid>				
				<div ref={ref}></div>
			</Box>
	)
}

export default Page
