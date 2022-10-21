import React from "react"
import Image from "next/image"


export default ({galleryTitle, imageUrl, galleryAlt, memberName, memberRole, id}) => (
        <div className="teampage__gallery-wrapper" id={id}>
            <div className="teampage__title">{galleryTitle}</div>
            <div className="teampage__gallery">
                {imageUrl.map((url, index) => (
                    <div className="teampage__gallery-item" key={index} >
                        <div className="teampage__gallery-photo-wrapper">
                            <Image className="teampage__gallery-photo" src={url} alt={galleryAlt}
                                   placeholder="blur" layout="fill" title={memberName[index]}
                                // objectFit="cover"
                                // objectPosition="0 0"
                            />
                        </div>
                        <div className="teampage__gallery-bio">
                            <div className="teampage__gallery-name">{memberName[index]}</div>
                            <div className="teampage__gallery-role">{memberRole[index]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )