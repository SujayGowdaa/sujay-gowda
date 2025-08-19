/* eslint-disable no-unused-vars */
import useParticleConfig from "./useParticleConfig";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { options: particleConfig } = useParticleConfig();
  const options = particleConfig; // Directly assign the config
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

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className=" absolute left-0 top-0 z-[-1] opacity-50"
      />
    );
  }

  return null;
}
