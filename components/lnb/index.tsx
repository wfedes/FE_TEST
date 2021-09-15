import style from './style.module.scss'
import Link from 'next/link'

const Lnb = () => (
  <>
    <ul className={style.lnb}>
      {/* 이동할 페이지가 없으므로 기본 패스는 모두 루트로 임시 지정 */}
      <li><Link href="/"><a>Alpha</a></Link></li>
      <li><Link href="/"><a>Bravo</a></Link></li>
      <li><Link href="/"><a>Charlie</a></Link></li>
      <li><Link href="/"><a>Delta</a></Link></li>
      <li><Link href="/"><a>Echo</a></Link></li>
      {/* 현재 활성화된 페이지의 li 스타일을 다르게 적용 */}
      <li className={style.active}>Result</li>
    </ul>
  </>
)

export default Lnb