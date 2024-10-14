document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publisher = document.getElementById("publisher").value;
  const publishedDate = document.getElementById("published_date").value;
  const price = document.getElementById("price").value;

  if (!title || !author || !publisher || !publishedDate || !price) {
    error.innerHTML = "All fields are required.";
  } else {
    error.innerHTML = "";

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("published_date").value = "";
    document.getElementById("price").value = "";

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
              <td class="py-2 px-4 border-b">${title}</td>
              <td class="py-2 px-4 border-b">${author}</td>
              <td class="py-2 px-4 border-b">${publisher}</td>
              <td class="py-2 px-4 border-b">${publishedDate}</td>
              <td class="py-2 px-4 border-b">${price}</td>`;
    bookTableBody.appendChild(newRow);
  }
});
