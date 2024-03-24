
bars = document.querySelector(".bars");
bars.onclick = function(){
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active")
}
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    // Aquí puedes implementar la lógica de búsqueda
    console.log('Término de búsqueda:', searchTerm);
  });
});

