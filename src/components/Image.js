import React , {Component} from 'react'
import logo  from '../images/default.jpg'
// console.log(logo)

class Image extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			
			<img alt='Logo'  src={logo} />
			
		)
	}

}
export default Image
