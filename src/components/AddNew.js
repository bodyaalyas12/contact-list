import React  from 'react'

const AddNew = ({addClickHandler}) => {
		const content = 
						<div  className='d-flex flex-column head-wrapper justify-content-center align-items-center' >
						<input type='text' id='add-name' required placeholder='Name(required)' />
						<input type='text' id='add-phone' required placeholder='Phone(required)' />
						<textarea type='text' id='add-info' size='40' placeholder='Additional information' />
						<input type='file' id='add-img'  accept='image/*'  
						placeholder='image' />
						<button className='btn btn-success' onClick={addClickHandler} >Add contact</button>
						</div>
		return(
			<div id='header-add' className='hidden-op d-flex flex-column'>
			{content}
			</div>
		)
}
export default AddNew