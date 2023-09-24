// Функция для добавления нового контакта в список
function addContact() {
  // Получаем значение из элемента input
  var newContactText = document.getElementById("newContact").value;

  // Если значение не пустое
  if (newContactText.trim() !== "") {
    // Создаем новый элемент списка
    var newContactItem = document.createElement("li");
    newContactItem.textContent = newContactText;

    // Добавляем элемент в список контактов
    var contactList = document.getElementById("contactList");
    contactList.appendChild(newContactItem);

    // Очищаем поле ввода
    document.getElementById("newContact").value = "";

    // Проверяем количество элементов в списке и блокируем кнопку, если достигнут лимит
    var contactItems = contactList.getElementsByTagName("li");
    if (contactItems.length >= 3) {
      document.getElementById("addContact").disabled = true;
      document.getElementById("newContact").hidden = true;
    }
  }
}

// Назначаем обработчик события клика на кнопку
document.getElementById("addContact").addEventListener("click", addContact);
