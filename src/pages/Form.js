import React, { useState } from "react";
import { nanoid } from "nanoid";

export const Form = ({ onCreateUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  return (
    <>
      <h2>Form</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // console.log({ firstName, lastName, id: nanoid() });
          onCreateUser({ firstName, lastName, id: nanoid() });
          setFirstName("");
          setLastName("");
        }}
      >
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
        <input
          type="text"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
