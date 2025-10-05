import React, { useState } from "react";
import "./Contact.scss"; 

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio contact from " + form.name);
    const body = encodeURIComponent(
      form.message + "\n\n" + "Email: " + form.email
    );
    window.location.href = `mailto:Shrimuthukumaran5@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          <span>Name</span>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            required
          />
        </label>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
