import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from './Image'   
import './scss/style.scss'
import contacts from '../fixtures.js'
import ContactInfo from './ContactInfo'
import AdditionalInfo from './AdditionalInfo'
import Contact from './Contact'
import AddNew from './AddNew'

// console.log(contacts)

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			externalData: null
		}

 		this.addClickHandler = async () =>{
			const name = document.getElementById('add-name').value
			const phone = document.getElementById('add-phone').value
			const info = document.getElementById('add-info').value
			const img = document.getElementById('add-img')
			console.log(img)
			const final = {name:name,phone:phone,info:info}
			if(name&&phone){
			const response = await fetch(`http://reacttest/src/api/add.php`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(final),
			})
			console.log(await response.text())
			this.getDataFetch()
			}
			else {
				console.log('fill the fields')
			}
		}
		this.getPHP = () => {
			
			fetch(`http://reacttest/src/api/demo.php`,{
				method: 'GET',
				headers:{},
				
			}).then(res =>res.json())
		
			
		}

		
	}
		


	async getDataFetch(){
    const response =
      await fetch(`http://reacttest/src/api/demo.php`,
        { headers: {'Content-Type': 'application/json'}}
      )
    this.contacts = await response.json();
    this.setState({
    	externalData: this.contacts.reverse()
    })
    
}
 		

	componentWillMount(){
		this.getDataFetch()
	}
	
		 render()  {
		const dbContacts = this.state.externalData;
		
		const contactList = dbContacts && dbContacts.map(element =>  <li key={element.id}><Contact contact={element}/> </li>)

	 	return  (
	 		<div>
	 		<AddNew addClickHandler={this.addClickHandler}/>
			<ul>
			{contactList}
			</ul>
			</div>
			

		)
	}
}
export default App