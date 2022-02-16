// For selecting button to remove content
const deleteButton = document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById('delete-content').style.display = 'none';
})

// For to make button disable to remove content
document.getElementById('remove-confirm').addEventListener('keyup', function (e) {
    const disableButton = document.getElementById('delete-btn');
    if (e.target.value == 'delete') {
        disableButton.removeAttribute('disabled');
    }
    else {
        disableButton.setAttribute('disabled', true);
    }
})