import React , {Component} from 'react'
import logo  from '../images/default.jpg'
// console.log(logo)

class Image extends Component {
	constructor(props){
		super(props)
	}
	render() {
		// console.log(this.props.contacts.imgurl)
		let pic
		if(this.props.contacts.imgurl) pic = require('./'+this.props.contacts.imgurl);
			// console.log(pic)
		return (

			<img alt='Picture'  src={pic} />
			
		)
	}

}
export default Image
