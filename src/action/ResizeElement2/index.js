import { useEffect } from 'react';
import throttle from 'lodash.throttle';

const ResizeHandler = ({ updateItemsForScreenSize }) => {
    useEffect(() => {
        const handleResize = throttle(() => {
            const width = window.innerWidth;
            let newItems = [];

            if (width > 0) {
                newItems = [
                    {
                        id: 1,
                        position: [-5.97, 2.3, -0.7],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_01.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 2,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_02.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 3,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_03.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 4,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_04.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 5,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_05.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 6,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_06.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 7,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_07.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 8,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_08.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 9,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_09.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 10,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_10.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 11,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_11.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 12,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_12.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 13,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_13.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 14,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_14.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 15,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_15.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 16,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_16.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 17,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_17.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 18,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_18.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 19,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_19.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 20,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_20.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 21,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_21.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 22,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_22.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 23,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_23.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 24,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_24.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 25,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_25.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 26,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_26.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 27,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_27.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 28,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_28.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 29,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_29.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 30,
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_30.glb",
                        info: { artist: 'NoInfo', title: 'chair', year: 2025 },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    
                ];
            }

            // Check if newItems is different from current items
            updateItemsForScreenSize((prevItems) => {
                if (JSON.stringify(prevItems) !== JSON.stringify(newItems)) {
                    return newItems;
                }
                return prevItems;
            });
        }, 200); // Throttle resize events to every 200ms

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to handleResize to set initial items

        return () => window.removeEventListener('resize', handleResize);
    }, [updateItemsForScreenSize]);

    return null;
};

export default ResizeHandler;
