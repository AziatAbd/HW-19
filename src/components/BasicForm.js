import { useState, useRef } from "react";

const BasicForm = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [name, setName] = useState();
  const [isTouched, setIsTouched] = useState();

  const onChangeHandler = (e) => {
    setName(e.target.value);
    setFirstNameIsValid(true);
    setLastNameIsValid(true);
    setIsTouched(true);

    const firstEnteredName = firstNameInputRef.current.value;
    const lastEnteredName = lastNameInputRef.current.value;
 
    if (firstEnteredName.trim().length < 4) {
      setFirstNameIsValid(false);
      setIsTouched(false);
      return;
    } else if (lastEnteredName.trim().length < 6) {
      setLastNameIsValid(false);
      setIsTouched(false);
    }
  };

  const nameInputClasses = firstNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form>
      <div className={nameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            ref={firstNameInputRef}
            onChange={onChangeHandler}
          />
          {!firstNameIsValid && (
            <p className="error-text">name should be more 4 characters</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            ref={lastNameInputRef}
            onChange={onChangeHandler}
          />
          {!lastNameIsValid && (
            <p className="error-text">name should be more 6 characters</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
