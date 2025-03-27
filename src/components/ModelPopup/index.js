import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PictureFrame from '../../components/PictureFrame';
import './ModelPopUp.scss';

const ModelPopup = ({ open, onClose, imageUrl, info, modelUrl, video, imageInfo, onAudioEnded, tourActive, hotspots = [] }) => {
    const [selectedHotspot, setSelectedHotspot] = useState(null); // Hotspot được chọn
    const audioRef = useRef(null);

    console.log('hotspotsmodelpopup' ,hotspots);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.addEventListener('ended', onAudioEnded);
            return () => {
                audioElement.removeEventListener('ended', onAudioEnded);
            };
        }
    }, [onAudioEnded]);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement && !tourActive) {
            audioElement.pause();
        }
    }, [tourActive]);

    // Modify the onClose handler to reset selectedHotspot when popup is closed
    const handleClose = () => {
        setSelectedHotspot(null); // Reset the selectedHotspot state
        onClose(); // Call the onClose function passed as a prop
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>Thông tin tác phẩm</DialogTitle>
            <div className="dialogContent">
                {imageUrl ? (
                    <Canvas className="canvas">
                        <PictureFrame
                            position={[0, 0, 0]}
                            rotation={[0, -90, 0]}
                            scale={3}
                            imageUrl={imageUrl}
                            modelUrl={modelUrl}
                            info={info}
                            onClick={() => {}}
                            type={'model'}
                            hotspots={hotspots}
                            onHotspotClick={setSelectedHotspot} // Nhận hotspot đã chọn
                        />
                        <OrbitControls />
                    </Canvas>
                ) : (
                    <div>No model available</div>
                )}

                {/* ✅ Hiện ảnh khi chưa click hotspot */}
                {!selectedHotspot && (
                    <img className='image-default' src={imageInfo} alt="Chi tiết tác phẩm" style={{ maxWidth: '100%', marginTop: '20px' }} />
                )}

                {/* ✅ Hiện nội dung HTML khi đã click hotspot */}
                {selectedHotspot && (
                    <div className="image-default">
                        <div className='image-default__inner' dangerouslySetInnerHTML={{ __html: selectedHotspot.description }} />
                        <div style={{marginTop:"24px"}} className='image-default__inner__button' onClick={() => setSelectedHotspot(null)}>
                            Xem thông tin tác giả
                        </div>
                    </div>
                )}

                {video && tourActive && (
                    <audio ref={audioRef} controls src={video} autoPlay></audio>
                )}
            </div>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Đóng</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModelPopup;
