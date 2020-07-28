import React, {Component} from 'react';
import emailjs from 'emailjs-com';

export default class EmailForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            business: '',
            colors: '',
            details: ''
        }
    }


    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleBusinessChange = (event) => {
        this.setState({
            business: event.target.value
        })
    }

    handleColorsChange = (event) => {
        this.setState({
            colors: event.target.value
        })
    }

    handleDetailsChange = (event) => {
        this.setState({
            details: event.target.value
        })
    }

    handlePhoneChange = (event) => {
        const state = this.state
        this.setState({
            phone: event.target.value
        })
    }

    handleButtonStyleChange = () => {
        const button = document.querySelector('.submitBtn');
        button.style.color = 'black';
        button.style.backgroundColor = 'white';
        button.style.border = '1px solid #38b2ac';
        button.innerText = 'Submitted!';
        button.disabled = 'true';
    }

    sendEmail = (event) => {
        emailjs.init("user_PhaHB3scWG4p7Nv7oXhNL");
        emailjs.send(
            'outlook', 
            'template_hbRIh0S4',
            this.state
            )
        .then(res => console.log(res) )
        .catch(err => console.log('Oh well, you failed. Here are some thoughts on that error:'))
        this.handleButtonStyleChange()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.sendEmail()
    }


    render() {
        return(
            <div>
                <section className="text-gray-700 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">This is the beginning of your new website!</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Thank you for choosing <strong>MRP Technologies</strong>! As part of the kickstarting process for developing your website, I ask that you please fill out this form to better personalize your website needs. I execute my craft from scratch and without the use of Content Management Systems (read: impersonal design tools). This will help me to deliver exactly what you're looking for! Once submitted, you will receive an automatic email confirming your website details have been received.</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    Name (required):
                                <input onChange={this.handleNameChange} className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2" placeholder="ex. John Doe" type="text" required></input>
                                </div>
                                <div className="p-2 w-1/2">
                                    Email (required):
                                <input onChange={this.handleEmailChange} className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2" placeholder="ex. example@email.com" type="email" required></input>
                                </div>
                                <div className="p-2 w-1/2">
                                    Phone Number (optional):
                                <input onChange={this.handlePhoneChange} className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2" placeholder="ex. 1-(555) 555-5555" type="text"></input>
                                </div>
                                <div className="p-2 w-1/2">
                                    Name of Business / Organization:
                                <input onChange={this.handleBusinessChange}className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2" placeholder="ex. John Doe's BBQ Pit" type="text" required></input>
                                </div>
                                <div className="p-2 w-1/2">
                                    Pick a color scheme (Limit 3 colors):
                                <input onChange={this.handleColorsChange} className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2" placeholder="ex. Red, White and Blue" type="text"required></input>
                                </div>
                                <div className="p-2 w-full">
                                    Description of Business / Addition Details:
                                <textarea onChange={this.handleDetailsChange} className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-teal-500 text-base px-4 py-2 resize-none block" placeholder="Use this space to specify important details and integrations concerning your website/business that are paramount to the structure. This could include things such as website behavior, functional contact forms, user accounts including any restrictions and functionality, and any media such as a responsive YouTube video. Please be as detailed as possible. You will also have the opportunity to communicate with the developer directly upon submission, so you don't have to worry about remembering forgotten details later!"></textarea>
                                </div>
                                <div className="p-2 w-full">
                                <button onClick={this.handleSubmit} className="submitBtn flex mx-auto text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Submit!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
            </div>
        )
    }
}