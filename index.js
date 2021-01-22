function VALIDATION() {
  var source = document.forms["RegForm"]["source"].value;
  var pname = document.forms["RegForm"]["pname"].value;
  var project = document.forms["RegForm"]["project"].value;
  var bucketname = document.forms["RegForm"]["bucketname"].value;
  var storagefile = document.forms["RegForm"]["storagefile"].value;
  var credentials = document.forms["RegForm"]["credentials"].value;
  var runevery = document.forms["RegForm"]["runevery"].value;

  if (source == "") {
    document.getElementById("yoursource").innerHTML =
      " ** please fill this Field";
    return false;
  }
  if (/[^a-zA-Z0-9\-\/]/.test(source)) {
    document.getElementById("yoursource").innerHTML =
      " ** special characters are not allowed";
    return false;
  }

  if (source.length < 5) {
    document.getElementById("yoursource").innerHTML = " ** Length must be 5";
    return false;
  }
  // if (source.indexOf("_" || "-" || "+") <= 0) {
  //   document.getElementById("yoursource").innerHTML =
  //     " ** Cannot start with '-', '_', '+'";
  //   return false;
  // }
  if (pname == "") {
    document.getElementById("pipeline").innerHTML =
      " ** Please fill this field";
    return false;
  }
  if (/[^a-zA-Z0-9\-\/]/.test(pname)) {
    document.getElementById("pipeline").innerHTML =
      " ** special characters are not allowed";
    return false;
  }

  if (pname.length < 5) {
    document.getElementById("pipeline").innerHTML = " ** Length must be 5";
    return false;
  }
  // if (pname.indexOf("_" || "-" || "+") <= 0) {
  //   document.getElementById("pipeline").innerHTML =
  //     " ** Cannot start with '-', '_', '+'";
  //   return false;
  // }
  if (project == "") {
    document.getElementById("gcs-pname").innerHTML =
      " ** Please fill this field";
    return false;
  }
  if (/[^a-zA-Z0-9\-\/]/.test(project)) {
    document.getElementById("gcs-pname").innerHTML =
      " ** special characters are not allowed";
    return false;
  }

  if (project.length < 5) {
    document.getElementById("gcs-pname").innerHTML = " ** Length must be 5";
    return false;
  }
  // if (project.indexOf("_" || "-" || "+") <= 0) {
  //   document.getElementById("gcs-pname").innerHTML =
  //     " ** Cannot start with '-', '_', '+'";
  //   return false;
  // }
  if (bucketname == "") {
    document.getElementById("gcs-bname").innerHTML =
      " ** please fill this Field";
    return false;
  }
  if (/[^a-zA-Z0-9\-\/]/.test(bucketname)) {
    document.getElementById("gcs-bname").innerHTML =
      " ** special characters are not allowed";
    return false;
  }

  if (bucketname.length < 5) {
    document.getElementById("gcs-bname").innerHTML = " ** Length must be 5";
    return false;
  }
  // if (bucketname.indexOf("_" || "-" || "+") <= 0) {
  //   document.getElementById("gcs-bname").innerHTML =
  //     " ** Cannot start with '-', '_', '+'";
  //   return false;
  // }
  if (storagefile == "") {
    document.getElementById("input file").innerHTML =
      " ** please fill this Field";
    return false;
  }
  if (/[^a-zA-Z0-9\-\/]/.test(storagefile)) {
    document.getElementById("input file").innerHTML =
      " ** special characters are not allowed";
    return false;
  }

  if (storagefile.length < 5) {
    document.getElementById("input file").innerHTML = " ** Length must be 5";
    return false;
  }
  // if (storagefile.indexOf("_" || "-" || "+") <= 0) {
  //   document.getElementById("input file").innerHTML =
  //     " ** Cannot start with '-', '_', '+'";
  //   return false;
  // }
  if (credentials == "") {
    document.getElementById("gcs-credential").innerHTML =
      " ** please fill this Field";
    return false;
  }
  if (/[^a-zA-Z0-9\-\/]/.test(credentials)) {
    document.getElementById("gcs-credential").innerHTML =
      " ** special characters are not allowed";
    return false;
  }

  if (credentials.length < 5) {
    document.getElementById("gcs-credential").innerHTML =
      " ** Length must be 5";
    return false;
  }
  // if (credentials.indexOf("_" || "-" || "+") <= 0) {
  //   document.getElementById("gcs-credential").innerHTML =
  //     " ** Cannot start with '-', '_', '+'";
  //   return false;
  // }
  if (runevery == "") {
    document.getElementById("run").innerHTML = " **  please fill this Field";
    return false;
  }
  if (/[^a-zA-Z0-9\-\/]/.test(runevery)) {
    document.getElementById("run").innerHTML =
      " ** special characters are not allowed";
    return false;
  }

  if (runevery.length < 5) {
    document.getElementById("run").innerHTML = " ** Length must be 5";
    return false;
  }
  // if (runevery.indexOf("_" || "-" || "+") <= 0) {
  //   document.getElementById("run").innerHTML =
  //     " ** Cannot start with '-', '_', '+'";
  //   return false;
  // }
}
