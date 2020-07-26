import React from 'react'

// static
import imgNotFound from '../images/not_found.svg'
import './style/NotFound.css'

export default function NotFound() {
	return (
		<div className='container-notFound'>
			<h1 className='text-danger'>Error 404: Not Found</h1>

			<img className='notFound-image' src={imgNotFound} alt='Page not found' />
		</div>
	)
}
