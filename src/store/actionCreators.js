import host from '../host'
import { SET_CONTACTS } from './actionTypes'

export const setContacts = () => dispatch => {
	fetch(`${host}/contacts/getList`, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(response => {
			dispatch({
				type: SET_CONTACTS,
				payload: response.contacts.reverse()
			})
		})
}
