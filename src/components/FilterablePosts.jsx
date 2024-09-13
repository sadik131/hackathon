import React, { useState } from 'react';
import Posts from './Posts';

function FilterablePosts() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const laws = [
        { id: 1, title: 'Section 299', category: 'Road Law', description: 'Section 299 of the IPC defines culpable homicide. It refers to causing death with the intention of doing so or with knowledge that the act is likely to cause death. However, this does not include cases of murder as outlined in Section 300.' },
        { id: 1, title: 'Section 299', category: 'Road Law', description: 'Section 299 of the IPC defines culpable homicide. It refers to causing death with the intention of doing so or with knowledge that the act is likely to cause death. However, this does not include cases of murder as outlined in Section 300.' },
        { id: 1, title: 'Section 299', category: 'Road Law', description: 'Section 299 of the IPC defines culpable homicide. It refers to causing death with the intention of doing so or with knowledge that the act is likely to cause death. However, this does not include cases of murder as outlined in Section 300.' },
      ];

    // Filtered laws based on search term and category
    const filteredLaws = laws.filter((law) => {
        const matchesSearch = law.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? law.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className='px-16'>
            {/* Filter Section */}
            <div className='flex justify-between items-center mb-6'>
                <div>
                    <label htmlFor="category" className='mr-4'>Filter by Category: </label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                    >
                        <option value="">All Categories</option>
                        <option value="Criminal Law">Criminal Law</option>
                        <option value="Road Law">Road Law</option>
                        <option value="Family Law">Family Law</option>
                    </select>
                </div>

                {/* Search Bar */}
                <div>
                    <input
                        type="text"
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {filteredLaws.map((law) => <Posts key={law.id} law={law}></Posts>)}
            </div>
        </div>
    );
}

export default FilterablePosts;
