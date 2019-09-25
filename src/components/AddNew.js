import React , {Component} from 'react'

class AddNew extends Component {
	constructor(props){
		super(props)
		this.fileSelectHandler = (event) =>{
			const fileInput = document.getElementById('add-img')
			console.log(fileInput.files[0])
		}
	}

	


	render(){
		const {addClickHandler} = this.props
		const content = 
						<div  className='d-flex flex-column head-wrapper justify-content-center align-items-center' >
						<input type='text' id='add-name' required placeholder='Name(required)' />
						<input type='text' id='add-phone' required placeholder='Phone(required)' />
						<input type='text' id='add-info' size='40' placeholder='Additional information' />
						<input type='file' id='add-img' onChange={this.fileSelectHandler} accept='image/*'  
						placeholder='image' />
						<button className='btn btn-success' onClick={addClickHandler} >Add contact</button>
						</div>
		return(
			<div  className='jumbotron  d-flex flex-column'>
			{content}
			</div>
		)
	}
}
export default AddNew