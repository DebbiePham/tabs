import React, {useState} from 'react';
import './styles.css';

const Tabs = (props) => {
    const {itemArr} = props;

    const [content, setContent] = useState(itemArr[0].content);

    const switchTabs = (value) => {
        setContent(value.content);
    }

    return (
        <div className='container'>
            <div className="header">
                {itemArr.map((item, index) => {
                    return <div key= {index} className='btn-group'>
                                <button className='btn' onClick = {(e) => switchTabs(item)}>{item.tab}</button>
                            </div>
                    })
                }
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
    );
}

export default Tabs;