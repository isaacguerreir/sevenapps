import * as React from 'react'
import { useState } from 'react'
import List from '../List/List'

const Page = () => {
	const [ filter, setFilter ] = useState('')
	
	return (
		<>
			<input
          			type="text"
          			value={filter}
          			onChange={e => setFilter(e.target.value)}
        		/>
			<List filter={filter}/>
		</>
	)
}

export default Page
