import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }: any) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const emailValue = inputEmail?.current.value;
    const eventId = router?.query.id;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }
    try {
      //post fetch request
      //body email val and event id
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) {
        throw new Error("Error: ${response.status}");
      }
      const data = await response.json();
      console.log(data);
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (err: any) {
      console.log("ERROR", err);
    }
  };
  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image
        className="image"
        src={data.image}
        width={600}
        height={500}
        alt={data.title}
      />
      <p>{data.description}</p>
      <form className="email_registration" onSubmit={onSubmit}>
        <label>Get Registered For This Event</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Your Email"
        />
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
