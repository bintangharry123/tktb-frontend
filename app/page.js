'use client'

import { useState } from 'react';
import { ProcessImage } from './actions';

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [resultData, setResultData] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      // Create preview URL for the selected image
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }
    const data = await ProcessImage(selectedImage)
    setResultData(data.result)
  };

return (
  <div className="min-h-screen bg-[url('/pexels-juanpphotoandvideo-1242349.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* Navigation Header */}
      <div className="bg-blue-600 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-10">
        <h1 
          style ={{
            fontFamily: "Montserrat",
          }}
          className="text-3xl font-bold  text-white">S K I N - T E C T</h1>
        <h1
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="text-3l font-serif text-white">Deteksi penyakit kulit sejak dini!</h1>

      </div>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-5  text-center text-sky-500">Detect Your Skin Disease</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <label
              htmlFor="image-upload"
              className="block w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-h-48 mx-auto mb-4"
                />
              ) : (
                <div className="text-gray-600">
                  Click to select an image
                </div>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {selectedImage && (
              <p className="mt-2 text-sm text-gray-500">
                Selected: {selectedImage.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedImage}
          >
            Upload Image
          </button>
        </form>
      </div>
      {resultData !== '' && (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 text-slate-600 mt-4">
          Prediction Result: {' '}
          {resultData}
        </div>
      )}
    </div>
  );
}