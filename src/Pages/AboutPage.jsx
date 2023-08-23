import { Link } from 'react-router-dom'
import './styles/AboutPage.css'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  
  const {t} = useTranslation()

  return (
    <article className='about'>
      <div className='about__header'>
        <h1 className='about__title'>Steven Contreras</h1>
        <h2 className='about__titule'>{t('aboutPage.title')}</h2>
        <p className='about__paragraph'>{t('aboutPage.p1')}</p>
        <p className='about__paragraph'>{t('aboutPage.p2')}</p>
      </div>
      <div className='about__goals'>
        <h2 className='about__goals-title'>{t('aboutPage.goals.title')}</h2>
        <p className='about__paragraph'>{t('aboutPage.goals.p1')}</p>
        <p className='about__paragraph'>
        {t('aboutPage.goals.p2')}
        </p>
      </div>
      <div className='about__ability'>
        <h2 className='about__ability-title'>{t('aboutPage.about-ability.title')}</h2>
        <ul className='about__ability-list'>
          <li className='about__ability-value'>{t('aboutPage.about-ability.li1')}</li>
          <li className='about__ability-value'>{t('aboutPage.about-ability.li2')}</li>
          <li className='about__ability-value'>{t('aboutPage.about-ability.li3')}</li>
          <li className='about__ability-value'>{t('aboutPage.about-ability.li4')}</li>
          <li className='about__ability-value'>{t('aboutPage.about-ability.li5')}</li>
          <li className='about__ability-value'>{t('aboutPage.about-ability.li6')}</li>
          <li className='about__ability-value'>{t('aboutPage.about-ability.li7')}</li>
        </ul>
      </div>
      <button className="about__btn"><Link to={'/contact'}>{t('aboutPage.btn')}</Link></button>
    </article>
  )
}

export default AboutPage