var filterInput = document.getElementById("filter");

filterInput.addEventListener("keyup", release);

function release(e) {
  let filterValue = document.getElementById("filter").value.toUpperCase();

  let ul = document.getElementById("list");

  let li = document.querySelectorAll("li.texts");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}
