import React from "react"
import Image from "next/image";


export default (props) => (
    <div className="blog-item">
        <div className="blog-item-photo-wrapper">
            <Image className="blog-item-photo" src={props.imgSrc} alt="Blog Poster Photo"
                   title="Blog Poster Photo" placeholder="blur" layout="fill"/>
        </div>
        <div className="blog-item-title">
            {props.blogTitle}
        </div>
        <div className="blog-item-date-wrapper">
            <div className="clock-svg">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                     enableBackground="new 0 0 512 512">
                    <g>
                        <g>
                            <path d="m256,51.8c-112.6,0-204.2,91.6-204.2,204.2s91.6,204.2 204.2,204.2 204.2-91.6 204.2-204.2-91.6-204.2-204.2-204.2v-1.42109e-14zm0,449.2c-135.1,0-245-109.9-245-245s109.9-245 245-245 245,109.9 245,245-109.9,245-245,245z"/>
                            <path d="m344.1,276.4h-88.1c-11.3,0-20.4-9.1-20.4-20.4v-157.8c0-11.3 9.1-20.4 20.4-20.4 11.3,0 20.4,9.1 20.4,20.4v137.4h67.7c11.3,0 20.4,9.1 20.4,20.4 5.68434e-14,11.3-9.1,20.4-20.4,20.4z"/>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="blog-item-date">
                {props.blogDate}
            </div>
        </div>
    </div>
)