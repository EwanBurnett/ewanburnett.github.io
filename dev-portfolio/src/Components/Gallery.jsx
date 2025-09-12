
import useEmblaCarousel from 'embla-carousel-react'
import React, { useState, useEffect, useCallback } from 'react'
import Markdown from 'react-markdown'
import styles from './Gallery.module.css'

import { BsFullscreen } from 'react-icons/bs';
import { BsFullscreenExit } from 'react-icons/bs';

import axios from 'axios';




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
    const { id, image, onClick } = props;

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
    const [slides, setSlides] = useState(null);

    useEffect(() => {
        //Retrieve the Slides from JSON via Axios. 
        axios.get("/data/gallery.json")
            .then((res) => {
                setSlides(res.data.slides);
            }
            );
    });

    if (slides === null) {
        return (
            <></>
        )
    }
    else {
        return (
            <div className={styles.gallery}>
                <EmblaCarousel slides={slides} />
            </div>
        )
    }
}