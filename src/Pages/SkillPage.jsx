import './styles/SkillPage.css'

const SkillPage = () => {

  const skillImage = [{url: '/svg/react-01.svg', id: 1},{url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4} ]

  return (
    <div className='skill'>
      {
        skillImage.map(skill => (
          <img className='skill__logo' key={skill.id} src={skill.url} alt="logo de la habilidad" />
        ))
      }
      <button></button>
    </div>
  )
}

export default SkillPage