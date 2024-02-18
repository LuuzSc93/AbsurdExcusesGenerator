// This event listener waits for the HTML document to be fully loaded before executing the provided function
document.addEventListener("DOMContentLoaded", function() {
    // Array containing absurd excuses
    var excuses = [
        "I'm sorry, my dog ate my homework!",
        "I lost my phone and with it all the alarms.",
        "I got stuck in traffic... playing Monopoly.",
        "My grandmother asked me for help knitting wool socks and I couldn't resist.",
        "I was rehearsing for my next audition as a superhero.",
        "My fairy godmother was late and made me miss my carriage to the office.",
        "The technology elf has hijacked my computer.",
        "My horoscope told me that I shouldn't do any tasks today.",
        "I got lost on the way to the cafeteria and ended up in Narnia.",
        "My glasses became invisible and I can't find them.",
        "I was climbing mountains in Minecraft and lost track of time.",
        "I had to rescue my pet cactus from an evil cat.",
        "My keyboard rebelled against me and refused to type coherent words."
    ];

    // Selects the container element with the class "excuse-container"
    var excuseContainer = document.querySelector('.excuse-container');

    // Function to generate a random excuse and display it
    function generateExcuse() {
        var excuseElement = document.getElementById("excuse");
        var randomIndex = Math.floor(Math.random() * excuses.length);
        var randomExcuse = excuses[randomIndex];
        excuseElement.innerHTML = randomExcuse;
    }

    // Function to change the background color of the excuse container
    function changeBackgroundColor() {
        var colors = ["red", "blue", "green", "yellow", "purple"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        excuseContainer.style.backgroundColor = randomColor;
    }

    // Event listener for the "Generate Excuse" button, triggers the generateExcuse and changeBackgroundColor functions
    document.getElementById("generateButton").addEventListener("click", function() {
        generateExcuse();
        changeBackgroundColor();
    });

    // Event listener for when the mouse enters the excuse container, triggers the generateExcuse and changeBackgroundColor functions
    excuseContainer.addEventListener('mouseenter', function() {
        generateExcuse(); // Add this to also generate an excuse when entering
        changeBackgroundColor();
    });
});
