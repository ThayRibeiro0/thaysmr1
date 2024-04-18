import './contact.css';
import emailjs from '@emailjs/browser';
import { ChangeEvent, useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send('service_2a50po3', 'template_zik0ka7', {
        from_name: form.name,
        to_name: 'Thays',
        from_email: form.email,
        to_email: 'thaysmoiaribeiro@gmail.com',
        message: form.message,
      }, 'x_tuJk1pH1Xeo8nf7')
      .then(() => {
        setLoading(false);
        alert('Thank you for sending me a message. I will get back to you soon.');

        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('Oops... Try again!');
      });
  };

  return (
    <section className='section-contact'>
      <div className='content23'>
        <p className='sub--title'>Get in touch</p>
        <h2>Contact Me</h2>
      </div>
      <form className='contact-form-container' ref={formRef} onSubmit={handleSubmit}>
        <div className='container-c'>
          <label htmlFor='name' className='contact-label'>
            Full Name
            <input
              type='text'
              className='contact-input text-md'
              name='name'
              value={form.name}
              onChange={handleChange}
              autoComplete='name'
              placeholder='Type your full name'
              required
            />
          </label>
          <label htmlFor='email' className='contact-label'>
            Email
            <input
              type='email'
              className='contact-input text-md'
              name='email'
              value={form.email}
              onChange={handleChange}
              autoComplete='email'
              placeholder='Type your email'
              required
            />
          </label>
          <label htmlFor='message' className='contact-label'>
            Message
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              rows={8}
              placeholder='Type your message here...'
              className='contact-input text-md'
              required
            />
          </label>
          <button type='submit' className='btn btn-primary contact-form-btn' disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
