function renderRecords() {
    const borrowRecords = JSON.parse(localStorage.getItem("borrowRecords")) || [];
    const recordTable = document.querySelector("#recordsTable tbody");
    recordTable.innerHTML = "";
  
    borrowRecords.forEach(record => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${record.title}</td>
        <td>${record.borrowDate}</td>
        <td>${record.returnDate}</td>
        <td>${record.status}</td>
      `;
      recordTable.appendChild(row);
    });
  }
  
  function goToBookList() {
    window.location.href = "booklist.html";
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
    renderRecords();
  }
  function logout() {
    localStorage.removeItem("borrowRecords"); // Remove borrowing history
    localStorage.removeItem("user");          // Remove logged-in user
    alert("Logged out successfully!");
    window.location.href = "index.html";
  }
  
  