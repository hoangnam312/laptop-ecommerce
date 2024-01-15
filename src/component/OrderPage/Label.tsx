const Label = ({
  children,
  isRequired,
}: {
  children: React.ReactNode;
  isRequired?: boolean;
}) => {
  return (
    <div className="font-semibold">
      {children}
      {isRequired && <span className="text-red-500">*</span>}
    </div>
  );
};

export default Label;
