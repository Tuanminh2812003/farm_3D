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
                        info: { artist: 'LỄ HỘI KHMER Ở CÀ MAU', title: 'Lại Lâm Tùng', year: `Giải xuất sắc` },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/27.jpg",
                        hotspots: [
                            {
                              id: 'head1',
                              position: [0, 1, 1.1],
                              title: 'Đầu',
                              description: '<img src="/Farm/Image/bonus/bonus1_1.png"/>',
                            },
                            {
                              id: 'head2',
                              position: [0, -0.7, -1.2],
                              title: 'Mắt',
                              description: '<img src="/Farm/Image/bonus/bonus1_2.png"/>',
                            },
                            {
                                id: 'head3',
                                position: [0, -0.8, -2],
                                title: 'Mắt',
                                description: '<iframe style={{margin:"12px"}} width="100%" height="500px" src="https://www.youtube.com/embed/4RwogJ5bHaA?si=u3h5jLu5x0zVgjeC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                              }
                        ]
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 2,
                        position: [-5.93372, 2.15649, -4.70689],
                        rotation: [0, -15, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_02.glb",
                        info: { artist: 'NGHÌN XƯA LƯU DẤU', title: 'Lê Thị Thanh', year: `Giải nhất` },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/2.jpg",
                        hotspots: [
                            {
                              id: 'head3',
                              position: [0, 0, 0.5],
                              title: 'Đầu',
                              description: '<div>Nó như này này</div>',
                            },
                            {
                              id: 'head4',
                              position: [0, 0, -0.5],
                              title: 'Mắt',
                              description: '<iframe style={{margin:"12px"}} width="100%" height="500px" src="https://www.youtube.com/embed/0Z54HE1jl60?si=H7hCYKtPAHv_IXHt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',

                            }
                        ]
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 3,
                        position: [-5.64392, 1.84545, 3.11312],
                        rotation: [0, 12, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_03.glb",
                        info: { artist: 'HIẾU LĂNG MỘT CHIỀU THU', title: 'Trần Thị Thanh Dung', year: `Giải nhì` },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/3.jpg",
                        hotspots: [
                            {
                                id: 'head1',
                                position: [0, 1, 0],
                                title: 'Đầu',
                                description: '<img src="/Farm/Image/bonus/bonus3_1.png"/>',
                            },
                            {
                                id: 'head1',
                                position: [0, 0, 0],
                                title: 'Đầu',
                                description: '<iframe style={{margin:"12px"}} width="100%" height="500px" src="https://www.youtube.com/embed/XumZzxGSlTU?si=bvv2hdxAIGcYcfSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',

                            },
                            // {
                            //     id: 'head2',
                            //     position: [0, -0.7, -1.2],
                            //     title: 'Mắt',
                            //     description: '<img src="/Farm/Image/bonus/bonus1_2.png"/>',
                            // }
                        ]
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 4,
                        position: [-4.62278, 1.85073, 5.63254],
                        rotation: [0, 24, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_04.glb",
                        info: { artist: 'CHÙA HANG ĐẢO LÝ SƠN', title: 'Lê Phi Hùng', year: 'Giải nhì' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/4.jpg",
                        hotspots: [
                            {
                                id: 'head1',
                                position: [0, -0.4, -1],
                                title: 'Đầu',
                                description: '<img src="/Farm/Image/bonus/bonus4_1.png"/>',
                            },
                            {
                                id: 'head1',
                                position: [0, -0.4, 0.5],
                                title: 'Đầu',
                                description: '<iframe style={{margin:"12px"}} width="100%" height="500px" src="https://www.youtube.com/embed/Rqwci6vR0Zg?si=hn9KLtCunqbi6Flv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',

                            },
                            // {
                            //     id: 'head2',
                            //     position: [0, -0.7, -1.2],
                            //     title: 'Mắt',
                            //     description: '<img src="/Farm/Image/bonus/bonus1_2.png"/>',
                            // }
                        ]
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 5,
                        position: [10.0221, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_05.glb",
                        info: { artist: 'TIÊN NỮ - CÁNH DIỀU VÀ MÁI ĐÌNH', title: 'Phạm Hùng Anh', year: 'Giải ba' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/5.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 6,
                        position: [6.56459, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_06.glb",
                        info: { artist: 'MÚA RỒNG', title: 'Dương Hồng Hạnh', year: 'Giải ba' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/6.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 7,
                        position: [3.10709, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_07.glb",
                        info: { artist: 'LỄ HỘI LAM KINH', title: 'Vũ Trọng Thành', year: 'Giải ba' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/7.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 8,
                        position: [-0.35041, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_08.glb",
                        info: { artist: 'TRỞ VỀ', title: 'Nguyễn Tiến Việt', year: 'Giải ba' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/8.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 9,
                        position: [-3.80791, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_09.glb",
                        info: { artist: 'HỒN CHÉ', title: 'Y Luê Adrơng', year: `Giải khuyến khích` },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/9.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 10,
                        position: [-7.26541, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_10.glb",
                        info: { artist: 'RƯỚC KIỆU', title: 'Phạm Ngọc Linh', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/10.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 11,
                        position: [-10.72291, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_11.glb",
                        info: { artist: 'BÀ CHÚA', title: 'Phạm Tuấn Anh', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/11.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 12,
                        position: [-14.18041, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_12.glb",
                        info: { artist: 'KHÔNG GIAN CỒNG CHIÊNG TÂY NGUYÊN', title: 'Phạm Thế Bộ', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/12.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 13,
                        position: [-17.63791, 2.66196, 15.675],
                        rotation: [0, 90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_13.glb",
                        info: { artist: 'TUỒNG', title: 'Văn Minh Chìu', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/13.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 14,
                        position: [-22.5231, 2.6673, 12.06],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_14.glb",
                        info: { artist: 'SỢI VÀNG', title: 'Tử Mộc Trà (Phạm Thùy Dương)', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/14.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 15,
                        position: [-22.5231, 2.6673, 8.60245],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_15.glb",
                        info: { artist: 'LÊN ĐÈN', title: 'Phạm Tuấn Dương', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/15.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 16,
                        position: [-22.5231, 2.6673, 5.14495],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_16.glb",
                        info: { artist: 'VÀNG SON MỘT THUỞ', title: 'Nguyễn Thị Lam', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/16.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 17,
                        position: [-22.5231, 2.6673, 1.68745],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_17.glb",
                        info: { artist: 'TRẠI BẢO AN BINH', title: 'Trần Nam Long', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/17.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 18,
                        position: [-22.5231, 2.6673, -1.77005],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_18.glb",
                        info: { artist: 'RỐI NƯỚC', title: 'Mai Ngọc Minh', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/18.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 19,
                        position: [-22.5231, 2.6673, -5.22755],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_19.glb",
                        info: { artist: 'NÉT ĐẸP VÙNG CAO', title: 'Trần Giang Nam', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/19.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 20,
                        position: [-22.5231, 2.6673, -8.68505],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_20.glb",
                        info: { artist: 'TRUYỀN THUYẾT LẠC LONG QUÂN - ÂU CƠ', title: 'Hùng Khuynh (Phạm Mạnh Hùng)', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/20.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 21,
                        position: [-22.5231, 2.6673, -12.14255],
                        rotation: [0, 0, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_21.glb",
                        info: { artist: 'TIẾN SĨ GIẤY', title: 'Nguyễn Hiền Phương', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/21.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 22,
                        position: [-17.6298, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_22.glb",
                        info: { artist: 'LỄ HỘI CẦU NGƯ', title: 'Bùi Văn Quang', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/22.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 23,
                        position: [-14.1723, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_23.glb",
                        info: { artist: 'MIỀN KÝ ỨC', title: 'Lê Ngọc Thể', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/23.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 24,
                        position: [-10.7148, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_24.glb",
                        info: { artist: 'THÊU VÁY MÙA XUÂN', title: 'Lương Đức Thịnh', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/24.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 25,
                        position: [-7.2573, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_25.glb",
                        info: { artist: 'HỘI CHỬ ĐỒNG TỬ', title: 'Lê Văn Thước', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/25.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 26,
                        position: [-3.7998, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_26.glb",
                        info: { artist: 'RỒNG', title: 'Phạm Xuân Trung', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/26.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 27,
                        position: [-0.3423, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_27.glb",
                        info: { artist: 'HỒN VIỆT', title: 'Nguyễn Bá Tuấn', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/27.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 28,
                        position: [3.1152, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_28.glb",
                        info: { artist: 'RỪNG QUỐC GIA CÚC PHƯƠNG', title: 'Đặng Khánh Tường', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/28.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 29,
                        position: [6.5723, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_29.glb",
                        info: { artist: 'MÊNH MÔNG PHỐ HỘI', title: 'Nguyễn Ngọc Vinh', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/29.jpg"
                        // video: "/assets/Audio/voice1.mp3"
                    },
                    {
                        id: 30,
                        position: [10.0302, 2.6673, -15.683],
                        rotation: [0, -90, 0],
                        scale: 1,
                        imageUrl: "https://res.cloudinary.com/dqlelya6o/image/upload/v1733040773/x24rsgb40s2cctuyjfcy.png",
                        modelUrl: "/Farm/Model_baotang_full_19-3/model_anh_treo/img_30.glb",
                        info: { artist: 'HƯƠNG SẮC VÙNG CAO', title: 'Phạm Quang Vinh', year: 'Giải khuyến khích' },
                        type: 'model',
                        video: "https://www.youtube.com/embed/ayLxUY9Jsh0?si=9KfHPhR6XZRtK7g4",
                        imageInfo: "/Farm/Image/30.jpg"
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
