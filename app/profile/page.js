"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, ShieldCheck } from "lucide-react";

const initialProfile = {
  firstName: "Alexandra",
  lastName: "Davis",
  email: "alexandra.davis@campus.edu",
  phone: "+91 98765 43210",
  role: "Campus Administrator",
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile);
  const [form, setForm] = useState(initialProfile);
  const [saved, setSaved] = useState(false);
  const [photo, setPhoto] = useState("");
  const [photoError, setPhotoError] = useState("");
  const photoInputRef = useRef(null);

  useEffect(() => {
    if (!photo) {
      return undefined;
    }

    return () => URL.revokeObjectURL(photo);
  }, [photo]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setSaved(false);
  }

  function saveProfile(event) {
    event.preventDefault();
    setProfile({
      ...form,
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    });
    setSaved(true);
  }

  function changePhoto(event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setPhotoError("Choose an image file.");
      event.target.value = "";
      return;
    }

    setPhoto(URL.createObjectURL(file));
    setPhotoError("");
    event.target.value = "";
  }

  const fullName = `${profile.firstName} ${profile.lastName}`.trim();
  const initials = `${profile.firstName[0] ?? ""}${profile.lastName[0] ?? ""}`;

  return (
    <div className="page-wrap">
      <div className="page-title-row">
        <div>
          <p className="eyebrow">ACCOUNT SETTINGS</p>
          <h1>My profile</h1>
          <p className="muted">
            Manage your account details and preferences.
          </p>
        </div>
      </div>

      <div className="profile-layout">
        <section className="panel profile-card">
          <div className="profile-cover"></div>
          <div className="profile-main">
            <div className="profile-avatar">
              {photo ? (
                <img
                  src={photo}
                  alt={`${fullName}'s profile`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                initials
              )}
              <button
                type="button"
                aria-label="Change photo"
                onClick={() => photoInputRef.current?.click()}
              >
                <Camera size={15} />
              </button>
              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
                onChange={changePhoto}
                hidden
              />
            </div>
            <h2>{fullName}</h2>
            <p className="muted">{profile.role}</p>
            <span className="status active">
              <ShieldCheck size={13} />
              Verified account
            </span>
            {photoError && (
              <p className="muted" role="alert">
                {photoError}
              </p>
            )}
          </div>
        </section>

        <section className="panel profile-form">
          <h2>Personal information</h2>
          <p className="muted">Update your personal details here.</p>
          <form onSubmit={saveProfile}>
            <div className="form-grid">
              <label>
                First name
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                Last name
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  required
                />
              </label>
              <label className="full">
                Role
                <input name="role" value={form.role} disabled />
              </label>
            </div>
            <div className="modal-actions">
              <span className="muted" role="status">
                {saved ? "Your changes have been saved." : ""}
              </span>
              <button className="primary-btn" type="submit">
                Save changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
