export default function convertToBase64(file: File): Promise<{ name: string; ext: string; data: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve({
          name: file.name.split('.')[0],
          ext: file.name.split('.')[1],
          data: reader.result as string,
        });
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    reader.onerror = error => reject(error);
  });
}
