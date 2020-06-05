import React from 'react'  
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';




class Contact extends React.Component {
  constructor(props) {
    super(props);
    // this.contactSubmit = this.contactSubmit.bind(this);
    this.state = {
      status: ""
    };
  }
  
  
  handleChange = event => {
    this.form.validateFields(event.target);
  }

  contactSubmit = event => {
    event.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log('form is invalid: do not submit');
      alert('Oops, it seems you haven\'t filled the form correctly');
    } else {
      console.log('form is valid: submit');
      const form = event.target;
      const data = new FormData(form);
      const request = new XMLHttpRequest();
      request.open(form.method, form.action);
      request.setRequestHeader("Accept", "application/json");
      request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) return;
      if (request.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    request.send(data);
      alert('Thank you, I will get back to you shortly');
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="my-5 h1 mx-3 col-9 offset-1">Let's get in touch !</div>
          <hr/>
          <div className="my-5 h4 col-9 offset-1">You can contact me via Email (<a href="mailto: arnaud@jeanroch.fr">Arnaud@Jeanroch.fr</a>) or by filling in the form below. Either way, I'll be happy to reply.</div>  
        </div>
        <hr/>
        <FormWithConstraints className="container"
            ref={form => this.form = form}
            onSubmit={this.contactSubmit}
            action="https://formspree.io/xknvlylz"
            method="POST"
            noValidate>

            <div className="row col-11 col-md-10 offset-1 mx-0 px-0">
              <label>Your Name :</label>
              <input name="name" size="30" placeholder="Name"
                required onChange={this.handleChange}
                className="form-control mb-4 shadow" />
              <FieldFeedbacks for="name">
                <FieldFeedback when="*" />
              </FieldFeedbacks>

              <label>Your Company :</label>
              <input type="company" name="company" size="30" placeholder="Company"
                onChange={this.handleChange}
                className="form-control mb-4 shadow" />

              <label>Your Email :</label>
              <input type="email" name="email" size="30" placeholder="Email"
                required onChange={this.handleChange}
                className="form-control mb-4 shadow" />
              <FieldFeedbacks for="email">
                <FieldFeedback when="*" />
              </FieldFeedbacks>

              <label>Your Message :</label>
              <textarea name="comments" cols="40" rows="20" placeholder="Message"
                required minLength={5} maxLength={500}
                onChange={this.handleChange}
                className="form-control mb-2 shadow" />
              <FieldFeedbacks for="comments">
                <FieldFeedback when="*" />
              </FieldFeedbacks>
            </div>

          <div className="col-md-6 offset-1 mt-3 mb-5 mx-0 px-0">
            <button type="submit" className="btn btn-lg btn-dark shadow-lg">Send Message</button>
          </div>
        </FormWithConstraints>
      </div>
      );
  }
}
  
  export default Contact;