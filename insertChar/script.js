document.addEventListener('DOMContentLoaded', () => {
  const inputTextForm = document.getElementById('input-text');
  const insertCharForm = document.getElementById('insert-char');
  const output = document.getElementById('output');
  const insertEndBtn = document.getElementById('insert-end');
  const insertBtn = document.getElementById('insert-btn');
  const copyBtn = document.getElementById('copy-btn');

  insertBtn.addEventListener('click', () => {
    const str = inputTextForm.value;
    const char = insertCharForm.value;

    if (insertEndBtn.checked) {
      const outputStr = insertChar(str, char);
      output.textContent = outputStr + char;
      return;
    }
    const outputStr = insertChar(str, char);
    output.textContent = outputStr;
  });

  function insertChar(str, char) {
    if (str === '') {
      return str;
    }

    const chars = str.split('');
    const insertedChars = chars.map((c, i) => {
      if (i === chars.length - 1) {
        return c;
      } else {
        return c + char;
      }
    });

    return insertedChars.join('');
  }

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(output.textContent);
    alert('Copied!');
  });
});
