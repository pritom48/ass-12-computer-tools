import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolDetails = () => {
    const { toolId } = useParams()
    const [tool, settool] = useState({})

    useEffect(() => {
        const url = `/tool/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => settool(data))
    }, [])

    return (
        <div>
            <h2>{toolId}</h2>
            <h2>{tool.price}</h2>
        </div>
    );
};

export default ToolDetails;