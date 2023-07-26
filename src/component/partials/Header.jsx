import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BiLogoTelegram,BiLogoFacebook,BiLogoTwitter,BiLogoLinkedin} from 'react-icons/bi'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <section className="container-fluid expand-lg" style={{ backgroundColor: '#7a6352', height: '30px' }}>
    <div className="" style={{display: 'flex'}}>
      <article className="" style={{flexBasis: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <BiLogoTelegram className='mx-2 text-light' />
        <Link className="" style={{ textDecoration: 'none', color: 'white' }} href="mailto:sales@ks-tech.in">sales@ks-tech.in</Link>
      </article>
      <article className="" style={{flexBasis: '50%', display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
        <BiLogoFacebook className='mx-2 text-light'/>
        <BiLogoTwitter className='mx-2 text-light' />
        <BiLogoLinkedin className='mx-2 text-light' />
      </article>
    </div>
  </section>
  
  //   <div className="container mt-5">
  //   <div className="row">
  //     <div className="col-md-6">
  //       <div className="article article-left">
  //         <h2>Article 1</h2>
  //         <p>Content for Article 1</p>
  //       </div>
  //     </div>
  //     <div className="col-md-6 d-flex justify-content-end">
  //       <div className="article article-right">
  //         <h2>Article 2</h2>
  //         <p>Content for Article 2</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}

export default Header