import React from 'react'

// component
import Navbar from './Navbar'

export default function Layout(props) {
	return (
		<React.Fragment>
			<Navbar />
			{props.children}
		</React.Fragment>
	)
}
