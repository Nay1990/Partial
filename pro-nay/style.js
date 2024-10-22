const dropdown = document.getElementById('dropdown');

dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
});
// 
dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'none';
});

document.getElementById('image1').addEventListener('click', function() {
    document.getElementById('imageContainer01').style.display = 'block';
});