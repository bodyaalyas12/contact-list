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
		
		

		this.editClickHandler = () => {
			if(this.state.status=='edit'){
				const newContact = {...this.state.contact}
				newContact.name = document.getElementById('name-input'+this.props.contact.id).value
				newContact.phone = document.getElementById('phone-input'+this.props.contact.id).value
				newContact.info = document.getElementById('info-input'+this.props.contact.id).value
				this.setState({
				contact: newContact
				})
				this.editDataFetch(newContact)
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
			const response = await fetch(`http://testtask123123.dx.am/src/api/delete.php`, {
			  method: 'POST',
			  headers: { 'Content-Type': 'application/json' },
			  body: this.state.contact.id,
			})
			console.log(await response.text())
		}

		async editDataFetch(contact){
			 const response = await fetch(`http://testtask123123.dx.am/src/api/edit.php`, {
			  method: 'POST',
			  headers: { 'Content-Type': 'application/json' },
			  body: JSON.stringify(contact),
			})
			console.log(await response.text())

	}
	render() {
		let contactNode
		if(this.state.contact&& this.state.contact.name &&this.state.contact.phone) {
		const {contact} = this.state
		
		
		if(this.state.status=='show'){

		 contactNode =	<div className='pt-2 px-4 my-3 mr-5   main-wrapper  w-100'>
			<div className='d-flex flex-row flex-wrap justify-content-between '>
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
		 contactNode =	<div className=' pt-2 main-wrapper w-100'>
			<div className='d-flex flex-row  justify-content-between '>
				<div className='image-wrapper'><Image status={this.state.status} contacts={contact} /></div>
				<div className='contactInfo  d-flex align-items-center'>
				<div className='d-flex  flex-column'>
					<div className='text-center name'>
						<input type='text' id={'name-input'+contact.id} required  defaultValue={contact.name}/>
					</div>
					<div className='text-center phone'>
						<input type='text' id={'phone-input'+contact.id} required defaultValue={contact.phone}/>
					</div>
					</div>
				</div>
				<div className='actions d-flex pr-3 align-items-center justify-content-center'>
					 <button className='mr-3' onClick={this.editClickHandler}>Save</button>
				
				 </div>				
			</div>
			<div className='additionalInfo'>
				<input type='text'id={'info-input'+contact.id}  defaultValue={contact.info}/>
			</div>
		</div>	
		}
	}
	
		return(
				<div className=' mr-4   contact-wrapper '>
				{contactNode}
				</div>
			)
	}
}
export default Contact