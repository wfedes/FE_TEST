import style from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => (
  <>
    <header className={style.hd}>
      {/* 로고를 클릭하면 / 루트로 이동하기 위해 Link 적용 */}
      <Link href="/">
        <a>
          {/* 로고 이미지와 이미지 대체텍스트 적용 */}
          <Image src="/images/logo/hits_logo.png" alt="logo" width={124} height={32} />
          <span className={style.sr}>Hits logo image</span>
        </a>
      </Link>
    </header>
  </>
)

export default Header