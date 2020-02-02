import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './scss/style.scss'
import Contact from './Contact'
import AddNew from './AddNew'
import $ from 'jquery'
import { useSpring, animated } from 'react-spring'

const App = props => {
	const [state, setState] = useState({
		externalData: null,
		addNew: false
	})

	const addClickHandler = async () => {
		let name = document.getElementById('add-name').value
		let phone = document.getElementById('add-phone').value
		let info = document.getElementById('add-info').value
		let img = document.getElementById('add-img')
		if (name && phone) {
			if (img) {
				const fd = new FormData()
				fd.append('img', img.files[0])
				$.ajax({
					url: `http://testtask123123.dx.am/src/api/uploader.php`,
					method: 'POST',
					data: fd,
					contentType: false,
					cache: false,
					processData: false,
					success: () => {
						console.log('successfully')
					}
				})
			}

			const objToSend = {
				name: name,
				phone: phone,
				info: info,
				imgurl: img.files[0] ? img.files[0].name : ''
			}

			fetch(`http://testtask123123.dx.am/src/api/add.php`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(objToSend)
			}).then(()=>getDataFetch())

			
			document.getElementById('add-name').value = ''
			document.getElementById('add-phone').value = ''
			document.getElementById('add-info').value = ''
			document.getElementById('add-img').value = null //clear inputs after sending request
		} else {
			alert('Name and phone are required')
		}
	}
	const deleteClickHandler = e => {
		const refreshedCntcs = [...state.externalData]
		const id = e.target.getAttribute('data')
		for (let el in refreshedCntcs) {
			if (refreshedCntcs[el].id === id) refreshedCntcs[el].name = ''
		}
		setState(state => ({
			...state,
			externalData: refreshedCntcs
		}))
		deleteDataFetch(id)
	}

	const deleteDataFetch = async id => {
		fetch(`http://testtask123123.dx.am/src/api/delete.php`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: id
		})
	}

	const getDataFetch = async () => {
		console.log('fetching')
		const targetUrl = `http://testtask123123.dx.am/src/api/demo.php`
		fetch(targetUrl, {
			method: 'GET'
		})
			.then(response => response.json())
			.then(response => {
				setState(state => ({
					...state,
					externalData: response.sort((a, b) => a.id - b.id).reverse()
				}))
			})
	}
	useEffect(() => {
		getDataFetch()
	}, [])

	return (
		<div>
			<div className="jumbotron ">
				<AddNew addClickHandler={addClickHandler} />
			</div>
			<ul className="d-flex flex-row align-items-center justify-content-center flex-wrap">
				{state.externalData &&
					state.externalData.map(
						element =>
							element.name && (
								<li key={element.id}>
									<Contact deleteClickHandler={deleteClickHandler} contact={element} />{' '}
								</li>
							)
					)}
			</ul>
		</div>
	)
}
export default App
