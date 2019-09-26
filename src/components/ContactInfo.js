import React , {Component} from 'react'
import logo  from '../images/default.jpg'


class ContactInfo extends Component {
	constructor(props){
		super(props)

	}
	render() {		
			const content = 
			 			<div className='d-flex  flex-column'>
							<div className='text-center name'>{this.props.contacts.name}</div>
					   		<div className='text-center phone'>{this.props.contacts.phone}</div>
					   	</div>
	return (
			<div>
			{content}
			</div>
			
		)
	}

}
export default ContactInfo