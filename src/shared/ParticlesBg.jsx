import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesConfig from "./ParticlesConfig/particles-config"

const ParticlesBg = () => {

  const particlesInit = useCallback( engine => {
    loadFull(engine)
  }, [])

  return (
    <div className="particles">
      <Particles 
        id="tsParticles"
        options={particlesConfig}
        init={particlesInit}
      />
    </div>
  )
}

export default ParticlesBg