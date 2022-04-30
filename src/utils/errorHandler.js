/* eslint-disable no-console */
import Swal from "sweetalert2";

function ErrorHandler(err, title = "", text = null) {
  console.log(err);
  if (text === null) text = err.reason;

  Swal.fire({
    title: title || "Something went wrong",
    text,
    icon: "error",
    confirmButtonText: "Ok",
  });
}

export default ErrorHandler;
