'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { useGameLoop } from '@/hooks/useGameLoop';

export const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gameState = useRef({
    birdY: 300,
    birdVelocity: 0,
    pipes: [
      { x: 600, gapTop: 200 },
      { x: 900, gapTop: 300 },
      { x: 1200, gapTop: 150 },
    ],
    clouds: [
      { x: 100, y: 100, size: 40, speed: 0.5 },
      { x: 300, y: 150, size: 50, speed: 0.3 },
      { x: 500, y: 80, size: 35, speed: 0.7 },
    ],
    score: 0,
    gameOver: false,
  });

  const assets = useRef<{ bird: HTMLImageElement; pipe: HTMLImageElement; bg: HTMLImageElement } | null>(null);

  useEffect(() => {
    const loadAssets = () => {
      const bird = new Image(); bird.src = '/assets/bird.png';
      const pipe = new Image(); pipe.src = '/assets/pipe.png';
      const bg = new Image(); bg.src = '/assets/background.png';
      assets.current = { bird, pipe, bg };
    };
    loadAssets();
  }, []);

  const handleJump = useCallback(() => {
    if (gameState.current.gameOver) {
      gameState.current = { 
        birdY: 300, 
        birdVelocity: 0, 
        pipes: [
            { x: 600, gapTop: 200 },
            { x: 900, gapTop: 300 },
            { x: 1200, gapTop: 150 },
        ], 
        clouds: gameState.current.clouds, 
        score: 0, 
        gameOver: false 
      };
      return;
    }
    gameState.current.birdVelocity = -6;
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', (e) => { if (e.code === 'Space') handleJump(); });
    window.addEventListener('mousedown', handleJump);
    return () => {
      window.removeEventListener('keydown', (e) => { if (e.code === 'Space') handleJump(); });
      window.removeEventListener('mousedown', handleJump);
    };
  }, [handleJump]);

  useGameLoop((deltaTime) => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    if (gameState.current.gameOver) return;

    // Debug: Check if loop is running
    // console.log('Game loop running, delta:', deltaTime);

    gameState.current.birdVelocity += 0.3;
    gameState.current.birdY += gameState.current.birdVelocity;

    gameState.current.pipes.forEach(p => p.x -= 3);
    gameState.current.clouds.forEach(c => {
      c.x -= c.speed;
      if (c.x < -100) c.x = dimensions.width + 100;
    });

    // Spawn new pipe when the first one goes off-screen
    if (gameState.current.pipes[0].x < -60) {
      gameState.current.pipes.shift();
      // Calculate x based on the last pipe to ensure consistent spacing
      const lastPipe = gameState.current.pipes[gameState.current.pipes.length - 1];
      gameState.current.pipes.push({ 
        x: lastPipe.x + 300, 
        gapTop: Math.random() * (dimensions.height - 300) + 100 
      });
      gameState.current.score++;
    }

    if (gameState.current.birdY > dimensions.height || gameState.current.birdY < 0) gameState.current.gameOver = true;
    gameState.current.pipes.forEach(p => {
      if (Math.abs(p.x - 100) < 30 && (gameState.current.birdY < p.gapTop || gameState.current.birdY > p.gapTop + 120)) gameState.current.gameOver = true;
    });

    const canvas = canvasRef.current;
    if (!canvas) {
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return;
    }

    // Classic background + procedural clouds
    ctx.fillStyle = '#4EC0CA'; // Softer sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // Slightly more opaque clouds
    gameState.current.clouds.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
      ctx.arc(c.x + c.size * 0.8, c.y, c.size * 1.2, 0, Math.PI * 2);
      ctx.arc(c.x + c.size * 1.6, c.y, c.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Bird
    const bird = assets.current?.bird;
    if (bird && bird.complete && bird.naturalWidth > 0) {
      // Adjusted size and position for the new bird image
      ctx.drawImage(bird, 90, gameState.current.birdY, 50, 40);
    } else {
      // Simple bird shape as fallback - rounder bottom
      ctx.fillStyle = '#FFD700'; // Gold yellow
      ctx.beginPath();
      // Main body (rectangle)
      ctx.fillRect(100, gameState.current.birdY, 35, 20);
      // Round bottom (arc)
      ctx.arc(117.5, gameState.current.birdY + 20, 17.5, 0, Math.PI);
      ctx.fill();
      
      // Eye
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(125, gameState.current.birdY + 5, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Beak
      ctx.fillStyle = '#FF8C00'; // Darker orange
      ctx.fillRect(135, gameState.current.birdY + 10, 10, 10);
    }

    // Classic Blue Pipes with glow
    gameState.current.pipes.forEach((p) => {
        ctx.fillStyle = '#3498DB'; // Bright blue
        ctx.strokeStyle = '#2980B9'; // Darker blue border
        ctx.lineWidth = 3;
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#5DADE2';
        
        // Gap size
        const gapSize = 120;
        
        // Top pipe: from 0 to gapTop
        ctx.fillRect(p.x, 0, 60, p.gapTop);
        ctx.strokeRect(p.x, 0, 60, p.gapTop);
        // Top lip
        ctx.fillRect(p.x - 5, p.gapTop - 20, 70, 20);
        ctx.strokeRect(p.x - 5, p.gapTop - 20, 70, 20);

        // Bottom pipe: starts after the gap
        const bottomPipeY = p.gapTop + gapSize;
        
        ctx.fillRect(p.x, bottomPipeY, 60, 600); // Draw with plenty of height
        ctx.strokeRect(p.x, bottomPipeY, 60, 600);
        // Bottom lip
        ctx.fillRect(p.x - 5, bottomPipeY, 70, 20);
        ctx.strokeRect(p.x - 5, bottomPipeY, 70, 20);
        
        // Reset shadow for subsequent drawings
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
    });
    
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.font = 'bold 50px Arial';
    ctx.strokeText(`${gameState.current.score}`, canvas.width / 2 - 15, 60);
    ctx.fillText(`${gameState.current.score}`, canvas.width / 2 - 15, 60);

    if (gameState.current.gameOver) {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 50px Arial';
        ctx.fillText('GAME OVER', canvas.width / 2 - 130, canvas.height / 2);
    }
  });

  return <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} style={{ display: 'block', cursor: 'pointer' }} />;
};
