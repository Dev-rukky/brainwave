

const Heading = ({ className, title }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h2 className="h2 text-center">{title}</h2>}
    </div>
  );
};

export default Heading;
