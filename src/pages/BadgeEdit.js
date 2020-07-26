import React, { Component } from 'react'
import md5 from 'md5'

// files
import './style/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'

// components
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import PageLoading from '../components/PageLoading'

// api
import api from '../api'

export default class BadgeEdit extends Component {
	state = {
		loading: true,
		error: null,
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
			avatarUrl: '',
		},
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async (e) => {
		this.setState({ loading: true, error: null })

		try {
			const data = await api.badges.read(this.props.match.params.badgeId)

			this.setState({ loading: false, form: data })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		this.setState({ loading: true, error: null })

		try {
			// añadimos un valor al avatarUrl
			this.state.form.avatarUrl = `https://www.gravatar.com/avatar/${md5(
				this.state.form.email
			)}?d=identicon`
			await api.badges.update(this.props.match.params.badgeId, this.state.form)
			this.setState({ loading: false })

			// dirigimos a badge para ver la lista
			this.props.history.push('/badges')
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		if (this.state.loading) {
			return <PageLoading />
		}

		return (
			<React.Fragment>
				<div className='BadgeEdit__hero'>
					<div className='container-fluid d-flex justify-content-center'>
						<img
							className='BadgeEdit__hero-image img-fluid'
							src={header}
							alt='Logo'
						/>
					</div>
				</div>

				<div className='container-fluid'>
					<div className='row'>
						<div className='col-sm-12 col-md-7'>
							<Badge
								firstName={this.state.form.firstName || 'FirstName'}
								lastName={this.state.form.lastName || 'LastName'}
								twitter={this.state.form.twitter || 'my_nickname'}
								jobTitle={this.state.form.jobTitle || 'Job Title'}
								email={this.state.form.email || 'my_email@gmail.com'}
								// avatar={this.state.form.email}
								// avatar='https://avatars1.githubusercontent.com/u/55221373?s=460&u=a2c9a5fb3c276bf93773dbe3a1bf71d2e9c3525b&v=4'
							/>
						</div>

						<div className='col-sm-12 col-md-5 mt-5 mt-md-0 mb-5'>
							<h1>Edit your Badge</h1>
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
								onSubmit={this.handleSubmit}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
