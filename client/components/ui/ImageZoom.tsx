import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useEffect, useState } from 'react';

interface ImageZoomProps {
    imageURL: string;
    productName: string;
}

function ImageZoom({ imageURL, productName }: ImageZoomProps) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const [activeImage, setActiveImage] = useState(imageURL);
    useEffect(() => {
        setActiveImage(imageURL)
    }, [imageURL]);
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={activeImage}>
                    <img className='border-4 rounded-xl border-cyan-700' alt={productName} src={activeImage} />
                </a>
            </LightGallery>
        </div>
    );
}

export default ImageZoom;