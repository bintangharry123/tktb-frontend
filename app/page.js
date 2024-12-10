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
       <div className="centered">
      {/* Navigation Header */}
      <div className="bg-blue-800/80 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 
            style={{
              fontFamily: "Montserrat",
            }}
            className="text-3xl font-bold text-white flex items-center"
          >
            <span>S K I N - T E C T</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 ml-3 text-sky-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
              />
            </svg>
          </h1>
        </div>
        <h1
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="text-xl font-serif text-white"
        >
          Deteksi penyakit kulit sejak dini!
        </h1>
      </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6 px-4 w-full">
        {/* Informasi Tambahan */}
        <div className="w-max max-w-3xl mx-auto bg-white/80 rounded-lg shadow-md p-5 text-center">
          <h2 className="text-5xl font-bold text-sky-600 mb-2">S K I N - T E C T</h2>
          <div className="flex items-center justify-between space-x-5">
            <div className="flex-grow text-left">
              <p className="text-gray-700 mb-4 text-center">
                Kenali gejala penyakit kulit Anda bersama kami!
              </p>
              <div className="text-sm text-gray-500 italic">
                Catatan: Selalu konsultasikan dengan dokter profesional untuk diagnosis definitif.
              </div>
            </div>
            {/* Opsional: Tambahkan ilustrasi atau ikon kesehatan di sini */}
            <div className="hidden md:block">
            </div>
          </div>
        </div>

        {/* Form Deteksi */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-5 text-center text-sky-500">Detect Your Skin Disease</h1>

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
    </div>
  );
}