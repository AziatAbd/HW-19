import { useState, useRef } from "react";

const BasicForm = (props) => {
  const nameInputRef = useRef();
  const [nameIsValid, setNameIsValid] = useState(true);
  const [name, setName] = useState();
  const [isTouched, setIsTouched] = useState()


  const onChangeHandler = (e) => {
    setName(e.target.value);

    setNameIsValid(true);
    setIsTouched(true)

    const enteredName = nameInputRef.current.value;

  if(enteredName.trim().length < 4 ) {
      setNameIsValid(false)
      setIsTouched(false)
      return
    }
  };
  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };

  const nameInputClasses = nameIsValid ? "form-control" : "form-control invalid"


  return (
    <form>
      <div className={nameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" ref={nameInputRef} onChange={onChangeHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" ref={nameInputRef} onChange={onChangeHandler} />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email"/>
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
