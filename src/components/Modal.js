import React from 'react'

const Modal = ({contact,clickHandler,...restProps}) => {
		const id = "exampleModal"+contact.id		
		return(
			<div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">Delete confirmation</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			        Are you sure want to delete <b>{contact.name}</b> from contact list?
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">No,close</button>
			        <button type="button" data={contact.id} onClick={clickHandler} data-dismiss="modal" className="btn btn-danger">Yes,delete</button>
			      </div>
			    </div>
			  </div>
			</div>
			)

}
export default Modal