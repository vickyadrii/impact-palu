import Navbar from "../navbar/navbar";

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default PrimaryLayout;
