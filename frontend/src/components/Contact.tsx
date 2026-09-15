import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
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

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobtitle: string;
  phoneNo: string;
  privacy: boolean;
};

function Contact({
  title,
  description,
  privacyText,
  privacyLink,
  submitText
}: ContactProps) {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

const onSubmit: SubmitHandler<FormData> = async (data) => {
  setLoading(true);
  console.log(data);
 await new Promise((resolve) => setTimeout(resolve, 1500));
  setLoading(false);
   alert("Your form has been submitted successfully!");
};

  return (
    <section className="contact">

      <div className="contact-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="form-row">

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>

            <input
              type="text"
              id="firstName"
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required"
              })}
            />

            {errors.firstName && (
              <span>{errors.firstName.message}</span>
            )}
          </div>


          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              {...register("lastName", {
                required: "Last name is required"
              })}
            />

            {errors.lastName && (
              <span>{errors.lastName.message}</span>
            )}
          </div>

        </div>


        <div className="form-row">

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required"
              })}
            />

            {errors.email && (
              <span>{errors.email.message}</span>
            )}
          </div>


          <div className="form-group">
            <label htmlFor="company">Company</label>

            <input
              type="text"
              id="company"
              placeholder="Company"
              {...register("company")}
            />
          </div>

        </div>


        <div className="form-row">

          <div className="form-group">
            <label htmlFor="jobtitle">Job Title</label>

            <input
              type="text"
              id="jobtitle"
              placeholder="Job title"
              {...register("jobtitle")}
            />
          </div>


          <div className="form-group">
            <label htmlFor="phoneNo">Phone Number</label>

            <input
                   type="tel"
                   id="phoneNo"
                   placeholder="Phone number"
                  {...register("phoneNo")}
                   onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                         }}
                  />

{errors.phoneNo && (
  <span>{errors.phoneNo.message}</span>
)}
          </div>

        </div>


        <div className="privacy">

          <input
            type="checkbox"
            id="privacy"
            {...register("privacy", {
              required: "You must accept the Privacy Policy"
            })}
          />

          <label htmlFor="privacy">
            {privacyText}{" "}
            <a href={privacyLink}>Privacy Policy</a>
          </label>

          {errors.privacy && (
            <span>{errors.privacy.message}</span>
          )}

        </div>


       <button type="submit" disabled={loading}>
       {loading ? "Submitting..." : submitText}
            </button>

      </form>
      
    </section>
  );
}

export default Contact;