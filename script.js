document.getElementById('myButton').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
});

document.addEventListener('mousemove', function(event) {
    const cursors = [];
    for (let i = 0; i < 10000; i++) {
        let cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);
        cursors.push(cursor);
    }

    function moveCursors() {
        cursors.forEach(cursor => {
            cursor.style.left = `${Math.random() * window.innerWidth}px`;
            cursor.style.top = `${Math.random() * window.innerHeight}px`;
        });
    }

    moveCursors();
    setInterval(moveCursors, 100);
});
