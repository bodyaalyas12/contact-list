import React, { useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'

const AddNew = ({ addClickHandler }) => {
	const [show, setShow] = useState(false)
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
		// console.log(show)
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
									id="add-name"
									className={'form-control'}
									required
									placeholder="John Doe"
								/>
							</div>

							<div className={'form-group d-flex align-items-center'}>
								<label className={'pr-3'}>
									Phone<span className={'text-danger'}>&nbsp;*</span>
								</label>
								<input
									type="text"
									id="add-phone"
									className={'form-control'}
									required
									placeholder="8-800-555-35-35"
								/>
							</div>
							<div className={'form-group d-flex align-items-center'}>
								<textarea
									type="text"
									id="add-info"
									className={'form-control'}
									size="40"
									placeholder="Additional information"
								/>
							</div>
							<div className={'form-group d-flex align-items-center'}>
								<input
									type="file"
									id="add-img"
									className={''}
									accept="image/*"
									placeholder="image"
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
export default AddNew
