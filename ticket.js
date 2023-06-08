const firebaseConfig = {
  apiKey: "AIzaSyA79X9r7JxWI_Itm0K2yOkr8aIEPmDS-_A",
  authDomain: "test-c9e4e.firebaseapp.com",
  databaseURL: "https://test-c9e4e-default-rtdb.firebaseio.com",
  projectId: "test-c9e4e",
  storageBucket: "test-c9e4e.appspot.com",
  messagingSenderId: "825540492209",
  appId: "1:825540492209:web:d71c8683ab1ea7be7a1b90",
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var monument = getElementVal("monument");
  var quantity = getElementVal("quantity");



  saveMessages(name, emailid, monument, quantity);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();

  setTimeout(() => {
    window.location.href = "finalpage.html";
  }, 3000);
}

const saveMessages = (name, emailid, monument, quantity) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    monument: monument,
    quantity: quantity,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
