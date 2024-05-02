import loading from '@/assets/images/loading.webp';

const Loading = () => {
	return (
  <main style={{ position: "fixed", right: 0, left: 0, top: 0, bottom: 0, display: "flex", justifyContent: "center", backgroundColor: 'white', alignItems: "center"}}>
    <img src={loading} alt="로딩중" width={200} height={200} />
  </main>  
)};

export default Loading;
