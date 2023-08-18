import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesConfig from "./ParticlesConfig/particles-config"
import { useSelector } from "react-redux"
import particlesDmConfig from "./ParticlesConfig/particles-config-dm"

const ParticlesBg = () => {

  const darkMode = useSelector(reducer => reducer.darkMode)

  const particlesInit = useCallback( engine => {
    loadFull(engine)
  }, [])

  return (
    <div className="particles">
      <Particles 
        id="tsParticles"
        options={darkMode ? particlesDmConfig : particlesConfig}
        init={particlesInit}
      />
    </div>
  )
}

export default ParticlesBg