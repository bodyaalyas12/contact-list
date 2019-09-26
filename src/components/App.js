import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from './Image'   
import './scss/style.scss'
import contacts from '../fixtures.js'
import ContactInfo from './ContactInfo'
import AdditionalInfo from './AdditionalInfo'
import Contact from './Contact'
import AddNew from './AddNew'
import $ from 'jquery'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			externalData: null,
			addNew: false
		}
		this.addNewToggler = ()=>{
			document.getElementById('header-add').classList.toggle('hidden-op')
		}
		this.addClickHandler = async () =>{
			let name = document.getElementById('add-name').value
			let phone = document.getElementById('add-phone').value
			let info = document.getElementById('add-info').value
			let img =  document.getElementById('add-img');

			if(name&&phone){
				if(img){
					//get image
					const fd = new FormData();		
					fd.append('img',img.files[0])

					$.ajax({
						url:`http://testtask123123.dx.am/src/api/uploader.php`,
						method: 'POST',
						data: fd,
						contentType:false,
						cache: false,
						processData:false,
						success:function(data){
							console.log('successfully')
						}
					})
				}

				const objToSend = {
					name:name,
					phone:phone,
					info:info,
					imgurl: img.files[0]? img.files[0].name : ''
				}

				const response = await fetch(`http://testtask123123.dx.am/src/api/add.php`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(objToSend),
				})
				
				this.getDataFetch()
				document.getElementById('add-name').value=''
				document.getElementById('add-phone').value=''
				document.getElementById('add-info').value=''
				document.getElementById('add-img').value = null //clear inputs after sending request
			}
			else {
				alert('Name and phone are required')
			}
		}
		this.deleteClickHandler = (e) => {
			const refreshedCntcs = [...this.state.externalData]
			const id = (e.target.getAttribute('data'))
			for( let el in  refreshedCntcs){
				if(refreshedCntcs[el].id === id ) refreshedCntcs[el].name = ''		 	 
			}
		this.setState({
			externalData:refreshedCntcs
		})
		this.deleteDataFetch(id)
	}


}

async deleteDataFetch(id){
	const response = await fetch(`http://testtask123123.dx.am/src/api/delete.php`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: id,
	})
	console.log(await response.text())
}

async getDataFetch(){
	var proxyUrl = `https://cors-anywhere.herokuapp.com/`,
	targetUrl = `http://testtask123123.dx.am/src/api/demo.php`
	const response = await fetch( targetUrl, {
		method: 'GET',
		headers: {

		}
	}
	)
	this.contacts = await response.json();
	this.contacts.sort((a,b)=>{
		return a.id - b.id
	})
	this.setState({
		externalData: this.contacts.reverse()
	})

}


UNSAFE_componentWillMount(){
	this.getDataFetch()
}
render()  {

	const  dbContacts =this.state.externalData
	const addNewBlock = <AddNew addClickHandler={this.addClickHandler}/>
	const contactList = dbContacts &&  dbContacts.map(element => element.name && <li key={element.id}><Contact deleteHandler={this.deleteClickHandler} contact={element}/> </li>)

	return  (
		<div>
		<div className='jumbotron '>
		<button className='btn btn-primary' onClick={this.addNewToggler}>Add new contact </button>
		{addNewBlock}
		</div>
		<ul className='d-flex flex-row align-items-center justify-content-center flex-wrap'>
		{contactList}
		</ul>
		</div>
		)
}
}
export default App