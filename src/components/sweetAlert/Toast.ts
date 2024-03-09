import Swal from "sweetalert2";
import "./styles.css";

export const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  iconColor: "white",
  showConfirmButton: false,
  timer: 3000,
  customClass: {
    popup: "custom-toast",
  },
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
