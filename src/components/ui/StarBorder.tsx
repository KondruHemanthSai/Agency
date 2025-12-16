import React from 'react';
import './StarBorder.css';

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    color?: string;
    speed?: string;
    className?: string;
    children?: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
    as: Component = 'div',
    className = '',
    color = 'cyan',
    speed = '4s',
    children,
    ...rest
}) => {
    return (
        <Component
            className={`star-border-container ${className}`}
            {...rest}
        >
            <div className="moving-border-mask">
                <div
                    className="border-beam"
                    style={{
                        background: `conic-gradient(from 0deg, transparent 80%, ${color} 100%)`,
                        animationDuration: speed
                    }}
                ></div>
            </div>
            {children}
        </Component>
    );
};

export default StarBorder;
