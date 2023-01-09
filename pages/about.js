import AboutCard from '../components/utils/cards/about/AboutCard';
import ChooseCategorySVG from '../components/utils/svg/ChooseCategorySVG';
import ContactExpertSVG from '../components/utils/svg/ContactExpertSVG';
import FindExpertSVG from '../components/utils/svg/FindExpertSVG';
import RateExpertSVG from '../components/utils/svg/RateExpertSVG';
import { AboutPageContainer } from '../styles/about.styles';

function About() {
  return (
    <AboutPageContainer>
      <AboutCard
        Svg={ChooseCategorySVG}
        title={'1. Choose your Category'}
        text={
          "Select from a list of the world's most renowned experts on any subject."
        }
        index={0}
      />
      <AboutCard
        Svg={FindExpertSVG}
        title={'2. Find an Expert'}
        text={
          'All of our experts go through a rigorous screening procedure to guarantee the safety of our members as well as that they are actually the best the globe has to offer. They range from top college professors to ordinary folks who have committed their lives to gaining expertise on a single subject. Simply select the educator that best meets your requirements and contact them to begin or arrange a video education session.'
        }
        index={1}
      />
      <AboutCard
        Svg={ContactExpertSVG}
        title={'3. Contact your expert'}
        text={
          "You may contact our educators and experts by using the many services given by Donnie's List. Text, call, or video chat with available experts right away."
        }
        index={2}
      />
      <AboutCard
        Svg={RateExpertSVG}
        title={'4. Rate your experience'}
        text={
          "Donnie's List strives to ensure that every encounter is of high quality. Your feedback is very valuable to us. Let us know how they accomplished by evaluating your instructor after your session."
        }
        index={3}
      />
    </AboutPageContainer>
  );
}

export default About;
