import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from './Image'   
import './scss/style.scss'
import contacts from '../fixtures.js'
import ContactInfo from './ContactInfo'
import AdditionalInfo from './AdditionalInfo'
import Contact from './Contact'
import AddNew from './AddNew'
import $ from 'jquery'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			externalData: null
		}

 		this.addClickHandler = async () =>{
			let name = document.getElementById('add-name').value
			let phone = document.getElementById('add-phone').value
			let info = document.getElementById('add-info').value
			let img = document.getElementById('add-img').files[0];
			const fd = new FormData();
			
			fd.append('img',img)
			const final = {name:name,phone:phone,info:info,imgurl:img.name}
			
			if(name&&phone){
			$.ajax({
				url:`http://testtask123123.dx.am/src/api/uploader.php`,
				method: 'POST',
				data: fd,
				contentType:false,
				cache: false,
				processData:false,
				success:function(data){
					console.log('data',data)
				}
			})

		


			const response = await fetch(`http://testtask123123.dx.am/src/api/add.php`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(final),
			})
			console.log(await response.text())
			this.getDataFetch()
			document.getElementById('add-name').value=''
			document.getElementById('add-phone').value=''
			document.getElementById('add-info').value=''
			}
			else {
				alert('Name and phone are required')
			}
		}
		this.getPHP = () => {
			
			fetch(`http://testtask123123.dx.am/src/api/demo.php`,{
				method: 'GET',
				headers:{},
				
			}).then(res =>res.json())
		
			
		}

		
	}
		


	async getDataFetch(){
	var proxyUrl = `https://cors-anywhere.herokuapp.com/`,
    targetUrl = `http://testtask123123.dx.am/src/api/demo.php`
    const response =
      await fetch( targetUrl, {
      	method: 'GET',
         headers: {
         	// 'Content-Type': 'application/json'
         }
     }
      )
    this.contacts = await response.json();
    this.setState({
    	externalData: this.contacts.reverse()
    })
    
}
 		

	UNSAFE_componentWillMount(){
		this.getDataFetch()
	}
	
		 render()  {
		 	
		 
		

		const dbContacts = this.state.externalData;
		
		const contactList = dbContacts && dbContacts.map(element => element.name && <li key={element.id}><Contact contact={element}/> </li>)

	 	return  (
	 		<div>

	 		<AddNew addClickHandler={this.addClickHandler}/>
			<ul className='d-flex flex-row align-items-center justify-content-center flex-wrap'>
			{contactList}
			</ul>
			</div>
			

		)
	}
}
export default App