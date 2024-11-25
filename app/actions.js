"use server"

export const ProcessImage = async (imgData) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Buat FormData object
      const formData = new FormData();
      
      // Ubah nama field menjadi 'file' sesuai yang diharapkan backend
      formData.append('file', imgData);
  
      // Debug log
      console.log('Uploading file:', {
        name: imgData.name,
        type: imgData.type,
        size: imgData.size
      });
  
      const res = await fetch('http://localhost:8000/get-prediction', {
        method: 'POST',
        body: formData
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        reject(errorData)
        // throw new Error('Upload failed: ' + JSON.stringify(errorData));
      }
  
      const data = await res.json();
      resolve(data)
      
    } catch (err) {
      reject(err)
    }
  })
  
}