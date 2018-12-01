import React, {Component} from 'react';
import axios from 'axios';
import { dirname } from 'path';

class ContactForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="col-sm-4 offset-sm-4" style={{background: 'linear-gradient(to bottom, #808080 0%, #ffffff 100%)', display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '100px', border: '1px groove #0000ff',  borderRadius: '5px'}}>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label style={{margin:'30px', fontSize: '30px', fontFamily:'Courier', }}> <b>Invite The Roomies! </b></label>
                    </div>
                    <div className="form-group">
                        <label style={{ marginLeft: '60px' }} for="name">Who do you want to send this to?</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label style={{ marginLeft: '75px' }} for="exampleInputEmail1">What is their email address?</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    {/* <div className="form-group">
                        <label for="message">Leave them a message!</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div> */}
                    <button style={{ marginLeft:'10px', marginTop: '-10px'}} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm; 