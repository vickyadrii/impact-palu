type Props = {
  children: React.ReactNode;
};

const BorderImage = ({ children }: Props) => {
  return (
    <div className="md:p-3 p-2 bg-white border border-ip-gray-100 rounded-2xl">
      <div className="md:p-3 p-2 bg-white border border-ip-gray-100 rounded-2xl">{children}</div>
    </div>
  );
};

export default BorderImage;
