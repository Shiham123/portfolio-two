import Content from '../../SubSection/Content/Content';
import ContentThree from '../../SubSection/Content/ContentThree';
import ContentTwo from '../../SubSection/Content/ContentTwo';
import SectionTitle from '../../SubSection/SectionTitle/SectionTitle';

const MyWorkSection = () => {
  return (
    <section>
      <SectionTitle title="what i do?" />
      <Content />
      <ContentTwo />
      <ContentThree />
    </section>
  );
};

export default MyWorkSection;
