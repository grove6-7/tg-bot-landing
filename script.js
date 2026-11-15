document.getElementById('copyBtn').addEventListener('click', async () => {
  const text = document.getElementById('scriptText').innerText;
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'Скопировано';
  } catch (e) {
    status.textContent = 'Не вышло скопировать — выделите текст вручную';
  }
  setTimeout(() => { status.textContent = ''; }, 3000);
});
