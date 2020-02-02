import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './scss/style.scss'
import Modal from './Modal'
import { useSpring, useTransition, animated } from 'react-spring'

const Contact = ({ deleteClickHandler, ...props }) => {
	const [state, setState] = useState({
		isEditing: false,
		contact: props.contact
	})
	const editDataFetch = async contact => {
		
		fetch(`http://testtask123123.dx.am/src/api/edit.php`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(contact)
		})
	}
	const editClickHandler = e => {
		if (state.isEditing) {
			const newContact = { ...state.contact }
			newContact.name = document.getElementById('name-input' + props.contact.id).value
			newContact.phone = document.getElementById('phone-input' + props.contact.id).value
			newContact.info = document.getElementById('info-input' + props.contact.id).value
			if (newContact.name !== '' && newContact.phone !== '') {
				setState({
					...state,
					contact: newContact,
					isEditing: !state.isEditing
				})
				editDataFetch(newContact)
			}
		} else {
			setState({
				...state,
				isEditing: !state.isEditing
			})
		}
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
		<div key={key} className=" mr-4 contact-wrapper position-relative">
			{!item ? (
				<animated.div
					style={props}
					className="pt-2 px-4 my-3 mr-5 contact-wrapper  d-flex flex-column justify-content-center align-items-between main-wrapper  w-100"
				>
					<div className="d-flex flex-row flex-wrap justify-content-between ">
						<div className="image-wrapper">
							<img alt="contact avatar" src={`/images/${contact.imgurl}`} />
						</div>
						<div className="contactInfo  d-flex align-items-center">
							<div className="d-flex  flex-column">
								<div className="text-center name">{contact.name}</div>
								<div className="text-center phone">{contact.phone}</div>
							</div>
						</div>
						<div className="actions d-flex pr-3 align-items-center justify-content-center">
							<button className="mr-3 btn btn-info" onClick={b => editClickHandler(b)}>
								Edit
							</button>
							<button
								data-target={'#exampleModal' + contact.id}
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
					className=" pt-2 px-4 my-3 mr-5 d-flex flex-column contact-wrapper justify-content-center align-items-between main-wrapper w-100"
				>
					<div className="d-flex flex-row  justify-content-between ">
						<div className="image-wrapper">
							<img alt="contact avatar" src={`/images/${contact.imgurl}`} />
						</div>
						<div className="contactInfo  d-flex align-items-center">
							<div className="d-flex  flex-column">
								<div className="text-center name">
									<input
										type="text"
										id={'name-input' + contact.id}
										required
										defaultValue={contact.name}
									/>
								</div>
								<div className="text-center phone">
									<input
										type="text"
										id={'phone-input' + contact.id}
										required
										defaultValue={contact.phone}
									/>
								</div>
							</div>
						</div>
						<div className="actions d-flex pr-3 align-items-center justify-content-center">
							<button className="mr-3 btn btn-success" index={1} onClick={editClickHandler}>
								Save
							</button>
						</div>
					</div>
					<div className="additionalInfo d-flex  justify-content-center align-items-between">
						<textarea
							type="text"
							id={'info-input' + contact.id}
							placeholder="Info"
							defaultValue={contact.info}
						/>
					</div>
				</animated.div>
			)}
		</div>
	))
}
export default Contact
