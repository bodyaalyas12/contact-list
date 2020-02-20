import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect } from 'react'
import host from '../host'
import AddNew from './AddNew'
import Contact from './Contact'
import { connect } from 'react-redux'
import './scss/style.scss'
import { setContacts } from '../store/actionCreators'

const App = ({ contacts, setContacts, ...props }) => {
	const deleteDataFetch = id => {
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
				<div className={'row'}>
					{contacts.map(
						contact =>
							contact.name && (
								<div key={contact._id} className={'col-12 col-lg-6 '}>
									<Contact deleteClickHandler={deleteDataFetch} contact={contact} />
								</div>
							)
					)}
				</div>
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
