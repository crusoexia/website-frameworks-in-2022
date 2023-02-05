import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleImageClick = React.useCallback(() => {
    router.push('/list');
  }, []);

  return (
    <>
      <h1>Welcome, Click to start!</h1>
      <Image
        id="wandering_earth"
        src="/images/wandering-earth.jpeg"
        width={1080}
        height={607}
        alt="background"
        onClick={handleImageClick}></Image>
    </>
  );
}

export default Home;
