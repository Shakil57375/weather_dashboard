import { InfinitySpin } from "react-loader-spinner";

function Loader({text}) {
  return (
    <div style={{ textAlign: "center" }}>
      <InfinitySpin
        visible={true}
        width={200}
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
      <p>{text}</p>
    </div>
  );
}

export default Loader;
