import loading from '@/assets/images/loading.webp';

const Loading = () => {
	return (
  <div style={{ position: "absolute", right: 0, left: 0, display: "flex", justifyContent: "center", backgroundColor: "pink"}}>
    <img src={loading} alt="로딩중" />
  </div>  
)};

export default Loading;
