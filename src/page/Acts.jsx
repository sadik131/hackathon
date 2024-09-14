import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

function Acts() {
    const judgment = [
        { id: 1, text: "BNSS Section 4 - Trial of offences under Bharatiya Nyaya Sanhita, 2023 and other laws", category: "Criminal" },
        { id: 2, text: "BNSS Section 5 - Procedure under Bharatiya Nyaya Sanhita, 2023", category: "Civil" },
        { id: 3, text: "Bharatiya Nagarik Suraksha Sanhita, 2023", category: "Civil" },
        { id: 4, text: "Trial of offences under Bharatiya Nyaya Sanhita, 2023 and other laws", category: "Criminal" },
        { id: 5, text: "BNS Section 209 - Nonappearance in response to a proclamation under section 84", category: "Criminal" },
        { id: 6, text: "Central Goods and Services Tax (Amendment) Act, 2023", category: "Taxation" },
    ];

    const rowVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1 }
        }),
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <motion.div className="bg-slate-800 py-2 flex gap-4 w-full px-4 mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link className="text-white font-semibold hover:text-slate-300 transition-colors" to={"/"}>Home</Link>
            </motion.div>

            <motion.div
                className="mt-6 bg-white shadow-md rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-4 text-left font-semibold">Bare Acts List</th>
                            <th className="p-4 text-left font-semibold">SC Judgements</th>
                            <th className="p-4 text-left font-semibold">Category / State</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {judgment.map((item, index) => (
                            <motion.tr
                                key={item.id}
                                className="hover:bg-gray-100 transition-colors"
                                variants={rowVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                            >
                                <td className="p-4 text-gray-700">{item.text}</td>
                                <td className="p-4 text-center text-gray-500">&mdash;</td>
                                <td className="p-4 text-center text-gray-700">{item.category}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>

                <motion.div
                    className="p-4 bg-slate-800 text-white flex justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-bold">Showing {judgment.length} results</span>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Acts;
