import Image from 'next/image'

const Home = () => {
  return (
    <>
      <h1>Welcome, Click to start!</h1>
      <Image
        id="wandering_earth"
        src="/images/wandering-earth.jpeg"
        width={1080}
        height={607}
        alt="background"></Image>
    </>
  );
}

export default Home;
