document.getElementById('submitComment').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment user';
        commentElement.textContent = commentText;

        document.getElementById('commentsSection').appendChild(commentElement);
        
        commentInput.value = '';
        
        document.getElementById('commentsSection').scrollTop = document.getElementById('commentsSection').scrollHeight;
    }
});

const previousComments = [
    "Fala lenda!",
    "Flamengo é o maior time del MUNDO!"
];

previousComments.forEach(text => {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment other';
    commentElement.textContent = text;
    document.getElementById('commentsSection').appendChild(commentElement);
});
