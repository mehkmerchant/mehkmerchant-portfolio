const copyButton = document.querySelector("[data-copy]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const value = copyButton.dataset.copy;
    const originalText = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(value);
      copyButton.textContent = "Email Copied";
    } catch {
      copyButton.textContent = value;
    }

    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1800);
  });
}
