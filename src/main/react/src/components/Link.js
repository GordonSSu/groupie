import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', `${href}`);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        window.location.reload();
    };

    return (
        <a onClick={onClick} href={`${href}`} className={className}>{children}</a>
    );
};

export default Link;