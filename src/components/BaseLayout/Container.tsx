import React, { FC } from 'react';


const Container: FC<Object> = ({ children }) => {
    return <div className='container mx-auto p-4'>{children}</div>;
}

export default Container

