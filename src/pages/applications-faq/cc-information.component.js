import React from 'react';
import { Form, Input } from 'antd';

const CCInformation = () => {
    return (
        <Form layout='vertical'>
            <Form.Item
                label='Input without validation'
                help="Example help text that remains unchanged."
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={<span className='success-label'>Valid input</span>}
                hasFeedback validateStatus="success"
                help={<span className='success-label'>Sweet. That name is available</span>}
            >
                <Input className='success-input' />
            </Form.Item>
            <Form.Item
                label={<span className='error-label'>Inalid input</span>}
                hasFeedback validateStatus="error"
                help={<span className='error-label'>Oh noes! That name is already taken</span>}
            >
                <Input/>
            </Form.Item>
        </Form>
    )
};

export default CCInformation;