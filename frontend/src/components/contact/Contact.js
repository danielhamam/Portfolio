import React, { Component } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com';

export class Contact extends Component {
    state = {
        name: "",
        email: "",
        phone : "",
        subject: "",
        message: "",
        loading: false,
        // sent : false,
        sentMessage : ""
      };

    handleSubmitForm = (e) => {

        e.preventDefault();
        this.setState({loading : true})
        emailjs.sendForm("service_ID", "template_o4kpux6", e.target, "user_RoFdpEIjph8WBvUX1knWs")
          .then((result) => { 
              this.resetForm()
          }, (error) => {
            console.log("message not sent")
          });
      }

      // For resetting initial data
    resetForm = () => {
        console.log("reset")
        this.setState({ sentMessage : "Message has successfully been sent!"})
        this.setState({ name : "" })
        this.setState({ email : "" })
        this.setState({ phone : "" })
        this.setState({ subject : "" })
        this.setState({ message : "" })
        this.setState({ loading : false})

        setTimeout( () => {
            this.setState({ 
              sentMessage : ""
            })
          }, 30000);
    }

    render() {
        const { name, email, loading, phone, subject, message } = this.state;
    return (
        <div id="Contact" className="contact">
            <div className="text-center"> 
                <h1 className="header text-uppercase"> Contact me </h1>
                <p className="subheader"> Feel free to leave me a message by filling in the blanks and clicking submit. I will respond shortly! </p>
            </div>
            <div className = "container">
                <form onSubmit={this.handleSubmitForm}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">

                        <input 
                            name="name"
                            id = "contact_name"
                            className="form-control" 
                            placeholder="Name"
                            type="text"  
                            value = {name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            />
                            {/* Email Address */}
                        <input 
                            name="email"
                            id="contact_email"
                            className = "form-control"
                            placeholder="Email Address" 
                            type="text"
                            value={email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        {/* Phone Number */}
                        <input 
                            name="phone"
                            id="contact_phone"
                            className = "form-control"
                            placeholder="Phone Number" 
                            type="text"
                            value={phone}
                            onChange={(e) => this.setState({ phone: e.target.value })}
                            />
                        {/* Subject  */}
                        <input 
                            name="subject"
                            id="contact_subject"
                            className = "form-control"
                            placeholder="Subject" 
                            type="text"
                            value={subject}
                            onChange={(e) => this.setState({ subject: e.target.value })}
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description */}
                        <textarea 
                            name="description"
                            id="contact_message" 
                            className="form-control" 
                            placeholder="Message" 
                            value={message}
                            onChange={(e) => this.setState({ message: e.target.value })}
                        />
                        <button disabled={loading ? true : false} type="submit" className="btn-secondary submit-btn"> {loading ? "SUBMITTING" : "SUBMIT"} </button>
                        <div className="msg text-center"> {this.state.sentMessage} </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )}}

export default Contact;