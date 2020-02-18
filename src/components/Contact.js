import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import Modal from './Modal'
import host from '../host'
import './scss/style.scss'
import { setContacts } from '../store/actionCreators'
import { connect } from 'react-redux'

const Contact = ({ deleteClickHandler, ...props }) => {
	const [state, setState] = useState({
		isEditing: false,
		contact: props.contact || {}
	})
	const editDataFetch = async contact => {
		fetch(`${host}/contacts/update/${contact._id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(contact),
		})
			.then(response => response.json())
			.then(response => console.log(response))
	}
	const editClickHandler = (event, contact) => {
		if (state.isEditing) {
			if (contact.name && contact.phone) {
				setState({
					...state,
					isEditing: !state.isEditing
				})
				editDataFetch(contact)
			}
		} else {
			setState({
				...state,
				isEditing: !state.isEditing
			})
		}
	}

	const handleForm = ({ target }) => {
		const { name, value } = target
		setState({
			...state,
			contact: {
				...contact,
				[name]: value
			}
		})
	}
	const transitions = useTransition(state.isEditing, null, {
		from: {
			opacity: 0,
			position: 'absolute'
		},
		enter: {
			opacity: 1,
			position: 'relative'
		},
		leave: {
			position: 'absolute',
			opacity: 0
		}
	})

	const { contact } = state
	return transitions.map(({ item, key, props }) => (
		<div key={key} className="contact-wrapper position-relative">
			{!item ? (
				<animated.div
					style={props}
					className="pt-2 px-4 my-3 mr-5  d-flex flex-column justify-content-center align-items-between main-wrapper  w-100"
				>
					<div className="d-flex flex-row flex-wrap justify-content-between ">
						<div className="image-wrapper">
							<img alt="contact avatar" src={`${host}/${contact.image}`} />
						</div>
						<div className="contactInfo  d-flex align-items-center">
							<div className="d-flex  flex-column">
								<div className="text-center name">{contact.name}</div>
								<div className="text-center phone">{contact.phone}</div>
							</div>
						</div>
						<div className="actions d-flex pr-3 align-items-center justify-content-center">
							<button className="mr-3 btn btn-info" onClick={editClickHandler}>
								Edit
							</button>
							<button
								data-target={'#exampleModal' + contact._id}
								data-toggle="modal"
								className="btn btn-danger"
								type="button"
							>
								Delete
							</button>
							<Modal deleteClickHandler={deleteClickHandler} contact={contact} />
						</div>
					</div>
					<div className="additionalInfo pt-3 pb-4">{contact.info}</div>
				</animated.div>
			) : (
				<animated.div
					style={props}
					className=" pt-2 px-4 my-3 mr-5 d-flex flex-column  justify-content-center align-items-between main-wrapper w-100"
				>
					<div className="d-flex flex-row  justify-content-between ">
						<div className="image-wrapper">
							<img alt="contact avatar" src={`${host}/${contact.image}`} />
						</div>
						<div className="contactInfo  d-flex align-items-center">
							<div className="d-flex  flex-column">
								<div className="text-center name">
									<input
										type="text"
										id={'name-input' + contact.id}
										name={'name'}
										className={'form-control'}
										onChange={handleForm}
										value={contact.name}
									/>
								</div>
								<div className="text-center phone">
									<input
										type="text"
										className={'form-control'}
										onChange={handleForm}
										name={'phone'}
										defaultValue={contact.phone}
									/>
								</div>
							</div>
						</div>
						<div className="actions d-flex pr-3 align-items-center justify-content-center">
							<button className="mr-3 btn btn-success" onClick={e => editClickHandler(e, contact)}>
								Save
							</button>
						</div>
					</div>
					<div className="additionalInfo d-flex  justify-content-center align-items-between">
						<textarea
							type="text"
							placeholder="Info"
							name={'info'}
							className={'form-control'}
							onChange={handleForm}
							value={contact.info}
						/>
					</div>
				</animated.div>
			)}
		</div>
	))
}

const mapStateToProps = (state, props) => ({
	...props,
	contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
	setContacts: () => dispatch(setContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
