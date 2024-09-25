import Description from "./Description";
import ListCards from "./ListCards";


const DownLoadExtensions = () => {
  return (
    <div className="pt-28 px-7 pb-10 xl:px-40 ">
      <Description
        title="Download the extension"
        desc="We've got more browsers in the pipeline, Please do let us know if you've got a favorite you'd like us to prioritize"
        className="pb-14"
      />
      <ListCards />
    </div>
  );
}

export default DownLoadExtensions