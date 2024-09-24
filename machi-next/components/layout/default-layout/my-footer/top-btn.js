import React, { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa";

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 监听页面滚动事件，决定按钮是否显示
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // 定义一个方法来滚动至页面顶部
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // 平滑滚动
        });
    };

    return (
        isVisible && (
            <button onClick={scrollToTop} style={styles}>
                <FaAngleUp style={{ width: '30px', height: '30px', color: '#785e4c' }} />
            </button>
        )
    );
};

const styles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    background: '#f7f5eb',
    color: 'white',
    border: 'none',
    width: '50px',
    height: '50px',
    borderRadius: '50px',
    outline: 'none',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.05)',
};

export default TopButton;
