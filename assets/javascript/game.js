window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
   var chosenCategory;     // Selected catagory
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var space;              // Number of spaces in word '-'
    var showLives = document.getElementById("mylives");
    var showImage = document.getElementById("myImage");
    
  

    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    

    catagoryName.innerHTML = "The Category Is Premier League";
     
  
    // Create geusses ul
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives
     comments = function (word) {
      console.log(word);
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
          switch(word) {
            case "manchester":
              showImage.src = "assets/images/MU.png";
              break;
            case "everton":
                showImage.src = "assets/images/everton.png";
                break;
            case "liverpool":
                showImage.src = "assets/images/liverpool.png";
                break;
                case "swansea":
                showImage.src = "assets/images/swansea.png";
                break;
                case "chelsea":
                showImage.src = "assets/images/chelsea.png";
                break;
                case "hull":
                showImage.src = "assets/images/hull.png";
                break;
                case "manchester-city":
                showImage.src = "assets/images/mancity.png";
                break;
                case "newcastle-united":
                showImage.src ="assets/images/newcastle.png";
                break;
            console.log("ignore");
        }

        }
      }
    }
  // Nick was saying that the paths are causing a problem. He said I should try providing a path:
  // 1) relative to the images from the game.js file or...
  // 2) relative to the images from the index.html because the HTML nodes are the nodes are the ones that are referencing the images.



      // OnClick Function
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments(word);

        } else {
          comments(word);
        }
      }
    }
    
      
    // Answers 
    play = function () {
      categories = [
          ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united",
          "manchester"]
      ];
  




      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments(word);
    }
  
  
  
  
    play();
    
  
          
      
  
    

  
  }
  
  
  