import React, { useState } from 'react';

const BookAddPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        imageLink: '',
        title: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        const res = await fetch('http://localhost:4001/book/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data);
        // Reset form data after submission
        setFormData({
            name: '',
            price: '',
            category: '',
            imageLink: '',
            title: ''
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://imgs.search.brave.com/MKykgwwnMQ-mw9hIvoRCE36_uzNpjQPn8kvQnHUuKFo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib29rLXdpdGgt/cGljdHVyZS1jb2Zm/ZWUtYm9vay10YWJs/ZV85NTQyMjYtMjk0/Mjc3LmpwZz9zaXpl/PTYyNiZleHQ9anBn')" }}>
            <div className="max-w-md w-full space-y-8 bg-white bg-opacity-75 backdrop-blur-md p-6 rounded-md shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add New Book</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">Book Name</label>
                            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Book Name" />
                        </div>
                        <div>
                            <label htmlFor="price" className="sr-only">Price</label>
                            <input id="price" name="price" type="number" min="0" value={formData.price} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Price" />
                        </div>
                        <div>
                            <label htmlFor="category" className="sr-only">Category</label>
                            <input id="category" name="category" type="text" value={formData.category} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Category" />
                        </div>
                        <div>
                            <label htmlFor="imageLink" className="sr-only">Image Link</label>
                            <input id="imageLink" name="imageLink" type="text" value={formData.imageLink} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Image Link" />
                        </div>
                        <div>
                            <label htmlFor="title" className="sr-only">Title</label>
                            <input id="title" name="title" type="text" value={formData.title} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Title" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookAddPage;
