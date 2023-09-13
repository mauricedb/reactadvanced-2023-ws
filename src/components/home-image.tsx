import Image from 'next/image'

import homeImgage from './images/home-image.png'

export function HomeImage() {
  return <Image src={homeImgage} alt="React Advanced London" />
}
