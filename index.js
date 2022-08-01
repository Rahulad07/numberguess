function random() {
    let guess = prompt("Guess the number");
    // let answer = document.getElementById("result");
    // let counter_value = document.getElementById("counter");
    // let differnce_value = document.getElementById("difference");
    var ran_val = Math.random() * 10;
    for (var i = 0; i <= 10; i++) {
      if (guess == ran_val) {
        document.write("you guess it!");
      }
    //   } else if (guess > ran_val) {
    //     document.write("<ul><li>Too high</li></ul> ");
    //   } else (guess < ran_val)
    //   {
    //     document.write("<ul><li>Too low</li></ul>");
    //   }
    // }
    
}
}
random();