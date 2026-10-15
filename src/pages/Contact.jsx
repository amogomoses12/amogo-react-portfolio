import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const CONTACT_EMAIL = 'edfrikconsult@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const update = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();

    const body = `Name: ${form.name}
Reply email: ${form.email}

${form.message}`;

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="container page-intro">
        <span className="kicker">Contact</span>

        <h1>
          Let's make something{' '}
          <span className="gold">meaningful.</span>
        </h1>

        <p>
          Have a project, collaboration idea, internship opportunity or
          useful feedback? Send a message.
        </p>
      </section>

      <section className="container section contact-section">
        <div className="contact-grid">
          <div>
            <h2>Start a conversation.</h2>

            <p className="muted-copy">
              Complete the form and it will open your default email app
              with a message prepared for you. This front-end demo does
              not send or store submissions on a server.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <Mail size={19} />

                <div>
                  <small>Email</small>
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaGithub size={19} />

                <div>
                  <small>GitHub</small>
                  <a
                    href="https://github.com/amogomoses12"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/amogomoses12 ↗
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={19} />

                <div>
                  <small>Location</small>
                  <span>
                    Nigeria · Open to remote collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form className="form-card" onSubmit={submit}>
            <h2>Send an enquiry</h2>

            <p>Fields marked required need to be completed.</p>

            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Your name *</label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="e.g. Ada Okafor"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Your email *</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject *</label>

              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={update}
                placeholder="Project enquiry / collaboration"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message *</label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={update}
                placeholder="Tell me a little about what you have in mind..."
                required
              />
            </div>

            <button className="btn" type="submit">
              Prepare email <Send size={16} />
            </button>

            <p className="form-hint">
              Nothing is sent automatically. Your email app opens with
              the details filled in.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}