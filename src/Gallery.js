import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./Photos";

const slides = photos.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <div style={{background:"black"}}>
        <div  id='gallery' style={{background:"black",width:"80%",marginLeft:"10%"}}>
        <div style={{display:"block",margin:"%"}}>
        <div style={{height:"10vh",borderLeft:"3px solid #b5943b",letterSpacing: "1px",fontSize: "28px", marginBottom: "3%"}}>
                <div style={{display:"block"}}>
                <div style={{marginLeft:"50px",fontSize:"28px",fontFamily: 'Cursive',color:"white"}}>A WORLD OF LUXURY </div>
                <div style={{marginLeft:"50px",fontSize:"32px",color:"white",fontWeight:"700"}}  className="gold">Awaits You at The M3M</div>

                    </div>
                    </div>
                    </div>
            <PhotoAlbum photos={photos} layout="rows" targetRowHeight={300} onClick={({ index }) => setIndex(index)} />

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </div>
        </div>
    );
};

export default Gallery;