import React , {Component} from 'react'


class Image extends Component {
	constructor(props){
		super(props)
	}
	render() {
		let pic
		if(this.props.contacts.imgurl) pic ='/images/'+this.props.contacts.imgurl;
		return (
			<img alt='Picture'  src={pic} />	
		)
	}

}
export default Image
