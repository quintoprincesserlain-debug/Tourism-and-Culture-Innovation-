const pledgeButton = document.getElementById('pledge');
const message = document.getElementById('message');
pledgeButton.addEventListener('click', () => {
  message.textContent = 'Thank you! Travel respectfully and help protect local heritage.';
  pledgeButton.textContent = 'Pledge accepted';
  pledgeButton.disabled = true;
});
