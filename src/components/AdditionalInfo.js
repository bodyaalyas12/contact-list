import React , {Component} from 'react'


class AdditionalInfo extends Component {
	constructor(props){
		super(props)
	}
	render() {		
		const	 content = this.props.contacts.info		
		return (
			<div className='pt-3 pb-4'> 
			{content}
			</div>
		)
	}

}
export default AdditionalInfo 