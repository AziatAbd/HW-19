import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [nameIsValid, setNameIsValid] = useState(true);
  const [name, setName] = useState();
  const [isTouched, setIsTouched] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // const enredName = nameInputRef.current.value;
    // setNameIsValid(true);

    // if (enredName.trim().length < 5) {
    //   setNameIsValid(false);
    //   console.log("input is empty");
    //   return;
    // }

    // console.log(enredName);

    // nameInputRef.current.value = " ";
  };

  const onBlurHandler = () => {
    const enredName = nameInputRef.current.value;

    setNameIsValid(true);
    setIsTouched(true);

    if (enredName.trim().length < 5) {
      setNameIsValid(false);
      setIsTouched(false);
      return;
    }
  };

  const onChangeHandler = (event) => {
    setName(event.target.value);

    setNameIsValid(true);
    setIsTouched(true);
    const enredName = nameInputRef.current.value;

    if (enredName.trim().length < 5) {
      setNameIsValid(false);
      setIsTouched(false);
      return;
    }
  };

  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {!nameIsValid && (
          <p className="error-text">name should be more 5 characters</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
