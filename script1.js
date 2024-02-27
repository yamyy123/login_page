document.addEventListener('DOMContentLoaded', function () {
    var text = "Discover the joy of aviculture with our premium selection of birds.";

    var typewriterText = document.getElementById('typewriter-text');
    var index = 0;

    function type() {
        if (index < text.length) {
            var char = text.charAt(index);
            var span = document.createElement('span');
            span.className = 'typewriter-fade-in';
            span.textContent = char;
            typewriterText.appendChild(span);
            index++;
            setTimeout(type, 30); 
        }
    }

    type();
});