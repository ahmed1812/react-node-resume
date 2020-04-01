import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import API from "../../utils/Api";



const styles= {
    color: "#721c24",
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
        position: "relative",
        padding: "0.0rem 1.25rem",
        marginBottom: "1rem",
        borderRadius: ".25rem",
        marginTop: "10px"
}
class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: '',
            nameError: '',
            emailError: '',
            messageError: ''
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })

    }
    validate = () => {
        let nameError = '';
        let emailError = '';
        let messageError = '';
        if (!this.state.name) {
            nameError = "name cannot be blank";
        }
        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }
        if (!this.state.message) {
            messageError = "message cannot be blank";
        }
        if (emailError || nameError || messageError) {
            this.setState({ emailError, nameError, messageError });
            return false
        }
        return true
        
    }
    
    handleFormSubmit = e => {
        e.preventDefault();
       
        const isValid = this.validate();
        const newGmail = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        if (isValid) {
            console.log(newGmail);
            alert('Posted your message successfully!')
            // axios
            API.gmail(newGmail);
           
            this.setState(
                {
                    name: "", email: "", message: ""
                }
            )
        }
       
    }
    render() {
        return (
            <div >
                <Form  >
                    <FormGroup>
                    
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name:"
                            required
                            value={this.state.name}
                            onChange={this.handleChange} />
                        <div style={styles}>
                            {this.state.nameError}</div>
                    </FormGroup>
                    <FormGroup>

                        <Input
                            type="email"
                            name="email"
                            placeholder="Email:"
                            value={this.state.email}
                            onChange={this.handleChange} />
                        <div style={styles}>
                            {this.state.emailError}</div>
                    </FormGroup>
                    <FormGroup>

                        <Input
                            style={{ height: "175px" }}
                            type="textarea"
                            name="message"
                            placeholder="Message:"
                            value={this.state.message}
                            onChange={this.handleChange} />
                        <div style={styles}  >
                            {this.state.messageError}</div>
                    </FormGroup>
                    <Button color="primary" onClick={this.handleFormSubmit} > Submit</Button>

                </Form>
              
            </div>
        )
    };
}

export default Contact;
