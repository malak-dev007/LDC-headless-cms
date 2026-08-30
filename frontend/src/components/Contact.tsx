type ContactProps = {
  email: string;
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  company: string;
  jobtitle: string;
  phoneNo: string;
  privacyText: string;
  privacyLink: string;
  submitText: string;
};

function Contact({
  email,
  title,
  description,
  firstName,
  lastName,
  company,
  jobtitle,
  phoneNo,
  privacyText,
  privacyLink,
  submitText
}: ContactProps) {
  return (
   <section className="contact">
  
  <div className="contact-content">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>

  <form className="contact-form">

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="First name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last name"
        />
      </div>
    </div>


    <div className="form-row">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          value={company}
          placeholder="Company"
        />
      </div>
    </div>


    <div className="form-row">
      <div className="form-group">
        <label htmlFor="jobtitle">Job Title</label>
        <input
          type="text"
          id="jobtitle"
          value={jobtitle}
          placeholder="Job title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNo">Phone Number</label>
        <input
          type="text"
          id="phoneNo"
          value={phoneNo}
          placeholder="Phone number"
        />
      </div>
    </div>


    <div className="privacy">
      <input type="checkbox" id="privacy" />

      <label htmlFor="privacy">
        {privacyText}{" "}
        <a href={privacyLink}>Privacy Policy</a>
      </label>
    </div>


    <button type="submit">
      {submitText}
    </button>

  </form>

</section>
  );
}

export default Contact;
