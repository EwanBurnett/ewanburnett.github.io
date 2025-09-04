
import useEmblaCarousel from 'embla-carousel-react'
import React, { useState, useEffect, useCallback } from 'react'
import Markdown from 'react-markdown'
import styles from './Gallery.module.css'

import { BsFullscreen } from 'react-icons/bs';
import { BsFullscreenExit } from 'react-icons/bs';

const slides = [
    {
        id: 0,
        title: "Test Image 1",
        image: "https://www.dummyimage.com/1920x1080/00f0fr/0011ff.png",
        description: "A Short __(Markdown!)__ Description of the slide.",
    },
    {
        id: 1,
        title: "Test Image 2",
        image: "https://www.dummyimage.com/1920x1080/a00f59/0011ff.png",
        description: "A Short (Markdown!) Description of the slide.",
    },
    {
        id: 2,
        title: "Test Image 3",
        image: "https://www.dummyimage.com/1920x1080/f0ff59/0011ff.png",
        description: "A Short (Markdown!) Description of the slide.",
    },
    {
        id: 3,
        title: "Test Image 4",
        image: "https://www.dummyimage.com/1920x1080/1aff59/0011ff.png",
        description: "A Short (Markdown!) Description of the slide.",
    },
    {
        id: 4,
        title: "Test Image 5",
        image: "https://www.dummyimage.com/1920x1080/ca5f39/0011ff.png",
        description: "A Short (Markdown!) Description of the slide.",
    },
];



export function Thumbnail(props) {
    const { id, image, selected, onClick } = props;

    return (
        <div className={styles.thumbnail}>
            <button
                onClick={onClick}
                type="button"
                className={styles.thumbnailButton}>

                {/*
            */}
                <img src={image} />
            </button>
        </div>
    )
}

export function Slide(props) {
    const { id, image, onClick} = props;

    return (
        <div className={styles.gallerySlide} key={id}>
            <button className={styles.thumbnailButton} onClick={onClick} type='button'>

            <div className={styles.slideImage}>
                <img src={image} />
            </div>
            </button>
        </div>
    );
}

export function EmblaCarousel(props) {
    const slides = props.slides;

    const options = { dragFree: false, loop: true };

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(null);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containsScroll: 'keepSnaps',
        dragFree: true
    });


    const [fullscreen, setFullscreen] = useState(false);

    const onToggleFullscrenClick = useCallback(() => {
        setFullscreen(!fullscreen);
    }, [fullscreen, setFullscreen]);

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index)
            emblaThumbsApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;

        setSelectedSlide(slides[emblaMainApi.selectedScrollSnap()]);
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]
    );

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();

        emblaMainApi.on('select', onSelect).on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);

    return (
        <div className={styles.galleryWrapper}>

            <div className={styles.carousel}>
                <div className={styles.galleryViewport} ref={emblaMainRef}>
                    <div className={styles.galleryContainer}>
                        {slides.map((slide) => {

                            return (
                                <>
                                    {/* TODO: Fullscreen overlay!
                                    {(fullscreen) ?
                                        (
                                            <div className={styles.fullscreenWrapper}>
                                                <img src={slide.image} />

                                                <div className={styles.slideOverlay}>
                                                    <button onClick={onToggleFullscrenClick}>
                                                        <BsFullscreenExit />
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (null)
                                    }
                                                        */}
                                    <>
                                        <Slide
                                            id={slide.id}
                                            image={slide.image}
                                            onClick={() => onThumbClick(slide.id)}
                                        />
                                        {selectedIndex === slide.id ?
                                            (<>
                                        <div className={styles.slideOverlay}>
                                            <button className={styles.fullscreenButton} onClick={onToggleFullscrenClick}>
                                                {fullscreen ?
                                                    (<BsFullscreenExit />) :
                                                    (<BsFullscreen />)
                                                }
                                            </button>
                                        </div>
                                            </>) : (null)}
                                    </>

                                </>
                            )
                        })}
                    </div>
                </div>

                {(selectedSlide) ?
                    (
                        <div className={styles.slideData}>

                            <div className={styles.slideTitle}>
                                {selectedSlide.title}
                            </div>
                            <div className={styles.slideDescription}>
                                <Markdown>
                                    {selectedSlide.description}
                                </Markdown>
                            </div>
                        </div>
                    ) :
                    null
                }
            </div>

            <div className={styles.galleryThumbnails}>
                <div className={styles.thumbnailViewport} ref={emblaThumbsRef}>
                    <div className={styles.thumbnailContainer}>
                        {
                            slides.map((slide) => (
                                <Thumbnail
                                    id={slide.id}
                                    image={slide.image}
                                    selected={selectedIndex === slide.id}
                                    onClick={() => onThumbClick(slide.id)}
                                /*TODO:*/
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div >
    )

}

export default function Gallery() {
    return (
        <div className={styles.gallery}>
            <EmblaCarousel slides={slides} />
        </div>
    )
}