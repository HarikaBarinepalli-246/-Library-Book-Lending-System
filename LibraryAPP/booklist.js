const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "5116251", genre: "Fiction", year: 2004, available: 3 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "162202", genre: "Classic", year: 1984, available: 1 },
    { title: "1984", author: "George Orwell", isbn: "8606665", genre: "Dystopian", year: 1987, available: 4 },
    { title: "Pride and Prejudice", author: "Jane Austen", isbn: "313018", genre: "Romance", year: 1887, available: 2 }
  ];
  
  const borrowRecords = JSON.parse(localStorage.getItem("borrowRecords")) || [];
  
  function renderBooks() {
    const bookTable = document.querySelector("#bookTable tbody");
    bookTable.innerHTML = "";
  
    books.forEach((book, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>${book.genre}</td>
        <td>${book.year}</td>
        <td>${book.available}</td>
        <td><button onclick="lendBook(${index})" ${book.available === 0 ? "disabled" : ""}>Lend</button></td>
      `;
  
      bookTable.appendChild(row);
    });
  }
  
  function lendBook(index) {
    if (books[index].available > 0) {
      books[index].available--;
  
      const today = new Date();
      const borrowDate = today.toISOString().split("T")[0];
      const returnDate = new Date(today);
      returnDate.setDate(today.getDate() + 14);
      const returnDateStr = returnDate.toISOString().split("T")[0];
  
      borrowRecords.push({
        title: books[index].title,
        borrowDate: borrowDate,
        returnDate: returnDateStr,
        status: "Borrowed"
      });
  
      localStorage.setItem("borrowRecords", JSON.stringify(borrowRecords));
  
      renderBooks();
    }
  }
  
  function goToRecords() {
    window.location.href = "borrowlist.html";
  }
  
  function logout() {
    alert("Logged out successfully!");
    window.location.href = "index.html";
  }
  
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  if (!loggedInUser) {
    alert("Please log in first.");
    window.location.href = "index.html";
  } else {
    renderBooks();
  }
  function logout() {
    localStorage.removeItem("borrowRecords"); // Remove borrowing history
    localStorage.removeItem("user");          // Remove logged-in user
    alert("Logged out successfully!");
    window.location.href = "index.html";
  }
  
  