import React from 'react';
import './index.scss';

const SocialIcons = () => {
    const socialLinks = [
        {
            platform: 'github',
            url: 'https://github.com/manningstinson',
            iconClass: 'fa-brands fa-github',
            color: '#fff'
        },
        {
            platform: 'linkedin',
            url: 'https://linkedin.com/in/manningstinson',
            iconClass: 'fa-brands fa-linkedin',
            color: '#fff'
        },
        {
            platform: 'facebook',
            url: 'https://facebook.com/manningstinsonartworks',
            iconClass: 'fa-brands fa-facebook',
            color: '#fff'
        },
        {
            platform: 'instagram',
            url: 'https://instagram.com/mms_artworks',
            iconClass: 'fa-brands fa-instagram',
            color: '#fff'
        },

        {
            platform: 'pinterest',
            url: 'https://pinterest.com/manningstinson',
            iconClass: 'fa-brands fa-pinterest',
            color: '#fff'
        }  


    ];

    return (
        <div className="flex items-center">
            {socialLinks.map((social) => {
                return (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:opacity-80 transition-opacity duration-200"
                        style={{ color: social.color, marginRight: '.5rem' }}  // Added marginRight here
                    >
                        <i className={social.iconClass}></i>
                    </a>
                );
            })}
        </div>
    );
};

export default SocialIcons;