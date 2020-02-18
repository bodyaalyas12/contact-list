import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect } from 'react'
import host from '../host'
import AddNew from './AddNew'
import Contact from './Contact'
import { connect } from 'react-redux'
import './scss/style.scss'
import { setContacts } from '../store/actionCreators'

const App = ({ contacts, setContacts, ...props }) => {
	const deleteDataFetch =  id => {
		fetch(`${host}/contacts/delete/${id}`, {
			method: 'DELETE',
			body: JSON.stringify(id)
		})
			.then(response => response.json())
			.then(response => {
				console.log(response)
				setContacts()
			})
	}

	useEffect(() => {
		setContacts()
	}, [])

	return (
		<div>
			<div className="jumbotron ">
				<div className={'container'}>
					<AddNew />{' '}
				</div>
			</div>
			<div className={'container'}>
				<ul className="d-flex flex-row align-items-center justify-content-center flex-wrap">
					{contacts.map(
						contact =>
							contact.name && (
								<li key={contact._id}>
									<Contact deleteClickHandler={deleteDataFetch} contact={contact} />{' '}
								</li>
							)
					)}
				</ul>
			</div>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	...props,
	contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
	setContacts: () => dispatch(setContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
