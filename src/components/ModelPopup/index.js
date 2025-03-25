import React, { useEffect, useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PictureFrame from '../../components/PictureFrame';
import "./ModelPopUp.css";

const ModelPopup = ({ open, onClose, imageUrl, info, modelUrl, video, onAudioEnded, tourActive }) => {
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
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Information of model</DialogTitle>
            <DialogContent className='dialogContent'>
                {imageUrl ? (
                    <Canvas style={{ height: '400px' }}>
                        <ambientLight intensity={1} />
                        <PictureFrame
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}
                            scale={3}
                            imageUrl={imageUrl}
                            modelUrl={"/Farm/Model_baotang_full_19-3/model_anh_treo/img_01.glb"}
                            info={info}
                            onClick={() => {}}
                            type={'image'}
                        />
                        <OrbitControls />
                    </Canvas>
                ) : (
                    <div>No model available</div>
                )}
                {video && tourActive && (
                    <audio ref={audioRef} controls src={video} autoPlay></audio>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModelPopup;
