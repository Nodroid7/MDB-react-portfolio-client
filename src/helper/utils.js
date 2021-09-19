import axios from 'axios';
import { toast } from "mdbreact";

function handleChange (event) {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
}

function isEmpty(value) {
  return value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
}

function setAuthToken(token) {
  if (token) {
    localStorage.setItem("jwtToken", token);
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    localStorage.removeItem("jwtToken");
    delete axios.defaults.headers.common["Authorization"];
  }
}



function showNotification() {
 
  return
    toast.success("Success message", {
      position: "top-left"
    });
 
}
function toggle (nr) {
  let modalNumber = "modal" + nr;
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
};

export {
  handleChange,
  setAuthToken,
  isEmpty,
  showNotification,
  toggle
}