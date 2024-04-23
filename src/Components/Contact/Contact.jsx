import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.png";
import mail_icon from "../../assets/images/mail-icon.png";
import phone_icon from "../../assets/images/phone-icon.png";
import location_icon from "../../assets/images/location-icon.png";
import white_arrow from "../../assets/images/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c6959ba6-60e3-42d0-b682-264b85f66986");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success", data);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} />
        </h3>
        <p>
          Feel free to contact us if you have any questions or concerns. We are
          here to help you.
          <ul>
            <li>
              <img src={mail_icon} alt="" /> Contact@GreatStack.dev
            </li>
            <li>
              <img src={phone_icon} alt="" /> +1 123-456-78952
            </li>
            <li>
              <img src={location_icon} alt="" />
              77 Massachusetts Ave,Cambridge
              <br />
              MA 02139,United States
            </li>
          </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
            <img src={white_arrow} alt="" />
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
