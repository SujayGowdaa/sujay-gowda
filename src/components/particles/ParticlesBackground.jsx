/* eslint-disable no-unused-vars */
import useParticleConfig from './useParticleConfig';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { options: particleConfig } = useParticleConfig();
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(() => {
    return particleConfig;
  }, [particleConfig]);

  if (init) {
    return (
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
        className=' absolute top-0 left-0 z-[-1]'
      />
    );
  }

  return <></>;
}
