import React , {Component} from 'react'

class Modal extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const {contact,clickHandler} = this.props
		
		const id = "exampleModal"+contact.id
		

		return(

			<div className="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">Delete confirmation</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			        Are you sure want to delete <b>{contact.name}</b> from contact list?
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">No,close</button>
			        <button type="button" onClick={clickHandler} data-dismiss="modal" className="btn btn-danger">Yes,delete</button>
			      </div>
			    </div>
			  </div>
			</div>
			)
	}

}
export default Modal