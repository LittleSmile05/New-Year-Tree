$(document).ready(function () {
    var $container = $('.container');
    var $btnChange = $('.btn-change');
    var text = 'YENİİL';

    function createLine() {
        var count = Math.floor($(window).height() / text.length) / 2.5;
        $container.css('height', 'calc(100vh - ' + $btnChange.outerHeight() + 'vh)');
        $container.empty();
        for (var i = 0; i < count; i++) {
            var $line = $('<p></p>');
            var lineText = text.repeat(Math.floor($(window).width() / text.length - 1));
            var start = Math.floor((lineText.length) / 2) - i;
            var end = Math.floor((lineText.length) / 2) + i + 2;
            var coloredtext = lineText.substring(0, start) + '<span style="color: white;">' + lineText.substring(start, end) + '</span>' + lineText.substring(end);
            $line.html(coloredtext);
            $container.append($line);
        }
        var paragraphs = $container.find('p');
        var greenParagraphs = [];
        while (greenParagraphs.length < 5) {
            var randomIndex = Math.floor(Math.random() * paragraphs.length);
            if (!greenParagraphs.includes(randomIndex)) {
                greenParagraphs.push(randomIndex);
                paragraphs.eq(randomIndex).find('span').css('color', '#69CBFF');
            }
        }
    }

    createLine();

    $btnChange.on('click', function () {
        var newText = prompt("Enter text:");
        if (newText !== null) {
            newText = newText.replace(/\s/g, '');
            if (newText.length !== 0) {
                text = newText;
                createLine();
            }
        }
    });
});
