import React, { useState, useRef, useEffect } from 'react';

function TrainerPage() {
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [error, setError] = useState('');

  const toggleCamera = async () => {
    if (isCameraOn) {
      // Stop the camera stream
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setIsCameraOn(false);
    } else {
      // Request and start the camera stream
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsCameraOn(true);
        setError('');
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError('Could not access the camera. Please ensure permissions are granted.');
      }
    }
  };

  // Ensure camera shuts off when component unmounts (user navigates away)
  useEffect(() => {
    return () => {
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>AI Gym Trainer</h1>
        <p style={{ color: 'var(--text-muted)' }}>Real-time posture detection and rep counting using MediaPipe.</p>
      </div>
      
      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Camera Feed</h3>
          <div style={{ background: '#000', height: '300px', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {error ? (
              <span style={{ color: '#F87171', padding: '1rem', textAlign: 'center' }}>{error}</span>
            ) : (
              <>
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  muted 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: isCameraOn ? 'block' : 'none' }}
                />
                {!isCameraOn && <span style={{ color: '#fff' }}>[ Camera is Offline ]</span>}
              </>
            )}
          </div>
          <button onClick={toggleCamera} style={{ marginTop: '1rem', width: '100%' }}>
            {isCameraOn ? 'Stop Workout' : 'Start Workout'}
          </button>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Real-Time Stats</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem' }}>
              <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Current Exercise</span>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Bicep Curls</div>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem' }}>
              <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Reps Counted</span>
              <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--secondary)' }}>
                {isCameraOn ? '12' : '--'}
              </div>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(244,63,94,0.1)', borderRadius: '1rem' }}>
              <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>AI Feedback</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                {isCameraOn ? 'Keep your elbows tucked in!' : 'Start the camera to see feedback.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerPage;
