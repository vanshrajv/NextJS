"use client";

import { useState } from "react";
import { GraduationCap, Mail, Phone, Plus, X } from "lucide-react";

const initialFaculty = [
  {
    name: "Dr. Rohan Malhotra",
    role: "Head of Computer Science",
    email: "rohan.m@campus.edu",
    phone: "+91 98765 43210",
    initials: "RM",
    color: "violet",
  },
  {
    name: "Prof. Sneha Iyer",
    role: "Data Science",
    email: "sneha.i@campus.edu",
    phone: "+91 98765 43211",
    initials: "SI",
    color: "blue",
  },
  {
    name: "Dr. Arjun Verma",
    role: "Business Administration",
    email: "arjun.v@campus.edu",
    phone: "+91 98765 43212",
    initials: "AV",
    color: "orange",
  },
  {
    name: "Prof. Nisha Thomas",
    role: "Mechanical Engineering",
    email: "nisha.t@campus.edu",
    phone: "+91 98765 43213",
    initials: "NT",
    color: "green",
  },
];

const emptyForm = {
  name: "",
  role: "",
  email: "",
  phone: "",
};

export default function FacultyPage() {
  const [faculty, setFaculty] = useState(initialFaculty);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState("");

  function addFaculty(event) {
    event.preventDefault();

    const name = form.name.trim();
    const role = form.role.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();

    if (!name || !role || !email || !phone) {
      setFormError("Please complete every field before saving.");
      return;
    }

    const initials = name
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    setFaculty((currentFaculty) => [
      ...currentFaculty,
      { name, role, email, phone, initials, color: "violet" },
    ]);
    setFormError("");
    setForm(emptyForm);
    setShowForm(false);
  }

  function closeForm() {
    setShowForm(false);
    setForm(emptyForm);
    setFormError("");
  }

  return (
    <div className="page-wrap">
      <div className="page-title-row">
        <div>
          <p className="eyebrow">OUR EDUCATORS</p>
          <h1>Faculty</h1>
          <p className="muted">
            Meet the people inspiring the next generation.
          </p>
        </div>
        <button
          className="primary-btn"
          type="button"
          onClick={() => setShowForm(true)}
        >
          <Plus size={17} />
          Add faculty
        </button>
      </div>

      <div className="faculty-grid">
        {faculty.map((member) => (
          <article className="panel faculty-card" key={member.email}>
            <div className={`faculty-avatar ${member.color}`}>
              {member.initials}
            </div>
            <h2>{member.name}</h2>
            <p className="faculty-role">{member.role}</p>
            <div className="faculty-contact">
              <span>
                <Mail size={15} />
                {member.email}
              </span>
              <span>
                <Phone size={15} />
                {member.phone}
              </span>
            </div>
            <div className="faculty-bottom">
              <span>
                <GraduationCap size={16} />
                Faculty member
              </span>
              <span className="status active">Active</span>
            </div>
          </article>
        ))}
      </div>

      {showForm && (
        <div className="modal-backdrop" onClick={closeForm}>
          <form
            className="modal"
            onSubmit={addFaculty}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <h2>Add a faculty member</h2>
                <p className="muted">Enter the faculty member&apos;s details.</p>
              </div>
              <button
                type="button"
                className="icon-btn"
                aria-label="Close form"
                onClick={closeForm}
              >
                <X size={19} />
              </button>
            </div>

            <label>
              Full name
              <input
                required
                value={form.name}
                onChange={(event) => {
                  setForm({ ...form, name: event.target.value });
                  setFormError("");
                }}
                placeholder="e.g. Dr. Aditi Sharma"
              />
            </label>
            <label>
              Department or role
              <input
                required
                value={form.role}
                onChange={(event) => {
                  setForm({ ...form, role: event.target.value });
                  setFormError("");
                }}
                placeholder="e.g. Computer Science"
              />
            </label>
            <label>
              Email address
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => {
                  setForm({ ...form, email: event.target.value });
                  setFormError("");
                }}
                placeholder="faculty@campus.edu"
              />
            </label>
            <label>
              Phone number
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(event) => {
                  setForm({ ...form, phone: event.target.value });
                  setFormError("");
                }}
                placeholder="+91 98765 43210"
              />
            </label>

            {formError && (
              <p className="muted" role="alert">
                {formError}
              </p>
            )}

            <div className="modal-actions">
              <button
                type="button"
                className="secondary-btn"
                onClick={closeForm}
              >
                Cancel
              </button>
              <button className="primary-btn" type="submit">
                Save faculty
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
