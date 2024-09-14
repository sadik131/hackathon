import React, { useState } from 'react';
import Posts from './Posts';
import blog1 from "../img/blog1.jpg"
import blog2 from "../img/blog2.jpg"
import blog3 from "../img/blog3.jpg"
import blog4 from "../img/blog4.jpg"
import blog5 from "../img/blog5.jpg"

function FilterablePosts() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const laws = [
        {
            id: 1,
            title: 'Section 302',
            category: 'Criminal Law',
            description: 'Section 302 of the Indian Penal Code (IPC) deals with the punishment for murder. This section prescribes the legal consequences for anyone found guilty of committing murder. According to this section, the individual convicted of murder can be sentenced to death or rigorous imprisonment for life. Additionally, the court may impose a fine on the convict. The section emphasizes that the severity of the punishment reflects the seriousness of the crime. Murder, under this section, is defined as the unlawful killing of a human being with the intention of causing death or with knowledge that such an act is likely to cause death. The section aims to provide justice for the victim by imposing a severe penalty on those who commit such heinous acts. The death penalty, while a potential outcome, is not mandatory and is typically reserved for the most egregious cases where the court deems it necessary for justice to be served.',
            img: blog2
        },
        {
            id: 2,
            title: 'Section 498A',
            category: 'Family Law',
            description: 'Section 498A of the Indian Penal Code (IPC) addresses the issue of cruelty towards a woman by her husband or his relatives. This section specifically targets cases where a woman is subjected to cruelty, either physical or mental, by her husband or in-laws. The definition of cruelty under this section includes any act that causes severe emotional distress or harm to the woman, thereby leading to her suffering or endangerment. The punishment for those found guilty under this section can include imprisonment for a term that may extend up to three years, along with a fine. Section 498A aims to protect women from domestic abuse and ensure their safety and dignity within the marriage. It serves as a crucial legal remedy for women who are victims of marital cruelty, providing them with a means to seek justice and hold perpetrators accountable for their abusive behavior.',
            img: blog3
        },
        {
            id: 3,
            title: 'Section 376',
            category: 'Criminal Law',
            description: 'Section 376 of the Indian Penal Code (IPC) defines the offense of rape and prescribes the punishment for it. Under this section, rape is described as a crime where a person is forcibly subjected to sexual intercourse without their consent. The law provides for severe penalties for those convicted of rape, including rigorous imprisonment for a minimum term of seven years, which can extend to life imprisonment. The section also stipulates that the convict may be fined. The severity of the punishment reflects the grave nature of the crime, which causes immense physical and emotional trauma to the victim. This section underscores the legal system’s commitment to protecting individuals from sexual violence and ensuring that perpetrators face stringent consequences for their actions. Section 376 is a critical component of the legal framework designed to uphold the dignity and rights of individuals and provide justice to survivors of sexual assault.',
            img: blog4
        },
        {
            id: 4,
            title: 'Section 420',
            category: 'Road Law',
            description: 'Section 420 of the Indian Penal Code (IPC) addresses the crime of cheating and dishonestly inducing delivery of property. This section is applicable when an individual deceives another person into delivering property or valuables through fraudulent means. The offense under this section is characterized by dishonesty and deception aimed at obtaining property unjustly. The punishment for those convicted under Section 420 can include imprisonment for a term that may extend up to seven years, along with a fine. The section aims to protect individuals from fraudulent schemes and financial exploitation. By prescribing a significant penalty, Section 420 serves as a deterrent against fraudulent activities and reinforces the legal system’s commitment to safeguarding property rights and ensuring fair transactions. This section plays a crucial role in maintaining trust and integrity in personal and commercial dealings by addressing acts of deceit and dishonesty.',
            img: blog5
        },
        {
            id: 6,
            title: 'Section 63',
            category: 'Contract Law',
            description: 'Section 63 of the Indian Contract Act, 1872, addresses the concept of "discharge by performance" of a contract. According to this section, when a party fulfills their contractual obligations completely and in accordance with the terms agreed upon, the contract is considered discharged. This means that the performance of the contract by one party discharges the other party from their obligations. Section 63 also allows for the possibility of partial performance, where the party performs a part of their obligations, provided that the performance is accepted by the other party. This section highlights the principle that the contract is legally binding and enforceable only when both parties have met their respective obligations. By recognizing performance as a means of discharging contractual duties, Section 63 ensures that agreements are honored and provides a legal basis for resolving disputes related to contract fulfillment.',
            img: blog1
        }
    ];


    const filteredLaws = laws.filter((law) => {
        const matchesSearch = law.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? law.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className='px-16 py-10'>
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
