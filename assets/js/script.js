// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
  // This is just a sanity check to make sure your JavaScript script is getting loaded
  // You can remove it once you see it in your browser console in the developer tools
  console.log('Hi')
  let pennyImage = document.getElementById('penny-image');
  let totalFlips = 0;
  let numberofHeads = 0;
  let numberofTails = 0;
  let percentageHeads = 0;
  let percentageTails = 0;

  let heads = document.getElementById('heads');
  let headsPercent = document.getElementById('heads-percent')
  let tails = document.getElementById('tails')
  let tailsPercent = document.getElementById('tails-percent')
  let messageContainer = document.querySelector('.message-container')
  messageContainer.textContent = '';

  let flip = document.getElementById('flip');
  let clear = document.getElementById('clear');
  // TODO: Add event listener and handler for flip and clear buttons
  flip.addEventListener('click', function () {
    let randomSide = Math.round(Math.random())
    totalFlips++;
    if (randomSide == true) {
      pennyImage.setAttribute('src', './assets/images/penny-heads.jpg');
      messageContainer.textContent = "It is Heads!";

      console.log('heads!')
      numberofHeads++;
      totalFlips = numberofHeads + numberofTails;
      heads.textContent = numberofHeads;


    } else {
      pennyImage.setAttribute('src', './assets/images/penny-tails.jpg');
      console.log('tails!')
      messageContainer.textContent = "It is tails!";
      numberofTails++;
      tails.textContent = numberofTails;


    }

    percentageHeads = numberofHeads / totalFlips * 100;
    headsPercent.textContent = percentageHeads.toFixed(2) + "%";
    // console.log(percentageHeads);
    console.log(totalFlips);
    console.log(numberofHeads);

    percentageTails = numberofTails / totalFlips * 100;
    tailsPercent.textContent = percentageTails.toFixed(2) + "%";
    // console.log(percentageTails);
    console.log(totalFlips);
    console.log(numberofTails)



  })


  clear.addEventListener('click', function () {

    heads.textContent = 0;
    headsPercent.textContent = 0;
    tails.textContent = 0;
    tailsPercent.textContent = 0;

    totalFlips = 0;
    numberofHeads = 0;
    numberofTails = 0;
    percentageHeads = 0;
    percentageTails = 0;
  })

  // Flip Button Click Handler

  // TODO: Determine flip outcome
  // TODO: Update image and status message in the DOM

  // Update the scorboard
  // TODO: Calculate the total number of rolls/flips
  // Make variables to track the percentages of heads and tails
  // TODO: Use the calculated total to calculate the percentages
  // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
  // TODO: Update the display of each table cell


  // Clear Button Click Handler
  // TODO: Reset global variables to 0
  // TODO: Update the scoreboard (same logic as in flip button click handler)

})
