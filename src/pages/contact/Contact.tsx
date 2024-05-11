import './contact.css';
import emailjs from '@emailjs/browser';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFormError('Please fill out all fields.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_2a50po3',
        'template_zik0ka7',
        {
          from_name: form.name,
          to_name: 'Thays',
          from_email: form.email,
          to_email: 'thaysmoiaribeiro@gmail.com',
          message: form.message,
        },
        'x_tuJk1pH1Xeo8nf7'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you for your message. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
          setFormError('');
        },
        (error) => {
          setLoading(false);
          console.error('Error sending message:', error);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section className='section-contact'>
      <div className='content23'>
        <p className='sub--title'>Get in touch</p>
        <h2>CONTACT ME</h2>
      </div>
      <form className='contact-form-container' ref={formRef} onSubmit={handleSubmit}>
        <div className='container-c'>
          {formError && <div className='error-message'>{formError}</div>}
          <label htmlFor='name' className='contact-label'>
            <legend className='text-md'>Full Name</legend>
            <input
              type='text'
              className='contact-input text-md'
              name='name'
              id='name'
              value={form.name}
              onChange={handleChange}
              autoComplete='name'
              placeholder='Type your full name'
              required
            />
          </label>
          <label htmlFor='email' className='contact-label'>
            <legend className='text-md'>Email</legend>
            <input
              type='email'
              className='contact-input text-md'
              name='email'
              id='email'
              value={form.email}
              onChange={handleChange}
              autoComplete='email'
              placeholder='Type your email'
              required
            />
          </label>
          <label htmlFor='message' className='contact-label'>
            <span className='text-md'>Message</span>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              rows={8}
              placeholder='Type your message here, and I will respond soon...'
              className='contact-input text-md'
              required
            />
          </label>
          <div className='button'>
            <button type='submit' className='btn btn-primary contact-form-btn' disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
