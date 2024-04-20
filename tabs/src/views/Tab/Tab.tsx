import { redirect, useParams } from "react-router";

const Tab = () => {
  const { id } = useParams();
  if (!id) {
    redirect('/tabs');
  }

  return (
    <>
      <p>Tab {id}</p>
    </>
  );
};

export default Tab;
