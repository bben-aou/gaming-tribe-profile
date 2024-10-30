export const copyToClipboard = async (inputElement: HTMLInputElement): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(inputElement.value);
      } else {
        inputElement.select();
        document.execCommand('copy');
      }
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };