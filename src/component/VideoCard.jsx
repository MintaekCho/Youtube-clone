import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoCard({video}) {
    return (
        <article>
            <Link>
                <img className='w-full h-3/5 rounded-lg' src={`${video.snippet.thumbnails.default.url}`} alt="youtube-thumbnail" />
                <h3 className='line-clamp-2 text-md font-medium'>{video.snippet.title}</h3>
                <p className='text-[#606060]'>{video.snippet.channelTitle}</p>
            </Link>
            
        </article>
    );
}