import React, { useState } from 'react';

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    tokenSupply: '',
    ticker: '',
    image: null, // To store the selected image file
    imageURL: '', // To store the URL of the selected image for preview
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({
            ...formData,
            image: file,
            imageURL: reader.result, // Set the base64 encoded image URL for preview
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here, including formData.image if needed
    console.log(formData); // Example: Log the form data to console
    // Reset form fields if needed
    setFormData({
      name: '',
      description: '',
      tokenSupply: '',
      ticker: '',
      image: null,
      imageURL: '',
    });
  };

  return (

    <div className="relative min-h-screen w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-custom-grid bg-custom-size flex justify-center items-center">
      <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white ">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border-blue-100 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border-blue-100 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="tokenSupply">
            Token Supply
          </label>
          <input
            className="shadow appearance-none border-blue-100 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="tokenSupply"
            type="number"
            placeholder="Token Supply"
            value={formData.tokenSupply}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="ticker">
            Ticker
          </label>
          <input
            className="shadow appearance-none border-blue-100 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="ticker"
            type="text"
            placeholder="Ticker"
            value={formData.ticker}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="image">
            Image Upload
          </label>
          <input
            className="shadow appearance-none border-blue-100 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          {formData.imageURL && (
            <img src={formData.imageURL} alt="Uploaded Preview" className="mt-2 rounded-lg" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-black border border-blue-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Create;
