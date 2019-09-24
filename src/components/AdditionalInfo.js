import React , {Component} from 'react'
// import logo  from '../images/default.jpg'
// console.log(logo)

class AdditionalInfo extends Component {
	constructor(props){
		super(props)

	}
	render() {
		// console.log(this.props)
		
		
		const	 content = this.props.contacts.info
				
		
		return (
			<div className='pt-3 pb-4'> 
			{content}
			</div>
		)
	}

}
export default AdditionalInfo 