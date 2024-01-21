import { useForm, ValidationError } from '@formspree/react';
import "./contactUs.css"
import { Header } from "../header"
export const ContactUs = () => {
  const [state, handleSubmit] = useForm("mvoezpkp");
  if (state.succeeded) {
    return(
        <div className='contactUs-wrapper contactUs-container'>
            <Header/>
            <p className='contactUs-p'>Thanks for your message!</p>
        </div>
    )
  }
  return (
    <div className='contactUs-wrapper'>
    <Header/>
        <div className='contactUs-form'>
            <h1 className='contactUs-form-h1'>CONTACT US</h1>
            <div className='contactUs-content'>
                <form onSubmit={handleSubmit} className='form'>
                    <label htmlFor="email" className='form-label'>Name</label>
                    <input id="name" type="text" name="name" className='email-input input'/>
                    <label htmlFor="email" className='form-label'>Email Address</label>
                    <input id="email" type="email" name="email" className='email-input input'/>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    <label htmlFor="email" className='form-label'>Email Address</label>
                    <textarea id="message" name="message" className='message-input input'/>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>

                    <button type="submit" disabled={state.submitting} className='contactUs-content-button'>
                        Submit
                    </button>
                </form>

                <div className='contactUs-text'>
                    <div className='contactUs-content-note contactUs-content-info'>
                        <h2 className='contactUs-content-info-h2'>Note</h2>
                        <p className='contactUs-content-info-p'>Please note we can't promise to reply to all emails we receive, but we definitely read it all.</p>
                    </div>
                    <div className='contactUs-content-email contactUs-content-info'>
                        <h2 className='contactUs-content-info-h2'>Our Email</h2>
                        <p className='contactUs-content-info-p'>exampleemail@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}