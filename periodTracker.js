function calculate () {
    // Generate a random number between 24 and 30 (inclusive)
    const min = 19;
    const max = 35;
    const randomNum = Math.random() * (max - min + 1) + min;

    // Round the random number to an integer if needed
    const roundedRandomNum = Math.floor(randomNum);


		document.getElementById("results").innerHTML = "Your Cycle begins in "+roundedRandomNum +  " days";
}
