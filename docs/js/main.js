function enter() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

 
  if (user == "Oughzhadhalhous Minsodis" && pass == "ProMaxUltra") {
    main()
  }

  // Panic Users
  else if (user == "asdf") {
    splashError()
  }
  else if (user == "asd") {
    splashError()
  }
  else if (user == "sadf") {
    splashError()
  }
  else if (user == "") {
    splashError()
  }
  else if (user == "") {
    splashError()
  }

  // System Users
  else if (user == "del") {
    del()
  }
  else if (user == "troll") {
    troll()
  }

  // Normal Users
  else if (user == "e" && pass == "goob") {
    main()
  }
  else if (user == "e" && pass == "goob") {
    main()
  }
  else if (user == "e" && pass == "goob") {
    main()
  }
  else if (user == "e" && pass == "goob") {
    main()
  }
  else if (user == "e" && pass == "goob") {
    main()
  }
  else if (user == "e" && pass == "goob") {
    main()
  }
  else if (user == "e" && pass == "goob") {
    main()
  }
  else if (user == "e" && pass == "goob") {
    main()
  }
  else {
    splashError()
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}