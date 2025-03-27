import React, { useEffect, useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PictureFrame from '../../components/PictureFrame';
import "./ModelPopUp.scss";

const ModelPopup = ({ open, onClose, imageUrl, info, modelUrl, video, imageInfo, onAudioEnded, tourActive }) => {


    console.log('modelUrl:', modelUrl);
    if (typeof modelUrl === 'string') {
        console.error('valid string');
    } else {
        console.error('modelUrl is not a valid string');
    }

    console.log('ModelPopup', modelUrl);
    
    const audioRef = useRef(null);

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
            audioElement.pause(); // Dừng phát âm thanh khi không ở chế độ tour
        }
    }, [tourActive]);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
            <DialogTitle>Thông tin tác phẩm</DialogTitle>
            <div className='dialogContent'>
                {imageUrl ? (
                    <Canvas className='canvas'>
                        <ambientLight intensity={1} />
                        <PictureFrame
                            position={[0, 0, 0]}
                            rotation={[0, 90, 0]}
                            scale={3}
                            imageUrl={imageUrl}
                            modelUrl={modelUrl}
                            info={info}
                            onClick={() => {}}
                            type={'model'}
                        />
                        <OrbitControls />
                    </Canvas>
                ) : (
                    <div>No model available</div>
                )}
                {video && tourActive && (
                    <audio ref={audioRef} controls src={video} autoPlay></audio>
                )}
                <img src={imageInfo}/>
            </div>
            <DialogActions>
                <Button onClick={onClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModelPopup;
