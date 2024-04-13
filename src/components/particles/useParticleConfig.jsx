import { useMemo } from 'react';
import { useAppContext } from '../../store/AppContext';

export default function useParticleConfig() {
  const { theme } = useAppContext();

  let color = {
    background: theme === 'light' ? '#ffffff' : '#0a0a0a',
    lines: theme === 'light' ? '#0a0a0a' : '#FFFFFF',
  };

  const options = {
    background: {
      color: {
        value: `${color.background}`,
      },
    },
    fpsLimit: 165,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          quantity: 3,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: `${color.lines}`,
      },
      links: {
        color: `${color.lines}`,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1.2,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
      zLayers: 0,
    },
    detectRetina: true,
  };

  return { options };
}
