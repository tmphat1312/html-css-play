const $get = document.querySelector.bind(document);
const $getAll = document.querySelectorAll.bind(document);

var LoginController = {
  form: $get("#login-form"),
  erros: [],
  rules: {
    required(value, message = "Please fill in this field.") {
      return value ? undefined : message;
    },
    min(value, min, message = "Please fill in enough characters") {
      return value.length >= min ? undefined : message;
    }
  },

  getUser() {
    return $get("#login__username");
  },

  getPassword() {
    return $get("#login__password");
  },

  validateEntry() {
    var self = this;
    var user = this.getUser();
    var pw = this.getPassword();

    // rules for username
    user.addEventListener("blur", function() {
      var msg = self.rules.required(user.value) || self.rules.min(user.value, 6, "This field must contain at least 6 characters.");
      self.showDialog(user, msg);
    });

    user.addEventListener("input", function() {
      self.showDialog(user, "");
    });


    // rules for password
    pw.addEventListener("blur", function() {
      var msg = self.rules.required(pw.value);
      self.showDialog(pw, msg);
    });

    user.addEventListener("input", function() {
      self.showDialog(pw, "");
    });

    // validated
    return true;
  },

  showDialog(inputField, msg) {
    var formGroup = inputField.closest('.form-group');
    var msgField = formGroup.querySelector('.form__message');

    if (msg) {
      msgField.innerText = msg;
      formGroup.classList.add("invalid");
    }
    else {
      formGroup.classList.remove("invalid");
      msgField.innerText = "";
    }
  },
};

LoginController.validateEntry();