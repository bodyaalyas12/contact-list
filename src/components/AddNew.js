import React, { useState } from 'react'
import host from '../host'
import { animated, useTransition } from 'react-spring'
import { setContacts } from '../store/actionCreators'
import { connect } from 'react-redux'

const AddNew = ({ setContacts }) => {
	const [show, setShow] = useState(false)
	const [form, setForm] = useState({
		name: '',
		phone: '',
		info: '',
		image: {}
	})
	const animatedProps = useTransition(show, null, {
		config: { duration: 500 },
		from: {
			height: 0,
			opacity: 0
		},
		enter: {
			height: 300,
			opacity: 1
		},
		leave: {
			height: 0,
			opacity: 0
		}
	})
	const addNewToggler = () => {
		setShow(show => !show)
	}
	const handleData = ({ target }) => {
		const { name, value } = target
		setForm({
			...form,
			[name]: value
		})
	}
	const addClickHandler = () => {
		const fd = new FormData(form)
		fd.append('image', form.image)
		fd.append('form', JSON.stringify(form))
		fetch(`${host}/contacts/create`, {
			body: fd,
			method: 'POST'
		})
			.then(response => response.json())
			.then(() => {
				setContacts()
			})
	}
	const handleImage = ({ target }) => {
		setForm({
			...form,
			image: target.files[0]
		})
	}

	return (
		<div id="header-add" className="d-flex flex-column">
			<div className="d-flex justify-content-start">
				<button className="btn btn-primary" onClick={addNewToggler}>
					Add new contact{' '}
				</button>
			</div>
			{animatedProps.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							style={props}
							key={key}
							className="d-flex flex-column head-wrapper justify-content-center align-items-center"
						>
							<div className={'form-group d-flex align-items-center'}>
								<label className={'pr-3'}>
									Name<span className={'text-danger'}>&nbsp;*</span>
								</label>
								<input
									type="text"
									className={'form-control'}
									value={form.name}
									name={'name'}
									onChange={handleData}
									placeholder="John Doe"
								/>
							</div>

							<div className={'form-group d-flex align-items-center'}>
								<label className={'pr-3'}>
									Phone<span className={'text-danger'}>&nbsp;*</span>
								</label>
								<input
									type="text"
									className={'form-control'}
									required
									value={form.phone}
									name={'phone'}
									onChange={handleData}
									placeholder="8-800-555-35-35"
								/>
							</div>
							<div className={'form-group d-flex align-items-center'}>
								<textarea
									type="text"
									className={'form-control'}
									size="40"
									value={form.info}
									name={'info'}
									onChange={handleData}
									placeholder="Additional information"
								/>
							</div>
							<div className={'form-group d-flex align-items-center'}>
								<input
									type="file"
									className={''}
									accept="image/*"
									placeholder="image"
									onChange={handleImage}
								/>
							</div>
							<button className="btn btn-success" onClick={addClickHandler}>
								Add contact
							</button>
						</animated.div>
					)
			)}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNew)
