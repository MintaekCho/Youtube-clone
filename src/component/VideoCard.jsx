import React from 'react';
import { Link } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function VideoCard({video}) {

    return (
        <li>
            <Link to={`/video/watch/${video.id}`}>
                <img className='w-full h-3/5 rounded-lg' src={`${video.snippet.thumbnails.high.url}`} alt="youtube-thumbnail" />
                <p className='line-clamp-2 text-md font-medium mt-2'>{video.snippet.title}</p>
                <p className='text-[#606060] mt-2'>{video.snippet.channelTitle}</p>
                <p className='text-[#606060]'>{formatAgo(video.snippet.publishedAt, 'ko')}</p>
            </Link>
            
        </li>
    );
}