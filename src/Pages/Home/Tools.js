import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const [tools, settools] = useState([]);

    useEffect(() => {
        fetch('https://infinite-falls-58428.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => settools(data))
    }, [])

    return (
        <div>
            <h2 className='text-5xl font-bold text-center py-10'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tools.map(tool => <ToolsCard
                        key={tool._id}
                        tool={tool}
                    ></ToolsCard>)
                }
            </div>
        </div>
    );
};

export default Tools;