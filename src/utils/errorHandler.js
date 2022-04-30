import Swal from "sweetalert2";

function ErrorHandler(title = "", text = null) {
  Swal.fire({
    title: title || "Something went wrong",
    text,
    icon: "error",
    confirmButtonText: "Ok",
  });
}

export default ErrorHandler;
