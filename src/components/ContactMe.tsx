import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitContactForm: React.FormEventHandler<
    HTMLFormElement
  > = async (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Name is Required");
      return;
    }
    if (!email) {
      setErrorMessage("Email is Required");
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setErrorMessage("Please enter valid Email");
      return;
    }
    if (!subject) {
      setErrorMessage("Subject is Required");
      return;
    }
    if (!message) {
      setErrorMessage("Message is Required");
      return;
    }
    const response = await emailjs.send(
      "service_n7tzj08",
      "template_0hygymr",
      {
        from_name: name,
        message: message,
        from_subject: subject,
        from_email: email,
      },
      { publicKey: "12AI3evKPiZ74__uJ" }
    );
    console.log(response);
    if (response.status == 200) {
      setName("");
      setSubject("");
      setEmail("");
      setMessage("");
      setErrorMessage(
        "Thank you for contacting me! I will contact you regarding your message ASAP"
      );
    } else {
      setErrorMessage("Error while sending email");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  md:py-10">
      <div className="">
        <div className="space-y-3">
          <p>Let&apos;s Work Together for your next project or startup.</p>
          <p>
            I&apos;d love to meet up with you to discuss your venture, and
            potential collaborations.
          </p>
          <div className="flex items-start gap-6 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 fill-blue-700"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <a href="mailto:contact@crisprcoders.com">
              <p>admin@bipinpandey.com.np</p>
            </a>
          </div>
          <div className="flex items-start gap-6 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-6 fill-blue-700"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
            </svg>
            <p>
              New Bazzar, Baisjangar Thanimai Marg,
              <br /> Bhanu-9, Tanahun
            </p>
          </div>
          <div className="flex gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 fill-blue-700"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <p>+977-9846090617</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmitContactForm}>
        <div className="space-y-4 ">
          <div className="relative">
            <label htmlFor="name">
              <span className="absolute right-3 top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-4 fill-blue-700"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                </svg>
              </span>
            </label>
            <input
              placeholder="Name"
              id="name"
              name="name"
              value={name}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              onChange={({ target: { value } }) => {
                setName(value);
                setErrorMessage("");
              }}
            />
          </div>
          <div className="relative">
            <label htmlFor="email">
              <span className="absolute right-3 top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-4 fill-blue-700"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </span>
            </label>
            <input
              id="email"
              placeholder="Email"
              name="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              onChange={({ target: { value } }) => {
                setEmail(value);
                setErrorMessage("");
              }}
              value={email}
            />
          </div>
          <div className="relative">
            <label htmlFor="work">
              <span className="absolute right-3 top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-4 fill-blue-700"
                >
                  <path d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 96-96 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 96 0 0 96-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-96 96 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-96 0 0-96 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z" />
                </svg>
              </span>
            </label>
            <select
              name="subject"
              value={subject}
              onChange={({ target: { value } }) => {
                setSubject(value);
                setErrorMessage("");
              }}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            >
              <option value={""}>What are you looking for?</option>
              <option value="Fullstack Product Development">
                Fullstack Product Development
              </option>
              <option value="DevOps and Deployment Solutions">
                DevOps and Deployment Solutions
              </option>
              <option value="Technical Leadership and Team Mentorship">
                Technical Leadership and Team Mentorship
              </option>
              <option value="B2B SaaS Solutions Consulting">
                B2B SaaS Solutions Consulting
              </option>
              <option value="Startup MVP Development">
                Startup MVP Development
              </option>
              <option value="Project Management and Delivery">
                Project Management and Delivery
              </option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="message">
              <span className="absolute top-3 right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-4 fill-blue-700"
                >
                  <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
                </svg>
              </span>
            </label>
            <textarea
              placeholder="Write some message"
              cols={23}
              rows={4}
              style={{ resize: "none" }}
              name="message"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              onChange={({ target: { value } }) => {
                setMessage(value);
                setErrorMessage("");
              }}
              value={message}
            />
          </div>
          <p className="text-sm text-red-500">{errorMessage}</p>
          <button
            className="group cursor-pointer block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Let&apos;s Talk{" "}
            <span
              aria-hidden="true"
              className="inline-flex transition-all duration-200 ease-in-out w-0 overflow-hidden group-hover:w-4"
            >
              &rarr;
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
