function init(){
//add your javascrip between these two lines of code
    const entryInput = document.getElementById('entryinput');// Select the input, button, and output elements
    const entryButton = document.getElementById('entrybutton');// Select the input, button, and output elements
    const textOutput = document.getElementById('textoutput');// Select the input, button, and output elements

    // Add event listener to the button
    entryButton.addEventListener('click', function () {
        const userMessage = entryInput.value;// Get the value from the input field

        alert(`Md Mahmudul Hasan: ${userMessage}`);// Show the alert with the specified format

        textOutput.textContent = userMessage;// Update the h2 element with the user's message
    });

}
window.addEventListener('load', init);
