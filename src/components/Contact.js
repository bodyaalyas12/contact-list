import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Image from './Image'   
import './scss/style.scss'
import contacts from '../fixtures.js'
import ContactInfo from './ContactInfo'
import AdditionalInfo from './AdditionalInfo'
import Modal from './Modal'

class Contact extends Component {
	constructor(props){
		super(props)
		this.state = {
			status: 'show',
			contact : this.props.contact

		}
		this.infoEditor = (event) => {
			const newContact = {...this.state.contact}
			newContact.info = event.target.value
			this.setState({
				contact: newContact
			})
		}
		this.nameEditor = (event) => {
			const newContact = {...this.state.contact}
			newContact.name = event.target.value
			this.setState({
				contact: newContact
			})
		}
		this.phoneEditor = (event) => {
			const newContact = {...this.state.contact}
			newContact.phone = event.target.value
			this.setState({
				contact: newContact
			})
		}
		this.editClickHandler = () => {
			if(this.state.status=='edit'){
				this.editDataFetch()
			}

			this.setState({
				status:this.state.status == 'edit'? 'show':'edit',

			})

		}
		this.deleteClickHandler = () => {
			this.setState({
				contact: null
			})
			this.deleteDataFetch()
		}
	}

		async deleteDataFetch(){
			const response = await fetch(`http://reacttest/src/api/delete.php`, {
			  method: 'POST',
			  headers: { 'Content-Type': 'application/json' },
			  body: this.state.contact.id,
			})
			console.log(await response.text())
		}

		async editDataFetch(){
			 const response = await fetch(`http://reacttest/src/api/edit.php`, {
			  method: 'POST',
			  headers: { 'Content-Type': 'application/json' },
			  body: JSON.stringify(this.state.contact),
			})
			console.log(await response.text())

	}
	render() {
		let contactNode
		if(this.state.contact&& this.state.contact.name &&this.state.contact.phone) {
		const {contact} = this.state
		
		
		if(this.state.status=='show'){

		 contactNode =	<div className='pt-4 px-3 my-3   main-wrapper  w-100'>
			<div className='d-flex flex-row justify-content-between '>
				<div className='image-wrapper'><Image status={this.state.status} contacts={contact} /></div>
				<div className='contactInfo  d-flex align-items-center'>
					<ContactInfo status={this.state.status} contacts={contact} />
				</div>
				<div className='actions d-flex pr-3 align-items-center justify-content-center'>
					 <button className='mr-3 btn btn-info' onClick={this.editClickHandler}>Edit</button>
					 <button data-target={"#exampleModal"+contact.id} data-toggle="modal" className="btn btn-danger" type="button" >Delete</button> 
				 	<Modal clickHandler={this.deleteClickHandler} contact={contact}/>
				 </div>				
			</div>
			<div className='additionalInfo'><AdditionalInfo status={this.state.status} contacts={contact}/></div>


						
							
						



		</div> 

	}
		else if(this.state.status=='edit'){
		 contactNode =	<div className='pt-4 my-3 mx-3  main-wrapper w-100'>
			<div className='d-flex flex-row justify-content-between '>
				<div className='image-wrapper'><Image status={this.state.status} contacts={contact} /></div>
				<div className='contactInfo  d-flex align-items-center'>
				<div className='d-flex  flex-column'>
					<div className='text-center name'>
						<input type='text' required onChange={this.nameEditor} value={contact.name}/>
					</div>
					<div className='text-center phone'>
						<input type='text' required onChange={this.phoneEditor} value={contact.phone}/>
					</div>
					</div>
				</div>
				<div className='actions d-flex pr-3 align-items-center justify-content-center'>
					 <button className='mr-3' onClick={this.editClickHandler}>Save</button>
					 <button onClick={this.deleteClickHandler}>Delete</button> 
				 </div>				
			</div>
			<div className='additionalInfo'>
				<input type='text' onChange={this.infoEditor} value={contact.info}/>
			</div>
		</div>	
		}
	}
	
		return(
				<div className='col-6 float-left'>
				{contactNode}
				</div>
			)
	}
}
export default Contact