let table = document.querySelector("tbody");


let dataTable = [
  { name: "John Deo", class: "Four", mark: "75" },
  { name: "Max Ruin", class: "Three", mark: "85" },
  { name: "Arnold", class: "Three", mark: "55" },
  { name: "Krish Star", class: "Four", mark: "60" },
  { name: "John Mike", class: "Four", mark: "60" },
  { name: "Alex John", class: "Four", mark: "55" },
  { name: "My John Rob", class: "Fifth", mark: "73" },
  { name: "Asruid", class: "Five", mark: "85" },
  { name: "Tes Qry", class: "Six", mark: "78" },
  { name: "Big John", class: "Four", mark: "5" },
  { name: "John Deo", class: "Four", mark: "75" },
  { name: "Max Ruin", class: "Three", mark: "85" },
  { name: "Arnold", class: "Three", mark: "55" },
  { name: "Krish Star", class: "Four", mark: "60" },
  { name: "John Mike", class: "Four", mark: "60" }
]

function dataTableFunc() {
  dataTable.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = ` 
    <td><div class="check-div"><i class='bx bx-checkbox'></i></div>${item.name}</td>
    <td>${item.class}</td>
    <td>${item.mark}</td> 
  `
    table.appendChild(row)
  })
}

dataTableFunc();
let headrIcon = document.querySelector(".header-icon i");


let checkDiv = document.querySelectorAll('.check-div i');
for (let i = 0; i < checkDiv.length; i++) {
  checkDiv[i].addEventListener("click", () => {
    headrIcon.classList = "bx bxs-trash-alt";
    if (checkDiv[i].classList == "bx bx-checkbox") {
      checkDiv[i].classList = "bx bxs-check-square";
    } else if (checkDiv[i].classList == "bx bxs-check-square") {
      checkDiv[i].classList = 'bx bx-checkbox';
    }
  })
}

let checkDivTheadItem = document.querySelector('.check-div-thead i');
checkDivTheadItem.addEventListener("click", () => {
  headrIcon.classList = "bx bxs-trash-alt";
  checkDivTheadItem.parentNode.classList.toggle("active")
  if (checkDivTheadItem.classList == "bx bx-checkbox") {
    checkDivTheadItem.classList = "bx bxs-checkbox-minus";
  } else if (checkDivTheadItem.classList == "bx bxs-checkbox-minus") {
    checkDivTheadItem.classList = "bx bx-checkbox";
    headrIcon.classList = "bx bx-align-justify";
  }
})
let checkDivThead = document.querySelector(".check-div-thead");
checkDivThead.addEventListener("click", () => {
  checkDiv.forEach(item => {
    if (checkDivThead.classList == "check-div-thead active") {
      item.classList = "bx bxs-check-square"
    } else if (item.classList != "check-div-thead active") {
      item.classList = "bx bx-checkbox"
    }

  })
})

document.querySelector("header i").addEventListener("click", () => {
  document.querySelectorAll("tbody i").forEach(item => {
    if (item.classList == "bx bxs-check-square") {
      document.querySelector(".bxs-check-square").parentElement.parentElement.parentElement.remove();
    }
  });
});

document.querySelector("select").addEventListener("click", (e) => {
  let tbodyTr = Array.from(document.querySelectorAll("tbody tr"));
  if (e.target.value == "1") {
    tbodyTr.slice(0, 4).forEach(element => {
      element.style.display = "table-row";
    });
    tbodyTr.slice(4).forEach(element => {
      element.style.display = "none";
    });
  } else   if (e.target.value == "2") {
    tbodyTr.slice(0, 9).forEach(element => {
      element.style.display = "table-row";
    });
    tbodyTr.slice(9).forEach(element => {
      element.style.display = "none";
    });
  } else  if (e.target.value == "3") {
    tbodyTr.slice(0, 14).forEach(element => {
      element.style.display = "table-row";
    });
    tbodyTr.slice(14).forEach(element => {
      element.style.display = "none";
    });
  }
});
