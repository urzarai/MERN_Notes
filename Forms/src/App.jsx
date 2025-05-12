import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const delay = (seconds) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(3);
    let r =  await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data)})     //submitting to express backend
    let res = await r.text()
    console.log(data, res);
    //ERRORS with customised message
    if (data.username !== "URZARAI") {
      setError("myform", { message: "Your form is invalid because of Username" });
    }
    if(data.username == "ANSHCHOPRA")
    {
      setError("bocked", { message: "Form cannot be accessed as this user is blocked" });
    }
  };

  return (
    <>
      {isSubmitting && <div>Submitting....</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
          //form with validation
            {...register("username", {
              required: { value: true, message: "Username is required" },
              minLength: { value: 5, message: "Min length is 5" },
              maxLength: { value: 10, message: "Max length is 10" },
            })}
            type="text"
            placeholder="USERNAME"
          />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <input
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: { value: 6, message: "Min length is 6" },
              maxLength: { value: 12, message: "Max length is 12" },
            })}
            type="password"
            placeholder="PASSWORD"
          />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
