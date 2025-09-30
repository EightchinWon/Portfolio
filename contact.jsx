import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.firstName.trim()) err.firstName = "First name is required.";
    if (!form.lastName.trim()) err.lastName = "Last name is required.";
    if (!form.email.trim()) err.email = "Email is required.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Please enter a valid email.";
    if (!form.message.trim()) err.message = "Please include a short message.";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    // Capture the submission locally (you can wire this to EmailJS or a backend later)
    const payload = { ...form, submittedAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
    existing.push(payload);
    localStorage.setItem("contact_submissions", JSON.stringify(existing));

    // Simple confirmation + redirect to Home
    alert("Thank you! Your message has been recorded. I’ll get back to you shortly.");
    navigate("/", { replace: true });
  };

  return (
    <section className="contact section section--white">
      <header className="section-head">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">
          Have a project in mind or a team to support? Send a note—let’s make it happen.
        </p>
      </header>

      <div className="contact-grid">
        {/* Contact Info Panel */}
        <aside className="card contact-info">
          <h2>Contact Information</h2>
          <p>I’m available for HR, Project, and Program consulting engagements.</p>

          <div className="info-list">
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href="mailto:abba@ycreativeminds.com">abba@creativeminds.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <a href="tel:+4168254569">+1 (416) 825-4569</a>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span>Toronto, ON • NY • London • Remote </span>
            </div>
            <div className="info-note">
              <em>Typical response time: within 1–2 business days.</em>
            </div>
          </div>
        </aside>

        {/* Form Card */}
        <div className="card contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={onChange}
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
              </div>

              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={onChange}
                  aria-invalid={!!errors.lastName}
                />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="phone">Contact Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={form.phone}
                  onChange={onChange}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">Send Message</button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}