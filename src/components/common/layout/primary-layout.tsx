import Navbar from "../navbar/navbar";

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="pt-4">{children}</div>
    </>
  );
};

export default PrimaryLayout;
