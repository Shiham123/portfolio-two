import PropTypes from 'prop-types';

const SectionTitle = (props) => {
  const { title } = props;

  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl dark:text-colorFive text-colorTwo font-playfairDisplay font-bold tracking-widest m-auto text-center my-[15rem] border-b-[1px] border-colorTwo dark:border-colorFive w-1/2 pb-8 capitalize">
        {title}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
