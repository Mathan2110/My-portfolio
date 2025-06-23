import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import './contact.css'

const contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9017d651-93c8-4ca0-b744-dc5adda21a46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact_container' id='contact'>
        <div className="contact_title">
            <h1 className="contact_head">Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact">
            <div className="contact_left">
                <h1>Let's talk</h1>
                <p>I'm currently open to job opportunities.
                    Feel free to reach out to me about anything you'd like me to work on — I'm always happy to connect. You can contact me anytime.</p>
                <p><img src={mail_icon} alt="" />mathansenthilkumar10@gmail.com</p>
                <p><img src={call_icon} alt="" />+91 6385899817</p>
                <p><img src={location_icon} alt="" />Madurai</p>
            </div>
            <div className="contact_right">
                <form action="submit" className='contact_form' onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id='name' placeholder='Enter your name' required  name='name'/>
                    <label htmlFor="Email" >Your Email</label>
                    <input type="email" id='Email' placeholder='Enter your name' required name='email' />
                    <label htmlFor="message">Write your message here</label>
                    <textarea id='message' placeholder='Enter your message' name='message' rows={10} required />
                    <button>Submit now</button>
                </form>
                <span className='result'>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default contact;